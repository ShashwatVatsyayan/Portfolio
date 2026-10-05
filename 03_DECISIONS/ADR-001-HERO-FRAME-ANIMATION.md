# ADR-001: Hero Frame-Based Canvas Animation Architecture

## Status
Accepted

## Context
Standard HTML5 `<video>` elements tied to scroll scrubbing (`currentTime = scrollFraction * duration`) suffer from severe stuttering, frame skipping, audio desynchronization, and unpredictable battery-saver throttling on mobile operating systems (iOS Safari and Android Chrome).

## Decision
Retain and enhance the original project's HTML5 Canvas 2D frame-scrubbing architecture:
1. Decompose the hero video into sequential raster frames.
2. Load images into an in-memory array buffer with `img.decoding = 'async'`.
3. Render frames onto a high-performance 2D Canvas via `requestAnimationFrame` loop.
4. Smooth scroll position updates using linear interpolation (`lerp`).

## Consequences
- **Pros**: Frame-perfect scrubbing forward and backward, instantaneous response to scroll velocity, zero video player UI chrome, universal cross-platform compatibility.
- **Cons**: Initial asset payload (~14 MB) requires progressive preloading and a loader bar.
