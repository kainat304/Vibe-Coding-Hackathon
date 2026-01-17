// Vibe Theme Switcher (3-Way Toggle)
// Cycles through: Default (Light) -> Dark -> Neon -> Default

(function() {
  const THEME_KEY = 'theme';
  const THEMES = ['default', 'dark', 'neon'];
  
  function getStoredTheme() {
    return localStorage.getItem(THEME_KEY);
  }

  function setStoredTheme(theme) {
    localStorage.setItem(THEME_KEY, theme);
  }

  function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'default';
  }

  function applyTheme(theme) {
    const html = document.documentElement;
    const themeIcon = document.getElementById('theme-icon');
    
    // GUARD: Optimization to avoid unnecessary DOM writes
    const currentAttr = html.getAttribute('data-theme');
    if (theme === 'default' && !currentAttr) { /* pass */ }
    else if (theme !== 'default' && currentAttr === theme) { /* pass */ }
    else {
        if (theme === 'default') {
            html.removeAttribute('data-theme');
        } else {
            html.setAttribute('data-theme', theme);
        }
    }

    // Update Icon visual state
    if (themeIcon) {
      themeIcon.className = 'fa-solid'; 
      if (theme === 'default') {
        themeIcon.classList.add('fa-sun');
      } else if (theme === 'dark') {
        themeIcon.classList.add('fa-moon');
      } else if (theme === 'neon') {
        themeIcon.classList.add('fa-bolt'); 
      }
    }
  }

  function toggleTheme() {
    let currentTheme = getStoredTheme() || 'default';
    if (currentTheme === 'system') currentTheme = getSystemTheme();

    let currentIndex = THEMES.indexOf(currentTheme);
    if (currentIndex === -1) currentIndex = 0; 

    const nextIndex = (currentIndex + 1) % THEMES.length;
    const nextTheme = THEMES[nextIndex];

    setStoredTheme(nextTheme);
    applyTheme(nextTheme);
  }

  // --- Initialization Logic ---

  // 1. Apply theme immediately to prevent flash
  const savedTheme = getStoredTheme();
  if (savedTheme) {
    applyTheme(savedTheme);
  }

  // 2. Setup MutationObserver to enforce theme (fights main.js overwrites)
  const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
          if (mutation.attributeName === 'data-theme') {
              const desired = getStoredTheme();
              if (desired === 'neon') {
                  const current = document.documentElement.getAttribute('data-theme');
                  if (current !== 'neon') {
                      applyTheme('neon');
                  }
              }
          }
      });
  });
  observer.observe(document.documentElement, { attributes: true });

  // 3. Event Capture Interception
  // Instead of fighting for the element, we intercept the click at the body level
  // using the CAPTURE phase. This runs BEFORE any bubbling listeners (like jQuery's).
  document.addEventListener('click', function(e) {
      // Traverse up to find if we clicked the toggle button or its icon
      let target = e.target;
      while (target && target !== document) {
          if (target.id === 'theme-toggle') {
              // Found it!
              e.preventDefault();
              e.stopPropagation();
              e.stopImmediatePropagation(); // Kill other listeners
              toggleTheme();
              return;
          }
          target = target.parentNode;
      }
  }, true); // <--- 'true' enables Capture Phase

})();