# Vibe Coding – Personal Digital Presence (UXD Hackathon PRD)

**Project Name:** Vibe Coding - Personal Digital Presence  
**Date:** 2025-15-12  
**Author(s):** Kainat Khalid  
**Version:** v1.0  

**Short Pitch:** Transform a generic academic website template into a fully customized, accessible, and interactive personal UX portfolio that communicates my professional identity, work, and thinking through multiple modalities.

**Relevant Links:** [GitHub Repo](https://github.com/kainat304/Vibe-Coding-Hackathon.git)

---

## 1) Core Context

### Problem

UX designers need a personal digital presence that goes beyond static CVs and PDFs. Existing academic templates are functional but fail to express individual UX identity, accessibility values, and interactive storytelling.

### Solution

Customize the Academic Pages template into a branded, accessible, and interactive personal website featuring a custom theme, a personalized hero landing page, a tri-modal accessible CV, and interactive paper / portfolio project pages.

### Target Users

- Recruiters and hiring managers
- UX professionals and peers
- Professors and academic reviewers
- Accessibility advocates

### Primary Use Cases

- Quickly understand who I am and my UX focus
- Explore my work through interactive case studies or papers
- Consume my CV in text, visual, or audio format
- Download supporting documents (CV, papers, reports)

### North-Star Metric

Visitors can understand my profile, values, and work within 60 seconds and successfully access at least one interactive or downloadable artifact.

### Non-Goals

- Building a full CMS
- Monetization or blogging platform
- Backend-heavy personalization

---

## 2) UX Foundations

### Personas

- **Recruiter Rita:** Skims quickly, values clarity and accessibility
- **Peer Alex:** Explores interaction patterns and UX decisions
- **Professor Ignacio:** Evaluates completeness, accessibility, and milestone fulfillment

### Key Insights / Pain Points

- Recruiters spend very little time per profile
- Accessibility is often claimed but rarely demonstrated
- Static portfolios fail to convey process and thinking

### Experience Principles (Vibe)

- Personal but professional
- Calm, confident, and intentional
- Accessibility-first
- Interactive, not decorative

### Accessibility & Inclusion Requirements

- WCAG 2.1 AA compliance
- Keyboard navigation for all interactions
- Screen-reader friendly structure
- Color contrast compliant theme
- Alternative text, captions, and transcripts

### High-Level Journey

Landing → Hero Overview → Quick Navigation → CV / Paper / Project → Interaction → Download / Contact

---

## 3) Scope & Priorities

### MVP (V1) Goals

- Fully customized visual theme
- Personalized hero landing page
- Accessible tri-modal CV
- At least one interactive paper or UX project page

### Out of Scope

- Multiple language versions
- Advanced analytics
- User accounts

### Assumptions & Risks

- Assumes GitHub Pages + Jekyll constraints
- Time-boxed hackathon delivery
- Accessibility trade-offs due to template limits

---

## 4) Tech Overview

### Frontend

- Jekyll (Academic Pages)
- HTML, CSS, Markdown
- JavaScript for interactions

### Backend

- None (static site)

### Database

- None

### APIs / Integrations

- GitHub Pages
- Optional: Embedded media (audio/video)

### Deployment

- GitHub Pages

### Security / Privacy

- No personal sensitive data
- Public-facing content only

---

## 5) Feature Modules

### Module 1: Custom Theme

**Priority:** P0

**User Story:** As a visitor, I want to visually sense the designer's personality and UX brand immediately.

**Acceptance Criteria:**
- Custom color palette defined
- Typography updated
- Light/Dark mode preserved
- Icons and UI elements customized
- Theme switcher functional

### Module 2: Personalized Hero Landing Page

**Priority:** P0

**User Story:** As a visitor, I want a clear and engaging introduction with fast access to key content.

**Acceptance Criteria:**
- Clear tagline and welcome message
- Profile image or AI-generated hero image
- Primary CTA links (CV, Portfolio, Contact)
- Accessible heading hierarchy

### Module 3: Accessible CV (Tri-Modal)

**Priority:** P0

**User Story:** As a visitor, I want to consume the CV in the format that best fits my needs.

**Acceptance Criteria:**
- Text-based, screen-reader friendly CV
- Visual CV (timeline / infographic)
- Audio CV with controls and transcript
- Interactive navigation between modes
- Downloadable PDF

### Module 4: Interactive Paper / UX Portfolio Project

**Priority:** P0

**User Story:** As a visitor, I want to explore a UX paper or project through interactive storytelling.

**Acceptance Criteria (Paper):**
- Title, authors, citation
- Abstract, method, results
- Interactive visuals (hover / click / scroll)
- Downloadable PDF

**Acceptance Criteria (Project):**
- Problem statement and context
- Process and methods
- Outcomes and impact
- Visual or animated elements
- Downloadable report

---

## 6) AI Design (If Used)

### Usage

- Optional AI-generated hero image
- Optional AI-assisted content drafting

### Safety & Reliability

- Manual review of AI-generated content
- No misleading or fabricated claims

---

## 7) IA, Flows & UI

### Main Screens

- Home / Hero
- CV
- Paper / Project
- About / Contact

### Key Flows

Hero → CTA → Content → Interaction → Download

### Design Tokens

- Color variables
- Typography scale
- Spacing system

### Tone & Localization

- Professional, human, concise
- English (default)

---

## 8) Iteration & Workflow

### Sprint Rhythm

- Hackathon-based, milestone driven

### Review Process

- Continuous self-review
- Peer feedback during pitch

### Risk / Spike Items

- Accessibility validation
- Interaction performance

---

## 9) Quality

### Testing

- Manual interaction testing
- Cross-browser checks

### Accessibility Checks

- Keyboard-only navigation
- Screen reader testing
- Contrast validation

### Performance Targets

- Fast initial load (<2s)

---

## 10) Metrics & Analytics

### KPIs

- Time to first meaningful interaction
- Successful downloads

### Experimentation

- Not in scope for V1

---

## 11) Launch & Operations

### Environments

- Local → GitHub Pages

### Rollout Plan

- Incremental commits per milestone
- Git tags: PRD done, Theme done, Hero done, CV done, Paper/Project done

### Support & Maintenance

- Content updates via Markdown
- Ongoing iteration post-hackathon

---

*End of Document*

