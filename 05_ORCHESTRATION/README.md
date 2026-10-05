# 05_ORCHESTRATION — Extraction & Automation Pipelines

This directory contains automated tooling for asset generation and processing.

## Scripts
- `extract_frames.py`: High-performance Python script utilizing OpenCV (`cv2`) to extract individual uncompressed JPEG frames from `frames/main/Hero Video.mp4` into `frames/main/0001.jpg` ... `0240.jpg`.

### Usage
```bash
python 05_ORCHESTRATION/extract_frames.py [optional_video_path] [optional_output_dir]
```
Default parameters extract `frames/main/Hero Video.mp4` at JPEG quality 88 with Huffman optimization.
