# AGENT RULES & CONSTRAINTS (CSS-SAFE)

Rules are designed to prevent the agent from operating outside the framework of an **Academic Pages Jekyll** site.

---

## 1. Package Management Strictness

- **FORBIDDEN**
  - Do **NOT** install global packages.
  - Never run:
    - `gem install`
    - `pip install`
    - `brew install`
    - `apt-get`
    - `npm install -g`

- **ALLOWED**
  - You may only use:
    - `bundle add <gem>`
    - Direct edits to the `Gemfile`
  - Only if a **new plugin is explicitly requested**.

- **EXECUTION**
  - Always run Jekyll commands via `bundle exec`
    - Example:
      - `bundle exec jekyll serve`
      - `bundle exec jekyll build`

---

## 2. Environment Protection

- Do **not** upgrade `jekyll` or `bundler` versions unless explicitly asked.
- Do **not** delete the `_site/` folder manually; let the build process handle it.
- If a build fails:
  - Analyze the error log first.
  - Do **not** blindly update gems to fix errors.

---

## 3. Style & SASS Constraints (CRITICAL)

### 3.1 No Refactors / No Import Order Changes

- **NO REORDERING / NO MOVES**
  - Do not move, rename, or reorder files or imports in:
    - `_sass/`
    - `assets/css/main.scss` (or equivalent)

- **ONE EXCEPTION**
  - You may add **one** new import for a theme token file  
    (e.g. `_sass/_themes.scss`) near the top of the main entrypoint.
  - Do **not** reorder any existing imports.

---

### 3.2 Scoped Changes Only (No Mass Edits)

- **NO MASS REFACTOR**
  - Do not perform broad changes such as:
    - “Replace all colors”
    - “Convert the entire codebase to CSS variables”
- Keep changes minimal and localized.
- If a change would affect:
  - More than ~3–5 SCSS files **or**
  - Many selectors  
  → Stop and propose a smaller plan.

---

### 3.3 CSS Variables Policy (Additive + Fallback-First)

- **ADD, DON’T REPLACE**
  - CSS custom properties may be introduced **only** as an additive layer.
  - Place them in a dedicated file (e.g. `_sass/_themes.scss`).
  - Do **not** remove existing SASS variables or mixins.

- **MANDATORY FALLBACKS**
  - Every `var(--token)` usage must include a fallback equal to the current literal value:
    - ✅ `color: var(--text, #111);`
    - ❌ `color: var(--text);`

- **NO SYNTAX CONVERSION**
  - Do **not** globally convert:
    - `$primary-color` → `--primary-color`
  - Unless explicitly instructed.

---

### 3.4 Theme Definitions Must Only Override Tokens

Theme definitions may **only** set variables under:

```css
:root { ... }                         /* default / light */
:root[data-theme="dark"] { ... }
:root[data-theme="tech-blue"] { ... }
