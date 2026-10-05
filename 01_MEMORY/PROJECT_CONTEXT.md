# Project Context

## Origin
The project originated as an advanced cloned web experience themed around Uchiha Itachi, utilizing an HTML5 Canvas frame-scrubbing architecture, WebGL shaders, and audio synthesis.

## Evolution
1. **Source Transformation**:
   - The user produced and added their own 10-second cinematic hero video (`frames/main/Hero Video.mp4`).
   - The original Itachi hero images in `frames/main/` were deleted.
   - All references to Itachi visual assets were excised from the hero and page content.
2. **Architecture Adaptation**:
   - Rather than replacing the Canvas system with an HTML `<video>` element (which breaks scroll scrubbing, creates stutter, and fails under mobile autoplay limits), the video was decomposed into 240 high-resolution sequential frames.
   - The Canvas engine was adapted to load, cache, and interpolate this 240-frame sequence smoothly based on viewport scroll position.
3. **Identity Evolution**:
   - Rebuilt as the personal portfolio of **Shashwat Vatsyayan**, showcasing his dual focus in software engineering/AI and creative technology/filmmaking.
