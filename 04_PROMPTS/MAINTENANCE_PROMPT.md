# Maintenance & Extension Prompt

## Updating Project Links
To connect real repositories and live URLs:
1. Open `06_SRC/data/projects.js`.
2. Locate the specific project object (`FBOOST AGRO`, `BugOff`, `SANSEC AI`, `Career Ledger`, or `Aegis AI`).
3. Replace `url: "#"` and `github: "#"` with actual deployment URLs.

## Adding Skills
1. Open `06_SRC/data/skills.js`.
2. Append entries to the appropriate category (`languages`, `frontend`, `backend`, `database`, `other`).

## Re-extracting Video Frames
If a new hero video is provided:
1. Place the new video at `frames/main/Hero Video.mp4`.
2. Execute:
   ```bash
   python 05_ORCHESTRATION/extract_frames.py
   ```
3. Update `MAIN_COUNT` in `main.js` if the total frame count changes.
