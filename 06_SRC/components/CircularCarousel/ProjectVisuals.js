/**
 * Procedural SVG Visual Generators for the 5 Featured Projects
 * High-aesthetic, editorial, restrained vector graphics.
 */

export function getProjectVisualSvg(visualType, accentColor = '#ff2b2b') {
  switch (visualType) {
    case 'agro':
      // FBOOST AGRO: Topographical agricultural mesh & sensor telemetry
      return `
        <svg viewBox="0 0 400 480" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="agroGlow" cx="50%" cy="45%" r="50%">
              <stop offset="0%" stop-color="#22c55e" stop-opacity="0.28" />
              <stop offset="60%" stop-color="#22c55e" stop-opacity="0.04" />
              <stop offset="100%" stop-color="#000000" stop-opacity="0" />
            </radialGradient>
            <linearGradient id="agroGrid" x1="0" y1="0" x2="0" y2="480" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stop-color="#22c55e" stop-opacity="0.05" />
              <stop offset="50%" stop-color="#22c55e" stop-opacity="0.25" />
              <stop offset="100%" stop-color="#22c55e" stop-opacity="0.05" />
            </linearGradient>
          </defs>
          <rect width="400" height="480" fill="#060b08" />
          <circle cx="200" cy="220" r="180" fill="url(#agroGlow)" />
          
          <!-- Isometric Terrain Grid -->
          <g opacity="0.35" stroke="url(#agroGrid)" stroke-width="1">
            <path d="M40 320 L200 240 L360 320 L200 400 Z" />
            <path d="M40 280 L200 200 L360 280 L200 360 Z" />
            <path d="M40 240 L200 160 L360 240 L200 320 Z" />
            <line x1="80" y1="220" x2="80" y2="340" />
            <line x1="140" y1="190" x2="140" y2="370" />
            <line x1="200" y1="160" x2="200" y2="400" />
            <line x1="260" y1="190" x2="260" y2="370" />
            <line x1="320" y1="220" x2="320" y2="340" />
          </g>

          <!-- Topographical Contour Lines -->
          <path d="M60 210 Q 130 180 200 195 T 340 180" stroke="#22c55e" stroke-width="1.4" stroke-dasharray="4 4" opacity="0.6" fill="none" />
          <path d="M80 160 Q 150 130 200 145 T 320 135" stroke="#22c55e" stroke-width="1.8" opacity="0.8" fill="none" />
          <path d="M120 110 Q 170 90 200 100 T 280 95" stroke="#4ade80" stroke-width="2" opacity="0.9" fill="none" />
          
          <!-- Telemetry Nodes -->
          <circle cx="200" cy="145" r="4" fill="#4ade80" />
          <circle cx="200" cy="145" r="9" stroke="#4ade80" stroke-width="1" opacity="0.5" />
          
          <circle cx="150" cy="225" r="3.5" fill="#22c55e" />
          <circle cx="270" cy="205" r="3.5" fill="#22c55e" />
          
          <!-- Telemetry Callout Box -->
          <g transform="translate(130, 290)">
            <rect width="140" height="38" rx="6" fill="rgba(10, 24, 16, 0.85)" stroke="rgba(34, 197, 94, 0.4)" stroke-width="1" />
            <text x="12" y="16" fill="#86efac" font-family="monospace" font-size="9" letter-spacing="1">SOIL MOISTURE</text>
            <text x="12" y="29" fill="#ffffff" font-family="monospace" font-size="11" font-weight="bold">68.4% · OPTIMAL</text>
          </g>
        </svg>
      `;

    case 'debugger':
      // BugOff: Developer diagnostic AST matrix & vulnerability triage
      return `
        <svg viewBox="0 0 400 480" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="bugGlow" cx="50%" cy="45%" r="50%">
              <stop offset="0%" stop-color="#f43f5e" stop-opacity="0.3" />
              <stop offset="70%" stop-color="#000000" stop-opacity="0" />
            </radialGradient>
          </defs>
          <rect width="400" height="480" fill="#0c0709" />
          <circle cx="200" cy="210" r="170" fill="url(#bugGlow)" />

          <!-- Terminal Grid Lines -->
          <g stroke="rgba(244, 63, 94, 0.12)" stroke-width="1">
            <line x1="40" y1="80" x2="360" y2="80" />
            <line x1="40" y1="140" x2="360" y2="140" />
            <line x1="40" y1="200" x2="360" y2="200" />
            <line x1="40" y1="260" x2="360" y2="260" />
            <line x1="40" y1="320" x2="360" y2="320" />
            <line x1="120" y1="50" x2="120" y2="380" />
            <line x1="200" y1="50" x2="200" y2="380" />
            <line x1="280" y1="50" x2="280" y2="380" />
          </g>

          <!-- Branching AST Node Network -->
          <g stroke="#f43f5e" stroke-width="1.8" fill="none" opacity="0.85">
            <path d="M200 110 L140 180 L80 250" />
            <path d="M200 110 L260 180 L320 250" />
            <path d="M140 180 L200 250 L200 310" />
            <path d="M260 180 L200 250" />
          </g>

          <!-- AST Nodes -->
          <circle cx="200" cy="110" r="6" fill="#f43f5e" />
          <circle cx="140" cy="180" r="5" fill="#ffffff" stroke="#f43f5e" stroke-width="2" />
          <circle cx="260" cy="180" r="5" fill="#f43f5e" />
          <circle cx="80"  cy="250" r="4.5" fill="#fb7185" />
          <circle cx="200" cy="250" r="7" fill="#f43f5e" />
          <circle cx="200" cy="250" r="14" stroke="#f43f5e" stroke-width="1" stroke-dasharray="3 3" opacity="0.6" />
          <circle cx="320" cy="250" r="4.5" fill="#fb7185" />
          <circle cx="200" cy="310" r="5" fill="#fda4af" />

          <!-- Telemetry Terminal Badge -->
          <g transform="translate(110, 340)">
            <rect width="180" height="42" rx="6" fill="rgba(20, 8, 12, 0.9)" stroke="rgba(244, 63, 94, 0.45)" stroke-width="1" />
            <text x="14" y="18" fill="#fda4af" font-family="monospace" font-size="9" letter-spacing="1">EXCEPTION REPRODUCED</text>
            <text x="14" y="32" fill="#ffffff" font-family="monospace" font-size="11" font-weight="bold">NULL_REF: 0x4F8A39</text>
          </g>
        </svg>
      `;

    case 'cyber':
      // SANSEC AI: Threat intelligence shield & binary neural classifier
      return `
        <svg viewBox="0 0 400 480" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="cyberGlow" cx="50%" cy="45%" r="50%">
              <stop offset="0%" stop-color="#a855f7" stop-opacity="0.32" />
              <stop offset="70%" stop-color="#000000" stop-opacity="0" />
            </radialGradient>
          </defs>
          <rect width="400" height="480" fill="#08050c" />
          <circle cx="200" cy="210" r="170" fill="url(#cyberGlow)" />

          <!-- Defensive Shield Crest Outer Geometry -->
          <path d="M200 90 L310 140 L310 240 Q 310 320 200 360 Q 90 320 90 240 L 90 140 Z" 
                stroke="rgba(168, 85, 247, 0.55)" stroke-width="1.8" fill="none" />
          
          <path d="M200 115 L285 155 L285 235 Q 285 300 200 335 Q 115 300 115 235 L 115 155 Z" 
                stroke="rgba(192, 132, 252, 0.3)" stroke-width="1.2" stroke-dasharray="6 4" fill="none" />

          <!-- Concentric Threat Radar Rings -->
          <circle cx="200" cy="220" r="60" stroke="#a855f7" stroke-width="1.2" opacity="0.5" />
          <circle cx="200" cy="220" r="35" stroke="#c084fc" stroke-width="1.6" opacity="0.75" />
          <circle cx="200" cy="220" r="8" fill="#c084fc" />

          <!-- Sweeping Threat Vector Lines -->
          <line x1="200" y1="120" x2="200" y2="320" stroke="rgba(168, 85, 247, 0.4)" stroke-width="1" />
          <line x1="120" y1="220" x2="280" y2="220" stroke="rgba(168, 85, 247, 0.4)" stroke-width="1" />

          <!-- Threat Classification Badge -->
          <g transform="translate(100, 375)">
            <rect width="200" height="38" rx="6" fill="rgba(18, 10, 28, 0.9)" stroke="rgba(168, 85, 247, 0.5)" stroke-width="1" />
            <text x="14" y="16" fill="#c084fc" font-family="monospace" font-size="9" letter-spacing="1">NEURAL BINARY ANALYSIS</text>
            <text x="14" y="29" fill="#ffffff" font-family="monospace" font-size="11" font-weight="bold">THREAT SCORE: 0.02 (CLEAN)</text>
          </g>
        </svg>
      `;

    case 'ios':
      // Career Ledger: Cupertino iOS glass architecture & student ledger
      return `
        <svg viewBox="0 0 400 480" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="iosGlow" cx="50%" cy="45%" r="50%">
              <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.28" />
              <stop offset="70%" stop-color="#000000" stop-opacity="0" />
            </radialGradient>
          </defs>
          <rect width="400" height="480" fill="#04090f" />
          <circle cx="200" cy="210" r="170" fill="url(#iosGlow)" />

          <!-- Stylized Cupertino Device Chassis Outline -->
          <rect x="90" y="80" width="220" height="320" rx="28" stroke="rgba(56, 189, 248, 0.45)" stroke-width="2" fill="none" />
          <line x1="170" y1="95" x2="230" y2="95" stroke="rgba(56, 189, 248, 0.6)" stroke-width="3" stroke-linecap="round" />

          <!-- Academic Progression Chart -->
          <path d="M120 280 Q 150 250 180 230 T 250 170 T 280 140" stroke="#38bdf8" stroke-width="2.5" fill="none" />
          <circle cx="120" cy="280" r="4.5" fill="#38bdf8" />
          <circle cx="180" cy="230" r="4.5" fill="#38bdf8" />
          <circle cx="250" cy="170" r="5" fill="#ffffff" stroke="#38bdf8" stroke-width="2" />
          <circle cx="280" cy="140" r="6" fill="#7dd3fc" />

          <!-- Ledger Card Snippets -->
          <rect x="115" y="190" width="80" height="28" rx="6" fill="rgba(14, 30, 48, 0.85)" stroke="rgba(56, 189, 248, 0.3)" stroke-width="1" />
          <text x="124" y="208" fill="#7dd3fc" font-family="monospace" font-size="8">CREDENTIALS</text>

          <rect x="205" y="240" width="80" height="28" rx="6" fill="rgba(14, 30, 48, 0.85)" stroke="rgba(56, 189, 248, 0.3)" stroke-width="1" />
          <text x="216" y="258" fill="#7dd3fc" font-family="monospace" font-size="8">MILESTONES</text>

          <!-- iOS Milestone Callout -->
          <g transform="translate(100, 360)">
            <rect width="200" height="38" rx="6" fill="rgba(6, 18, 30, 0.9)" stroke="rgba(56, 189, 248, 0.45)" stroke-width="1" />
            <text x="14" y="16" fill="#7dd3fc" font-family="monospace" font-size="9" letter-spacing="1">STUDENT PORTFOLIO ENGINE</text>
            <text x="14" y="29" fill="#ffffff" font-family="monospace" font-size="11" font-weight="bold">SWIFTUI · CLOUDKIT SYNC</text>
          </g>
        </svg>
      `;

    case 'vision':
    default:
      // Aegis AI: Deepfake & synthetic media facial forensics
      return `
        <svg viewBox="0 0 400 480" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="visionGlow" cx="50%" cy="45%" r="50%">
              <stop offset="0%" stop-color="#ff2b2b" stop-opacity="0.34" />
              <stop offset="70%" stop-color="#000000" stop-opacity="0" />
            </radialGradient>
          </defs>
          <rect width="400" height="480" fill="#0d0404" />
          <circle cx="200" cy="210" r="170" fill="url(#visionGlow)" />

          <!-- Facial Landmark Triangulation Mesh -->
          <g stroke="rgba(255, 43, 43, 0.45)" stroke-width="1.2" fill="none">
            <polygon points="200,90 140,150 200,170" />
            <polygon points="200,90 260,150 200,170" />
            <polygon points="140,150 200,170 150,230" />
            <polygon points="260,150 200,170 250,230" />
            <polygon points="150,230 200,170 200,240" />
            <polygon points="250,230 200,170 200,240" />
            <polygon points="150,230 200,240 200,290 170,320" />
            <polygon points="250,230 200,240 200,290 230,320" />
            <polygon points="170,320 200,290 230,320 200,345" />
          </g>

          <!-- Facial Landmark Nodes -->
          <circle cx="140" cy="150" r="3.5" fill="#ff4d4d" />
          <circle cx="260" cy="150" r="3.5" fill="#ff4d4d" />
          <circle cx="200" cy="170" r="4.5" fill="#ffffff" />
          <circle cx="150" cy="230" r="4" fill="#ff4d4d" />
          <circle cx="250" cy="230" r="4" fill="#ff4d4d" />
          <circle cx="200" cy="240" r="5" fill="#ff2b2b" />
          <circle cx="200" cy="345" r="4" fill="#ff4d4d" />

          <!-- Forensics Eye Scanning Reticles -->
          <circle cx="160" cy="175" r="16" stroke="#ff2b2b" stroke-width="1.5" stroke-dasharray="4 2" />
          <circle cx="240" cy="175" r="16" stroke="#ff2b2b" stroke-width="1.5" stroke-dasharray="4 2" />

          <!-- Spatio-Temporal Artifact Telemetry Box -->
          <g transform="translate(90, 365)">
            <rect width="220" height="42" rx="6" fill="rgba(24, 6, 6, 0.9)" stroke="rgba(255, 43, 43, 0.5)" stroke-width="1" />
            <text x="14" y="18" fill="#fca5a5" font-family="monospace" font-size="9" letter-spacing="1">FREQUENCY ARTIFACT SCAN</text>
            <text x="14" y="32" fill="#ffffff" font-family="monospace" font-size="11" font-weight="bold">SYNTHETIC MEDIA CONFIDENCE: 98.6%</text>
          </g>
        </svg>
      `;
  }
}
