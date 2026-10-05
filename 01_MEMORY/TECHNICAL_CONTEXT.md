# Technical Context & System Architecture

## Architecture Overview
The portfolio is implemented using high-performance standard web standards (HTML5 Canvas 2D, WebGL 1.0, Web Audio API, ES6+ JavaScript, CSS3 variables and transforms).

### 1. Canvas Frame Scrubbing Engine
- **Canvas Element**: `#mainCanvas` inside a sticky viewport container `.scrub__sticky`.
- **Preloading Queue**: Sequentially loads 240 frames (`frames/main/0001.jpg` to `frames/main/0240.jpg`) via `new Image()` with `img.decoding = 'async'`.
- **Device Pixel Ratio**: Clamped to `Math.min(window.devicePixelRatio || 1, 2)` to avoid GPU memory explosion while preserving crispness on Retina displays.
- **Aspect Ratio & Cover Logic**: Custom `drawCover(ctx, img, cw, ch, maxUp)` function scales the portrait 9:16 frame to fill the screen while guaranteeing the subject's face, gaze, and eye transformation are never improperly cropped on narrow mobile screens or wide desktop screens.
- **Scroll Mapping**: Computes `scrubProgress = clamp(-rect.top / (dist || 1))` across the 600vh track, mapping to `frameTarget = scrubProgress * (MAIN_COUNT - 1)`.
- **Smoothing**: Current frame `frameShown` is interpolated toward `frameTarget` using `lerp(frameShown, frameTarget, 0.14)` on every `requestAnimationFrame` tick.

### 2. Ambient Systems
- **Amaterasu Rim Canvas**: Procedural fire simulation using additive radial gradient halos and black core blobs at the bottom hem of the screen.
- **Synthesized Audio Storm**: Web Audio API audio synthesis generating lowpass-filtered white noise and sub-bass oscillators simulating real thunder without external audio assets.
- **Lightning SVG**: Procedural random walk bolt generation with synchronized viewport screen flashes.
