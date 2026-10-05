# Design System & Aesthetic Guidelines

## Aesthetic Pillars
- **Dark & Cinematic**: Near-black void background with subtle layered gradients and vignettes.
- **Mysterious & Minimal**: Generous whitespace, precise typography tracking, and restrained crimson illumination.
- **Premium Craftsmanship**: High frame rate canvas drawing, subtle particle embers, ambient noise, and organic ease curves.

## Color Tokens
```css
:root {
  --ink: #050506;          /* Deepest obsidian black */
  --ink-2: #0b0b0d;        /* Secondary dark card fill */
  --ink-3: #121217;        /* Tertiary surface */
  --bone: #e8e4dc;         /* Off-white primary text */
  --smoke: #8a8580;        /* Muted secondary text */
  --blood: #c0121f;        /* Deep crimson accent */
  --blood-hot: #ff2b2b;    /* Glowing crimson energy */
  --ember: #ff6a3d;        /* Spark accent */
  --border: rgba(232, 228, 220, 0.08);
  --border-hot: rgba(255, 43, 43, 0.4);
}
```

## Typography
- **Primary Display**: `Cinzel`, serif (cinematic headings, kickers, roman numeral marks)
- **Japanese / Stylistic Kanji**: `Shippori Mincho`, serif (editorial accents)
- **Body & Sans**: `Zen Kaku Gothic New`, sans-serif (clean readability)
- **Monospace & Metadata**: `Space Grotesk`, monospace (labels, indices, coordinate readouts)

## Motion & Interpolation
- **Canvas Scrubbing**: Linear interpolation `lerp(current, target, 0.14)` for natural momentum without lag.
- **Transitions**: `cubic-bezier(0.22, 1, 0.36, 1)` for clean decelerated entrances.
- **Scroll Parallax**: Selective micro-drifts mapped to scroll velocity.
