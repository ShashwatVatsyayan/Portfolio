"""
Generate procedural 3D Lanyard assets:
- assets/lanyard/card-front.png
- assets/lanyard/card-back.png
- assets/lanyard/lanyard.png
- assets/lanyard/card.glb
- root aliases: card.glb, lanyard.png
"""

import os
import struct
import json
import numpy as np
import cv2

os.makedirs("assets/lanyard", exist_ok=True)

# ─────────────────────────────────────────────────────────────
# 1. GENERATE CARD FRONT TEXTURE (1024 x 1536)
# ─────────────────────────────────────────────────────────────
w, h = 1024, 1536
front = np.zeros((h, w, 4), dtype=np.uint8)

# Dark gradient background
for y in range(h):
    factor = 0.85 + 0.15 * (y / h)
    r = int(14 * factor)
    g = int(14 * factor)
    b = int(18 * factor)
    front[y, :] = [b, g, r, 255]

# Subtle grid / carbon texture
for y in range(0, h, 8):
    front[y, :, :3] = np.clip(front[y, :, :3].astype(int) + 3, 0, 255)
for x in range(0, w, 8):
    front[:, x, :3] = np.clip(front[:, x, :3].astype(int) + 3, 0, 255)

# Outer border
cv2.rectangle(front, (32, 32), (w - 32, h - 32), (50, 50, 60, 255), 2)
cv2.rectangle(front, (48, 48), (w - 48, h - 48), (35, 35, 45, 255), 1)

