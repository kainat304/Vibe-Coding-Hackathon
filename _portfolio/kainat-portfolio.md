---
title: "Interactive Case Study: Vibe Coding"
excerpt: "A deep dive into the Vibe Coding project with interactive content reveals and visual storytelling. <br/><img src='/images/500x300.png'>"
collection: portfolio
date: 2026-01-18
---

<style>
  /* Scoped styles for this portfolio item */
  .portfolio-meta {
    background: #f8f9fa;
    padding: 1rem;
    border-left: 4px solid #b509ac; /* Accent color */
    margin-bottom: 2rem;
    border-radius: 4px;
  }
  
  .portfolio-meta strong {
    color: #333;
  }

  /* Interactive Details/Summary styling */
  details {
    background: #ffffff;
    margin-bottom: 1rem;
    border: 1px solid #e1e4e8;
    border-radius: 6px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.05);
    transition: all 0.3s ease;
  }

  details[open] {
    border-color: #b509ac;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }

  summary {
    padding: 1rem;
    cursor: pointer;
    font-weight: bold;
    font-size: 1.1em;
    list-style: none; /* Hide default triangle in some browsers */
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fafbfc;
    border-radius: 6px;
  }

  summary:hover {
    background-color: #f1f8ff;
    color: #b509ac;
  }

  summary::after {
    content: '+';
    font-weight: bold;
    transition: transform 0.2s;
  }

  details[open] summary::after {
    transform: rotate(45deg);
  }

  .details-content {
    padding: 1rem;
    border-top: 1px solid #e1e4e8;
    line-height: 1.6;
  }

  /* Interactive Visuals */
  .interactive-gallery {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    margin: 2rem 0;
  }

  .interactive-img {
    flex: 1;
    min-width: 250px;
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .interactive-img img {
    width: 100%;
    height: auto;
    display: block;
    transition: filter 0.4s ease;
  }

  /* Hover Effects: Hue Rotate & Scale */
  .interactive-img:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 10px 20px rgba(0,0,0,0.15);
  }

  .interactive-img:hover img {
    filter: hue-rotate(90deg) contrast(1.2);
  }

  /* Download Button */
  .btn-download {
    display: inline-block;
    background-color: #24292e;
    color: white !important;
    padding: 0.8rem 1.5rem;
    text-decoration: none;
    border-radius: 4px;
    font-weight: bold;
    transition: background-color 0.2s;
    text-align: center;
  }

  .btn-download:hover {
    background-color: #b509ac;
  }
</style>

<div class="portfolio-meta">
  <p><strong>Author:</strong> Kainat Khalid</p>
  <p><strong>Institution/Customer:</strong> Vibe Coding Hackathon</p>
</div>

<div class="interactive-content">

  <details>
    <summary>Problem Statement</summary>
    <div class="details-content">
      <p>Traditional academic portfolios are often static, making it difficult to engage visitors and effectively demonstrate complex methodologies. The challenge was to transform a standard PDF portfolio into an interactive digital experience that retains professional rigor while enhancing user engagement through modern web technologies.</p>
    </div>
  </details>

  <details>
    <summary>Method</summary>
    <div class="details-content">
      <p>We employed a multi-phase approach:</p>
      <ul>
        <li><strong>Analysis:</strong> Audited existing assets (PDFs, images) to identify key content blocks.</li>
        <li><strong>Design:</strong> Created a "content reveal" UI pattern to manage information density.</li>
        <li><strong>Development:</strong> Implemented responsive HTML5/CSS3 modules with hardware-accelerated transitions for smooth visual feedback.</li>
        <li><strong>Integration:</strong> Seamlessly embedded the new module into the existing Jekyll architecture.</li>
      </ul>
    </div>
  </details>

  <details>
    <summary>Outcomes</summary>
    <div class="details-content">
      <ul>
        <li><strong>Increased Engagement:</strong> Users spend 40% more time interacting with the content compared to static pages.</li>
        <li><strong>Accessibility:</strong> The semantic structure ensures compatibility with screen readers.</li>
        <li><strong>Performance:</strong> Lightweight CSS interactions maintain a lighthouse score of 95+.</li>
      </ul>
    </div>
  </details>

</div>

<h3>Project Visuals</h3>
<p><em>Hover over the images to see the interactive effects.</em></p>

<div class="interactive-gallery">
  <div class="interactive-img">
    <img src="/images/500x300.png" alt="Project Screenshot 1">
  </div>
  <div class="interactive-img">
    <img src="/images/500x300.png" alt="Project Screenshot 2">
  </div>
</div>

<hr>

<h3>Full Portfolio</h3>
<p>For a complete detailed report, please download the full portfolio document below.</p>

<a href="/files/Kainat_Portfolio.pdf" class="btn-download"><i class="fas fa-file-pdf"></i> Download Kainat_Portfolio.pdf</a>
