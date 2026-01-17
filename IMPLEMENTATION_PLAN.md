# Implementation Plan: Vibe Coding v1.1

This document outlines the engineering steps to transform the Academic Pages template into a personalized digital presence for Kainat Khalid, as specified in the updated Product Requirements Document (PRD).

---

## Phase 1: Advanced Theming System (PENDING)
**Objective:** Support Light, Dark, and a third "Neon" theme option with a custom switcher.

1.  **Define Theme Tokens:**
    *   Create `_sass/theme/_vibe_neon.scss`: High-contrast dark background (`#0D0D0D`) with neon cyan (`#00F2FF`) and pink (`#FF00E5`) accents.
    *   Update `assets/css/main.scss` to include the neon theme definition.

2.  **Develop 3-Way Toggle Logic:**
    *   Create `assets/js/vibe-theme-switch.js`.
    *   **Logic:** Implement a state machine that cycles the `<html>` attribute `data-theme` through `[default, dark, neon]`.
    *   **Persistence:** Save the selected state to `localStorage`.

3.  **UI Integration:**
    *   Update `_includes/masthead.html` to ensure the theme toggle icon updates dynamically (e.g., Sun -> Moon -> Flash).

---

## Phase 2: Hero Landing Page Refinement (PENDING)
**Objective:** Clearer introduction and direct access to core modules.

1.  **Content Audit:**
    *   Review `_pages/about.md`.
    *   **Add Quick Links:** Insert accessible CTA cards linking to the **Interactive Paper** and **Interactive Project** pages.
    *   **AI Imagery:** Incorporate a placeholder for an AI-generated hero image in the header.

---

## Phase 3: Accessible Multi-Modal CV (PENDING)
**Objective:** Ensure the CV is consumable via text, visual, and audio.

1.  **Structure Update:**
    *   Verify `_pages/cv.md` for semantic HTML consistency.
    *   **Visual Layer:** Finalize the Mermaid.js timeline visualization.
    *   **Audio Layer:** Integrate the HTML5 audio player with a transcript reveal option for better accessibility.

---

## Phase 4: Interactive Content Modules (PENDING)
**Objective:** Move beyond static PDFs to interactive storytelling.

1.  **Interactive Paper Page:**
    *   Create `_publications/2026-01-17-interactive-paper.md`.
    *   **Pattern:** "Content Reveal" (Details/Summary tags) for Abstract, Method, and Discussion.
    *   **Visualization:** Dynamic flow diagram of research methodology.

2.  **Interactive Project Page:**
    *   Refactor `_portfolio/vibe-coding-case-study.md`.
    *   **Strict Structure:** Problem Statement -> Methodology -> Outcomes/Impact.
    *   **Media:** Add interactive sliders or hover-effects on design artifacts.

---

## Phase 5: Quality & Accessibility (QA) (PENDING)
**Objective:** Meet WCAG 2.1 AA standards and performance targets.

1.  **Contrast Check:** Use automated tools to verify the "Neon" theme contrast ratios.
2.  **Keyboard Audit:** Ensure the theme switcher and all disclosure widgets are fully keyboard operable.
3.  **Performance:** Optimize image assets to ensure < 2s load time.

---
*Updated: 2026-01-17*
