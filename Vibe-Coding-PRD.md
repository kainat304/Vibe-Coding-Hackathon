# Product Requirements Document (PRD)

## Header

- **Project Name:** Vibe Coding – Personal Digital Presence  
- **Date:** 2026-01-17  
- **Author(s):** Kainat Khalid  
- **Version:** v1.0  
- **Short Pitch:** A personalized, accessible, and interactive academic/UX portfolio website built on Academic Pages, showcasing personal brand, CV, papers, and projects through modern UX patterns and AI-assisted development.  
- **Relevant Links:**  
  - Academic Pages Template: https://academicpages.github.io/

---

## 1. Core Context

### Problem
Existing academic and portfolio websites are often static, visually generic, and inaccessible, making it difficult to express personal UX identity, showcase work interactively, and support diverse consumption needs (text, visual, audio).

### Solution
Customize the Academic Pages template into a personal digital presence with a unique theme, strong hero landing page, an accessible multi-format CV, and interactive paper and project pages.

### Target Users
- **Primary:** Recruiters, professors, research supervisors, hiring managers  
- **Secondary:** Peers, collaborators, conference reviewers  

### Primary Use Cases
- Quickly understand who the site owner is and what they do  
- Review the CV in a preferred format (read, view, listen)  
- Explore academic papers and UX projects interactively  
- Download formal documents (PDFs)  

### North-Star Metric
- Percentage of visitors who interact with at least one core module (CV, paper, or project)

### Non-Goals
- Building a custom CMS  
- Real-time collaboration features  
- Monetization or blogging beyond the template scope  

---

## 2. UX Foundations

### Personas
1. **Recruiter Rachel** – Time-constrained, scans for skills and impact  
2. **Professor Paul** – Interested in rigor, publications, and clarity  
3. **Peer Alex** – Looks for inspiration and collaboration  

### Key Insights / Pain Points
- Users skim before committing attention  
- Accessibility is often overlooked but critical  
- Static PDFs reduce engagement  

### Experience Principles / Vibe
- Professional but personal  
- Clear, scannable, and interactive  
- Accessible by default  

### Accessibility & Inclusion Requirements
- WCAG 2.1 AA color contrast  
- Full keyboard navigation  
- Screen-reader friendly content  
- Audio alternatives for key text  

### High-Level Journey
Landing → Hero Introduction → CV Overview → Deep Dive (Paper / Project) → Download / Contact

---

## 3. Scope & Priorities

### MVP (V1) Goals
- Custom theme (including a third theme option beyond light/dark)  
- Personalized hero landing page  
- Accessible tri-modal CV (text, visual, audio)  
- One interactive paper page  
- One interactive project page  

### Out of Scope
- Multi-language support (initially)  
- Backend user accounts  

### Assumptions & Risks
- Academic Pages supports the required customization  
- Hackathon time constraints limit visual polish  
- AI-generated content may require manual correction  

---

## 4. Tech Overview

### Frontend
- Jekyll-based Academic Pages  
- HTML, Markdown, SCSS  

### Backend
- None (static site)  

### Database
- None  

### APIs / Integrations
- GitHub Pages deployment  
- Optional audio hosting or embedded audio player  

### Deployment
- GitHub Pages  

### Security / Privacy
- No sensitive personal data beyond a public CV  

---

## 5. Feature Modules

### Module 1: Custom Theme (P0)
- **User Story:** As a visitor, I want a visually distinct theme so I can immediately sense the site owner’s personal brand.  
- **Acceptance Criteria:**
  - Supports light, dark, and custom themes  
  - Custom colors, fonts, and icons  
  - Theme switcher is visible and usable  

### Module 2: Hero Landing Page (P0)
- **User Story:** As a visitor, I want a clear introduction so I understand who this site belongs to within seconds.  
- **Acceptance Criteria:**
  - Tagline and welcome message  
  - Profile picture or AI-generated hero image  
  - Quick links to CV, papers, and projects  

### Module 3: Accessible CV (P0)
- **User Story:** As a visitor, I want to consume the CV in my preferred format.  
- **Acceptance Criteria:**
  - Text-based, web-optimized CV  
  - Visual CV (timeline or infographic)  
  - Audio CV playback  
  - Downloadable PDF  

### Module 4: Interactive Paper Page (P1)
- **User Story:** As a reader, I want to explore a paper interactively instead of reading static text.  
- **Acceptance Criteria:**
  - Paper metadata (title, authors, abstract)  
  - Interactive visuals or content reveal  
  - PDF download  

### Module 5: Interactive Project Page (P1)
- **User Story:** As a recruiter, I want to understand the problem, method, and outcomes of a project quickly.  
- **Acceptance Criteria:**
  - Clear problem, method, and outcomes  
  - Interactive visuals or media  
  - Downloadable project report  

---

## 6. AI Design

### System Prompt / Rules
- Assist in generating clean, accessible HTML/CSS  
- Follow Academic Pages structure and conventions  
- Avoid fabricating personal or academic data  

### Prompt Patterns
- “Refactor this section for accessibility”  
- “Generate SCSS variables for a custom theme”  

### Safety / Reliability Notes
- All AI-generated content must be manually reviewed  

---

## 7. IA, Flows & UI

### Main Screens
- Landing / Hero  
- CV  
- Paper Detail  
- Project Detail  

### Key Flows
Landing → CV → Paper / Project → Download  

### Design Tokens / Components
- Color tokens per theme  
- Typography scale  

### Localization / Tone
- English  
- Professional, clear, and friendly  

---

## 8. Iteration & Workflow

### Sprint Rhythm
- Single hackathon sprint  

### Review Process
- Commit-based milestone reviews  

### Spike / Risk Items
- Theme switcher implementation  

---

## 9. Quality

### Testing Requirements
- Cross-browser testing  

### Accessibility Checks
- Lighthouse accessibility audit  

### Performance Targets
- Page load under 2 seconds  

---

## 10. Metrics & Analytics

### Events & Data
- Clicks on CV, paper, and project pages  

### KPIs
- Engagement rate per module  

### Experimentation / A/B Plans
- None for V1  

---

## 11. Launch & Operations

### Environments
- Production only (GitHub Pages)  

### Rollout Plan
- Incremental milestone-based commits  

### Support & Maintenance
- Periodic content updates  
