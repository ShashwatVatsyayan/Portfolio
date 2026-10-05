# ADR-002: Video-to-Frame Extraction Pipeline

## Status
Accepted

## Context
The source hero video is an exact 10.0-second 24 FPS clip (720x1280 resolution, 240 frames total) created by Shashwat Vatsyayan. The prompt requested approximately 30 FPS / 10 seconds / 300 frames.

## Decision
Extract all 240 native frames directly at 1:1 fidelity using OpenCV (`cv2.imwrite` with JPEG quality 88 and Huffman optimization).
Do not artificially interpolate or duplicate 60 frames to reach 300 frames, because duplicated frames create micro-judder during smooth canvas scrubbing. 240 distinct frames deliver uninterrupted cinematic motion.

## File Organization
Frames are stored in `frames/main/0001.jpg` through `frames/main/0240.jpg`.
