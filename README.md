# Shashwat Vatsyayan — Cinematic Personal Portfolio

An elite, dark cinematic personal portfolio built for **Shashwat Vatsyayan** (Developer, Creative Technologist, and Filmmaker). The website adapts an HTML5 Canvas 2D sequential frame-scrubbing engine to drive a 10-second hero video transformed into 240 high-resolution frames, coupled with procedural particle and lighting systems.

---

## 🏛️ Project Architecture

```
Animated Portfolio/
├── 00_PRD/                   # Product Requirements & Specifications
│   ├── README.md
│   ├── PRODUCT_REQUIREMENTS.md
│   ├── WEBSITE_STRUCTURE.md
│   └── DESIGN_SYSTEM.md
├── 01_MEMORY/                # Durable Context & Knowledge Base
│   ├── README.md
│   ├── PROJECT_CONTEXT.md
│   ├── USER_CONTEXT.md
│   ├── TECHNICAL_CONTEXT.md
│   └── ASSET_CONTEXT.md
├── 02_PROGRESS/              # Tracking & Changelog
│   ├── README.md
│   ├── CURRENT_STATUS.md
│   ├── TODO.md
│   └── CHANGELOG.md
├── 03_DECISIONS/             # Architecture Decision Records (ADRs)
│   ├── README.md
│   ├── ADR-001-HERO-FRAME-ANIMATION.md
│   ├── ADR-002-VIDEO-TO-FRAME-PIPELINE.md
│   ├── ADR-003-PROJECT-DATA.md
│   └── ADR-004-PERFORMANCE.md
├── 04_PROMPTS/               # Master System Directives
│   ├── README.md
│   ├── MASTER_PROJECT_PROMPT.md
│   ├── HERO_VIDEO_PROMPT.md
│   └── MAINTENANCE_PROMPT.md
├── 05_ORCHESTRATION/         # Extraction & Automation Scripts
│   ├── README.md
│   └── extract_frames.py
├── 06_SRC/                   # Source Data Modules & Assets
│   └── data/
│       ├── projects.js       # Centralized Project Metadata (5 Projects)
│       ├── skills.js         # Technical Competencies
│       ├── experience.js     # Leadership, Clubs, & Education
│       └── social.js         # Contact & Social Links
├── frames/
│   └── main/                 # 240 Sequential JPEGs (0001.jpg — 0240.jpg)
│       └── Hero Video.mp4    # 10s Cinematic Source Video (24 FPS, 720x1280)
├── index.html                # Main Semantic HTML5 Markup
├── style.css                 # Cinematic Design Tokens & Layouts
├── main.js                   # Canvas Engine, Scroll Scrubbing, & Audio FX
├── package.json              # Local Development Configuration
├── .gitignore
├── .gitattributes
└── .editorconfig
```

---

## ⚡ The Hero Engine

Instead of playing an ordinary video element (which stutters during reverse scroll and is throttled on mobile devices), the hero runs on an **HTML5 2D Canvas Scrubbing Pipeline**:

1. **Extraction**: `frames/main/Hero Video.mp4` is decomposed into 240 sequential JPEG frames (`0001.jpg` to `0240.jpg`).
2. **Preloading**: All 240 frames are preloaded into memory asynchronously with an animated percentage loader.
3. **Scroll Interpolation**: Viewport scroll position maps linearly to frame target `[0, 239]`. An `animationFrame` loop continuously applies `lerp(frameShown, frameTarget, 0.14)`, delivering butter-smooth motion forward and backward.
4. **Adaptive Cover Rendering**: `drawCover()` dynamically computes canvas aspect ratio and anchors vertically around the focal eye line (`focalY = 0.42`), ensuring Shashwat's face and eyes remain visible without awkward cropping on both desktop and mobile screens.
5. **Atmospheric Layers**: Procedural Amaterasu black-fire hem at the bottom of the viewport, procedural lightning flash, and Web Audio API synthesized thunder.

---

## 🎬 Hero Visual Sequence

The 10-second hero video contains the full transformation arc:
1. **FULL NORMAL**: Opening wide portrait in dramatic low-key lighting.
2. **RAPID PUSH-IN**: Dynamic camera dolly zoom towards facial features.
3. **CLOSE-UP NORMAL**: Locked eye-level framing with calm focus.
4. **SHARINGAN ACTIVATION**: Glowing red tomoe ignite within the eyes.
5. **SHARINGAN ROTATION**: Tomoe spin with increasing velocity.
6. **MANGEKYŌ TRANSFORMATION**: Complex geometric ocular iris metamorphosis.
7. **MANGEKYŌ HOLD**: Glowing red ocular power held steadily.
8. **SLOW PULLBACK**: Controlled camera dollies back out.
9. **FULL FINAL**: Fully transformed cinematic hero portrait.

---

## 💼 Selected Projects (Exclusively These 5)

All projects are organized in `06_SRC/data/projects.js` with editable `#` placeholders for future repository and deployment URLs:

1. **01 — FBOOST AGRO**: Full-stack agritech e-commerce web platform for modern agricultural solutions and eco-friendly products.
2. **02 — BugOff**: Targeted debugging and tracking application designed to streamline software issue management and diagnostic workflows.
3. **03 — SANSEC AI**: Secure AI-powered malware analysis and vulnerability detection platform.
4. **04 — Career Ledger**: iOS-focused digital student portfolio and academic achievement tracker.
5. **05 — Aegis AI**: AI-powered deepfake and media manipulation detection platform leveraging biometric analysis.

---

## 🛠️ Local Development & Running

### Prerequisites
- Node.js (v18+) or any static HTTP server.
- Python 3.10+ with `opencv-python` (only required if re-extracting frames from video).

### Running Locally
You can run the site using Node's `npx serve`, Python's `http.server`, or VS Code Live Server:

```bash
# Using npm script:
npm run dev

# Or directly with Python:
python -m http.server 3000
```
Open `http://localhost:3000` in your browser.

### Re-Extracting Frames
If you update or replace `frames/main/Hero Video.mp4`:
```bash
python 05_ORCHESTRATION/extract_frames.py
```

---

## 🔗 Updating Project Links & Data

To add your GitHub repository or live demo links:
1. Open `06_SRC/data/projects.js`.
2. Locate the project and update `github` and `url`:
   ```javascript
   {
     id: "01",
     title: "FBOOST AGRO",
     ...
     github: "https://github.com/shashwatvatsyayan/fboost-agro",
     url: "https://fboost-agro.vercel.app"
   }
   ```
3. Update the matching anchor tag `href` attributes in `index.html` under the `#work` section.

---

## 🤖 AI-Assisted Development Workflow

Future AI agents and collaborators should adhere to:
1. **Durable Memory**: Review files in `01_MEMORY/` before making alterations.
2. **No Invention**: Never fabricate metrics, awards, stars, or unverified claims.
3. **Canvas Integrity**: Maintain the frame-based canvas engine; do not replace it with standard HTML video tags.

---

## 📜 License & Credits

© 2026 Shashwat Vatsyayan. All Rights Reserved.
Built with HTML5 Canvas, WebGL, Web Audio API, and modern CSS.
