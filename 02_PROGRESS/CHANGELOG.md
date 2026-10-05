# Changelog

## [1.4.0] - 2026-10-05
### Added
- **Interactive Lanyard Intro Gateway** ([`Lanyard.js`](file:///C:/HITMAN/TECHNICAL/Portfolio/Animated%20Portfolio/06_SRC/components/Lanyard/Lanyard.js) & [`Lanyard.css`](file:///C:/HITMAN/TECHNICAL/Portfolio/Animated%20Portfolio/06_SRC/components/Lanyard/Lanyard.css)):
  - Full-screen initial gateway screen placed before the main portfolio.
  - Physical 3D identity badge hanging from a flexible woven lanyard band with Verlet spring integration and pendulum physics.
  - Custom textures and 3D glTF model generated via [`create_lanyard_assets.py`](file:///C:/HITMAN/TECHNICAL/Portfolio/Animated%20Portfolio/05_ORCHESTRATION/create_lanyard_assets.py):
    - `card.glb`: 3D badge plate with clip geometry and UV mapping.
    - `lanyard.png`: Woven fabric texture with crimson edge stitching.
    - `card-front.png`: `SHASHWAT VATSYAYAN` Developer, Creative Technologist, Filmmaker, Portfolio Access 2026.
    - `card-back.png`: `SHASHWAT VATSYAYAN` CSE, Developer, Creative Technologist, "DRAG TO EXPLORE · CLICK TO ENTER".
  - Interactive dragging with realistic momentum, angular wobble, and damped spring return.
  - Smooth 1000ms cinematic transition to the portfolio upon click or intentional drag & release.
  - Navigation bar initially hidden, revealed only upon entering.
  - Automatic unmounting of Lanyard WebGL/canvas loop after entry to free 100% of GPU resources for the hero.
  - Static fallback badge for non-WebGL/noscript environments.
- **Global ClickSpark Interaction** ([`ClickSpark.js`](file:///C:/HITMAN/TECHNICAL/Portfolio/Animated%20Portfolio/06_SRC/components/ClickSpark/ClickSpark.js) & [`ClickSpark.css`](file:///C:/HITMAN/TECHNICAL/Portfolio/Animated%20Portfolio/06_SRC/components/ClickSpark/ClickSpark.css)):
  - Emits subtle white sparks (`sparkCount: 8`, `sparkSize: 10`, `sparkRadius: 15`, `duration: 400ms`) on pointer clicks.
  - Zero-interference implementation (`pointer-events: none`) ensuring no conflicts with text selection, drag interactions, Lanyard physics, carousel dragging, scrolling, or form inputs.
  - Active primarily after the portfolio is entered.
- **Vite Configuration** ([`vite.config.js`](file:///C:/HITMAN/TECHNICAL/Portfolio/Animated%20Portfolio/vite.config.js)):
  - Configured with `assetsInclude: ['**/*.glb', '**/*.mp4']`.

### Changed
- **`ScrollReveal` Tuning & Alignment**:
  - Configured with exact reference options: `baseOpacity = 0`, `enableBlur = true`, `baseRotation = 5`, `blurStrength = 10`.
  - Updated to the 4 requested portfolio editorial statements:
    - **About**: `"I build technology while working across creative media and visual storytelling."`
    - **Selected Work**: `"Software, AI and creative technology built around ideas worth exploring."`
    - **Creative**: `"Technology and visual storytelling are not separate disciplines."`
    - **Collaboration**: `"Have an idea worth building?"`
