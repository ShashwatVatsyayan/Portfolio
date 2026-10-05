# ADR-004: Performance & Memory Optimization Strategy

## Status
Accepted

## Context
Rendering high-resolution images continuously on Canvas can cause memory bloat and frame drops if unconstrained.

## Decision
1. **Device Pixel Ratio Clamping**: Cap backing store resolution at `dpr = Math.min(window.devicePixelRatio || 1, 2)`.
2. **Dirty Frame Skipping**: Track `lastDrawn` frame index; do not re-clear and re-render canvas when the user is idle or the lerped frame index has not changed.
3. **Decoded Image Cache**: Preload frames using `img.decoding = 'async'` so decode work occurs off the main thread.
4. **Adaptive Cover Rendering**: `drawCover` computes optimal scale factor while capping maximum zoom to ensure composition integrity across both landscape ultra-wides and portrait mobile displays.