# Top badge slot (transparent cutout for clip)
cv2.rectangle(front, (w // 2 - 90, 65), (w // 2 + 90, 95), (10, 10, 14, 255), -1)
cv2.rectangle(front, (w // 2 - 90, 65), (w // 2 + 90, 95), (70, 70, 85, 255), 2)

# Crimson accent header bar
cv2.line(front, (80, 210), (w - 80, 210), (43, 43, 255, 255), 3)

# Text on front
# Category / Eyebrow
cv2.putText(front, "DIGITAL IDENTITY // 2026", (80, 185), cv2.FONT_HERSHEY_SIMPLEX, 0.9, (120, 120, 150, 255), 2, cv2.LINE_AA)
cv2.putText(front, "PORTFOLIO ACCESS", (w - 380, 185), cv2.FONT_HERSHEY_SIMPLEX, 0.8, (43, 43, 255, 255), 2, cv2.LINE_AA)

# Profile icon / monogram placeholder box
cv2.rectangle(front, (80, 280), (320, 520), (30, 30, 40, 255), -1)
cv2.rectangle(front, (80, 280), (320, 520), (60, 60, 80, 255), 2)
# Uchiwa/monogram circle
cv2.circle(front, (200, 400), 75, (43, 43, 255, 255), 3)
cv2.circle(front, (200, 375), 18, (14, 14, 18, 255), -1)
cv2.circle(front, (200, 425), 18, (43, 43, 255, 255), -1)

# Name & Titles
cv2.putText(front, "SHASHWAT", (360, 350), cv2.FONT_HERSHEY_DUPLEX, 1.8, (240, 240, 245, 255), 3, cv2.LINE_AA)
cv2.putText(front, "VATSYAYAN", (360, 420), cv2.FONT_HERSHEY_DUPLEX, 1.8, (240, 240, 245, 255), 3, cv2.LINE_AA)
cv2.putText(front, "CHANDIGARH UNIVERSITY", (360, 480), cv2.FONT_HERSHEY_SIMPLEX, 0.75, (160, 160, 180, 255), 2, cv2.LINE_AA)

# Disciplines block
cv2.line(front, (80, 590), (w - 80, 590), (45, 45, 55, 255), 1)

disciplines = [
    ("DEVELOPER", "Full-Stack, Python, C++, React, Node.js"),
    ("CREATIVE TECHNOLOGIST", "Interactive WebGL, Canvas Engines, AI Systems"),
    ("FILMMAKER", "Visual Direction, Cinematography, Narrative Production")
]

y_pos = 680
for title, desc in disciplines:
    cv2.circle(front, (95, y_pos - 10), 6, (43, 43, 255, 255), -1)
    cv2.putText(front, title, (125, y_pos), cv2.FONT_HERSHEY_SIMPLEX, 1.1, (255, 255, 255, 255), 2, cv2.LINE_AA)
    cv2.putText(front, desc, (125, y_pos + 42), cv2.FONT_HERSHEY_SIMPLEX, 0.72, (150, 150, 170, 255), 1, cv2.LINE_AA)
    y_pos += 140

# Bottom verification stripe
cv2.line(front, (80, 1280), (w - 80, 1280), (45, 45, 55, 255), 1)
# Procedural security barcode lines
barcode_x = 80
while barcode_x < w - 280:
    bw = np.random.randint(2, 8)
    if np.random.rand() > 0.3:
        cv2.rectangle(front, (barcode_x, 1320), (barcode_x + bw, 1420), (200, 200, 220, 255), -1)
    barcode_x += bw + np.random.randint(2, 6)

cv2.putText(front, "STATUS: VERIFIED // CSE", (w - 320, 1370), cv2.FONT_HERSHEY_SIMPLEX, 0.7, (43, 43, 255, 255), 2, cv2.LINE_AA)
cv2.putText(front, "PASS-KEY: 2024-2028", (w - 320, 1410), cv2.FONT_HERSHEY_SIMPLEX, 0.65, (140, 140, 160, 255), 1, cv2.LINE_AA)

cv2.imwrite("assets/lanyard/card-front.png", front)
print("Created assets/lanyard/card-front.png")


# ─────────────────────────────────────────────────────────────
# 2. GENERATE CARD BACK TEXTURE (1024 x 1536)
# ─────────────────────────────────────────────────────────────
back = np.zeros((h, w, 4), dtype=np.uint8)

# Dark obsidian background
for y in range(h):
    factor = 0.95 - 0.2 * (y / h)
    r = int(12 * factor)
    g = int(12 * factor)
    b = int(15 * factor)
    back[y, :] = [b, g, r, 255]

# Outer border
cv2.rectangle(back, (32, 32), (w - 32, h - 32), (50, 50, 60, 255), 2)
# Top slot
cv2.rectangle(back, (w // 2 - 90, 65), (w // 2 + 90, 95), (10, 10, 14, 255), -1)
cv2.rectangle(back, (w // 2 - 90, 65), (w // 2 + 90, 95), (70, 70, 85, 255), 2)

# Central graphic
cv2.circle(back, (w // 2, h // 2 - 120), 180, (25, 25, 35, 255), -1)
cv2.circle(back, (w // 2, h // 2 - 120), 180, (43, 43, 255, 255), 2)
cv2.circle(back, (w // 2, h // 2 - 120), 120, (35, 35, 45, 255), 1)

# Large Monogram
cv2.putText(back, "SV", (w // 2 - 75, h // 2 - 75), cv2.FONT_HERSHEY_DUPLEX, 3.5, (240, 240, 245, 255), 5, cv2.LINE_AA)

# Identity text
cv2.putText(back, "SHASHWAT VATSYAYAN", (w // 2 - 280, h // 2 + 180), cv2.FONT_HERSHEY_DUPLEX, 1.4, (240, 240, 245, 255), 2, cv2.LINE_AA)
cv2.putText(back, "CSE . DEVELOPER . CREATIVE TECHNOLOGIST", (w // 2 - 310, h // 2 + 240), cv2.FONT_HERSHEY_SIMPLEX, 0.78, (160, 160, 180, 255), 2, cv2.LINE_AA)

# Interactive callout box
box_top = h // 2 + 350
cv2.rectangle(back, (120, box_top), (w - 120, box_top + 160), (18, 18, 25, 255), -1)
cv2.rectangle(back, (120, box_top), (w - 120, box_top + 160), (43, 43, 255, 255), 2)

cv2.putText(back, "DRAG TO EXPLORE", (w // 2 - 165, box_top + 65), cv2.FONT_HERSHEY_DUPLEX, 1.0, (255, 255, 255, 255), 2, cv2.LINE_AA)
cv2.putText(back, "CLICK TO ENTER PORTFOLIO", (w // 2 - 195, box_top + 115), cv2.FONT_HERSHEY_SIMPLEX, 0.8, (43, 43, 255, 255), 2, cv2.LINE_AA)

cv2.imwrite("assets/lanyard/card-back.png", back)
print("Created assets/lanyard/card-back.png")


# ─────────────────────────────────────────────────────────────
# 3. GENERATE LANYARD STRAP TEXTURE (128 x 512)
# ─────────────────────────────────────────────────────────────
lw, lh = 128, 512
lanyard = np.zeros((lh, lw, 4), dtype=np.uint8)

# Dark fabric base
for y in range(lh):
    lanyard[y, :] = [18, 18, 24, 255]

# Woven twill texture pattern
for y in range(lh):
    for x in range(lw):
        if (x + y // 2) % 4 == 0:
            lanyard[y, x, :3] = np.clip(lanyard[y, x, :3].astype(int) + 12, 0, 255)

# Dual crimson racing stripes along borders
lanyard[:, 8:14] = [43, 43, 255, 255]
lanyard[:, lw - 14:lw - 8] = [43, 43, 255, 255]

# Center subtle text along the strap
strap_text = cv2.rotate(lanyard, cv2.ROTATE_90_COUNTERCLOCKWISE)
cv2.putText(strap_text, "SHASHWAT VATSYAYAN // 2026 // CREATIVE TECH", (20, 70), cv2.FONT_HERSHEY_SIMPLEX, 0.55, (160, 160, 180, 255), 1, cv2.LINE_AA)
lanyard = cv2.rotate(strap_text, cv2.ROTATE_90_CLOCKWISE)

cv2.imwrite("assets/lanyard/lanyard.png", lanyard)
cv2.imwrite("lanyard.png", lanyard)
print("Created assets/lanyard/lanyard.png & root lanyard.png")


# ─────────────────────────────────────────────────────────────
# 4. GENERATE BINARY glTF 2.0 (card.glb)
# ─────────────────────────────────────────────────────────────
# Creates a 3D badge model:
# - Card plate: width = 1.6, height = 2.5, depth = 0.04
# - Front face: UVs [0, 0] to [1, 1]
# - Back face: UVs [0, 0] to [1, 1]
# - Top badge clip: width = 0.5, height = 0.3, depth = 0.08, located at top

def build_glb(output_path):
    # Mesh geometry: Box with front, back, sides, and top clip
    cw, ch, cd = 1.6, 2.5, 0.04

    # 8 corners for card box
    # Front quad (z = +cd/2), Back quad (z = -cd/2)
    # Positions, Normals, UVs
    vertices = []
    indices = []

    def add_quad(p1, p2, p3, p4, normal, uv1, uv2, uv3, uv4):
        base = len(vertices)
        vertices.extend([
            (*p1, *normal, *uv1),
            (*p2, *normal, *uv2),
            (*p3, *normal, *uv3),
            (*p4, *normal, *uv4),
        ])
        indices.extend([base, base + 1, base + 2, base, base + 2, base + 3])

    hx, hy, hz = cw / 2, ch / 2, cd / 2

    # FRONT FACE (Facing +Z)
    add_quad(
        (-hx, -hy, hz), (hx, -hy, hz), (hx, hy, hz), (-hx, hy, hz),
        (0, 0, 1),
        (0, 1), (1, 1), (1, 0), (0, 0)
    )

    # BACK FACE (Facing -Z)
    add_quad(
        (hx, -hy, -hz), (-hx, -hy, -hz), (-hx, hy, -hz), (hx, hy, -hz),
        (0, 0, -1),
        (0, 1), (1, 1), (1, 0), (0, 0)
    )

    # TOP, BOTTOM, LEFT, RIGHT EDGES
    # Top (+Y)
    add_quad((-hx, hy, hz), (hx, hy, hz), (hx, hy, -hz), (-hx, hy, -hz), (0, 1, 0), (0, 0), (1, 0), (1, 1), (0, 1))
    # Bottom (-Y)
    add_quad((-hx, -hy, -hz), (hx, -hy, -hz), (hx, -hy, hz), (-hx, -hy, hz), (0, -1, 0), (0, 0), (1, 0), (1, 1), (0, 1))
    # Left (-X)
    add_quad((-hx, -hy, -hz), (-hx, -hy, hz), (-hx, hy, hz), (-hx, hy, -hz), (-1, 0, 0), (0, 0), (1, 0), (1, 1), (0, 1))
    # Right (+X)
    add_quad((hx, -hy, hz), (hx, -hy, -hz), (hx, hy, -hz), (hx, hy, hz), (1, 0, 0), (0, 0), (1, 0), (1, 1), (0, 1))

    # TOP CLIP (Metallic clip at the top)
    kx, ky, kz = 0.25, 0.2, 0.06
    cy = hy + ky / 2
    add_quad((-kx, cy - ky/2, kz), (kx, cy - ky/2, kz), (kx, cy + ky/2, kz), (-kx, cy + ky/2, kz), (0, 0, 1), (0, 0), (1, 0), (1, 1), (0, 1))
    add_quad((kx, cy - ky/2, -kz), (-kx, cy - ky/2, -kz), (-kx, cy + ky/2, -kz), (kx, cy + ky/2, -kz), (0, 0, -1), (0, 0), (1, 0), (1, 1), (0, 1))

    # Pack binary buffer
    # Vertex layout: float32 * 8 (pos 3, norm 3, uv 2) -> 32 bytes per vertex
    # Index layout: uint16 * indices
    vertex_bytes = bytearray()
    min_pos = [1e9, 1e9, 1e9]
    max_pos = [-1e9, -1e9, -1e9]

    for v in vertices:
        x, y, z, nx, ny, nz, u, v_coord = v
        min_pos[0] = min(min_pos[0], x)
        min_pos[1] = min(min_pos[1], y)
        min_pos[2] = min(min_pos[2], z)
        max_pos[0] = max(max_pos[0], x)
        max_pos[1] = max(max_pos[1], y)
        max_pos[2] = max(max_pos[2], z)
        vertex_bytes += struct.pack("<8f", x, y, z, nx, ny, nz, u, v_coord)

    index_bytes = bytearray()
    for idx in indices:
        index_bytes += struct.pack("<H", idx)

    # Pad index_bytes to 4-byte alignment
    while len(index_bytes) % 4 != 0:
        index_bytes += b'\x00'

    # Combine buffer: indices then vertices
    bin_buffer = index_bytes + vertex_bytes
    while len(bin_buffer) % 4 != 0:
        bin_buffer += b'\x00'

    idx_byte_len = len(index_bytes)
    vtx_byte_len = len(vertex_bytes)
    total_byte_len = len(bin_buffer)

    gltf_json = {
        "asset": {"version": "2.0", "generator": "Antigravity Procedural GLB"},
        "scene": 0,
        "scenes": [{"nodes": [0]}],
        "nodes": [{"name": "CardBadge", "mesh": 0}],
        "meshes": [{
            "name": "BadgeMesh",
            "primitives": [{
                "attributes": {
                    "POSITION": 1,
                    "NORMAL": 2,
                    "TEXCOORD_0": 3
                },
                "indices": 0
            }]
        }],
        "buffers": [{
            "byteLength": total_byte_len
        }],
        "bufferViews": [
            {
                "buffer": 0,
                "byteOffset": 0,
                "byteLength": idx_byte_len,
                "target": 34963 # ELEMENT_ARRAY_BUFFER
            },
            {
                "buffer": 0,
                "byteOffset": idx_byte_len,
                "byteLength": vtx_byte_len,
                "byteStride": 32,
                "target": 34962 # ARRAY_BUFFER
            }
        ],
        "accessors": [
            {
                "bufferView": 0,
                "byteOffset": 0,
                "componentType": 5123, # UNSIGNED_SHORT
                "count": len(indices),
                "type": "SCALAR",
                "max": [len(vertices) - 1],
                "min": [0]
            },
            {
                "bufferView": 1,
                "byteOffset": 0,
                "componentType": 5126, # FLOAT
                "count": len(vertices),
                "type": "VEC3",
                "max": max_pos,
                "min": min_pos
            },
            {
                "bufferView": 1,
                "byteOffset": 12,
                "componentType": 5126, # FLOAT
                "count": len(vertices),
                "type": "VEC3"
            },
            {
                "bufferView": 1,
                "byteOffset": 24,
                "componentType": 5126, # FLOAT
                "count": len(vertices),
                "type": "VEC2"
            }
        ]
    }

    json_bytes = json.dumps(gltf_json).encode("utf-8")
    # Pad json_bytes to 4-byte boundary with spaces (0x20)
    while len(json_bytes) % 4 != 0:
        json_bytes += b' '

    # GLB Header: magic (0x46546C67), version (2), length
    # Chunk 0: JSON (0x4E4F534A)
    # Chunk 1: BIN (0x004E4942)
    glb_header_len = 12
    chunk0_header_len = 8
    chunk1_header_len = 8
    total_glb_len = glb_header_len + chunk0_header_len + len(json_bytes) + chunk1_header_len + len(bin_buffer)

    glb_bytes = bytearray()
    # Header
    glb_bytes += struct.pack("<4sII", b"glTF", 2, total_glb_len)
    # Chunk 0 (JSON)
    glb_bytes += struct.pack("<II", len(json_bytes), 0x4E4F534A)
    glb_bytes += json_bytes
    # Chunk 1 (BIN)
    glb_bytes += struct.pack("<II", len(bin_buffer), 0x004E4942)
    glb_bytes += bin_buffer

    with open(output_path, "wb") as f:
        f.write(glb_bytes)
    print(f"Created valid GLB: {output_path} ({len(glb_bytes)} bytes)")

build_glb("assets/lanyard/card.glb")
build_glb("card.glb")

print("\nAll Lanyard assets successfully generated!")
