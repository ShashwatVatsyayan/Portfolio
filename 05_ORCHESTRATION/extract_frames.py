"""
Hero Video to Frame Sequence Extractor
Extracts optimized web-ready sequential frames from the hero video.
Preserves full visual quality, detail, and aspect ratio.
"""

import os
import cv2
import sys

def extract_hero_frames(
    video_path="frames/main/Hero Video.mp4",
    output_dir="frames/main",
    quality=88
):
    if not os.path.exists(video_path):
        print(f"Error: Video file not found at {video_path}")
        return False

    os.makedirs(output_dir, exist_ok=True)
    cap = cv2.VideoCapture(video_path)

    if not cap.isOpened():
        print(f"Error: Could not open video file {video_path}")
        return False

    total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    fps = cap.get(cv2.CAP_PROP_FPS)
    width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
    height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))

    print(f"Loaded video: {video_path}")
    print(f"Dimensions: {width}x{height}, FPS: {fps:.2f}, Total frames: {total_frames}")

    frame_idx = 0
    saved_count = 0
    encode_params = [
        cv2.IMWRITE_JPEG_QUALITY, quality,
        cv2.IMWRITE_JPEG_OPTIMIZE, 1
    ]

    while True:
        ret, frame = cap.read()
        if not ret:
            break

        frame_idx += 1
        frame_filename = f"{frame_idx:04d}.jpg"
        out_path = os.path.join(output_dir, frame_filename)
        cv2.imwrite(out_path, frame, encode_params)
        saved_count += 1

        if frame_idx % 30 == 0 or frame_idx == total_frames:
            print(f"Extracted {frame_idx}/{total_frames} frames -> {frame_filename}")

    cap.release()
    print(f"\nSuccessfully extracted {saved_count} frames to {output_dir}")
    return True

if __name__ == "__main__":
    v_path = sys.argv[1] if len(sys.argv) > 1 else "frames/main/Hero Video.mp4"
    o_dir = sys.argv[2] if len(sys.argv) > 2 else "frames/main"
    extract_hero_frames(v_path, o_dir)
