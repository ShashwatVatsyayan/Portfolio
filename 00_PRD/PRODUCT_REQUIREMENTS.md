# Product Requirements Document (PRD)

## 1. Overview
The goal is to deliver an elite, dark cinematic personal portfolio for **Shashwat Vatsyayan** (Developer, Creative Technologist, and Filmmaker). The website adapts the high-performance Canvas frame-sequence animation engine originally created for the Itachi cinematic project, replacing all Itachi assets with Shashwat's custom 10-second hero video transformed into sequential high-resolution frames.

## 2. Target Audience
- Recruiters, engineering hiring managers, and technical leads looking for high-caliber full-stack/software developers.
- Creative directors, production teams, and media organizations seeking creative technologists and filmmakers.
- Collaborators and clients looking for intersectional work combining technical engineering with visual storytelling.

## 3. Core Functional Requirements
1. **Cinematic Hero Engine**:
   - Render a 240-frame sequence extracted from `frames/main/Hero Video.mp4`.
   - Scroll-scrubbed canvas rendering driven by viewport scroll with butter-smooth `lerp` interpolation.
   - Synchronized atmospheric lighting, phase typography shifts, and particle embers.
   - Zero reliance on HTML5 video autoplay limitations or mobile autoplay restrictions.
2. **Hero Face & Detail Preservation**:
   - Responsive canvas cover algorithm ensuring Shashwat's face, gaze, and Sharingan/Mangekyō transformation remain centered across all display aspect ratios.
3. **Structured Portfolio Sections**:
   - **Hero**: Atmospheric visual statement and titleblock lockup.
   - **About**: Personal narrative, educational timeline (Chandigarh University, Anglo Sanskrit School).
   - **Skills**: Categorized engineering and creative toolsets.
   - **Selected Work**: Exactly 5 featured projects (`FBOOST AGRO`, `BugOff`, `SANSEC AI`, `Career Ledger`, `Aegis AI`).
   - **Experience & Leadership**: Office of Academic Affairs (Central Team / Social Media Executive), ViproTech Digital (Industrial Training: Cyber Security).
   - **Creative Work**: Cinematic disciplines grid (Filmmaking, Cinematography, Content Creation, etc.).
   - **Contact**: Direct communication channels (Email, GitHub, LinkedIn, Instagram).
4. **Strict No-Invention Principle**:
   - No fabricated metrics, awards, clients, github stars, or live URLs.
   - Centralized project configuration with editable `#` placeholders for future repository/live deployment links.

## 4. Non-Functional Requirements
- **Performance**: 60 FPS Canvas rendering, progressive frame loading with progress indicator.
- **Responsiveness**: Flawless layout and canvas aspect-ratio preservation from 320px mobile screens to 4K ultra-wide monitors.
- **Maintainability**: Clean modular separation across data models, components, and stylesheets.
