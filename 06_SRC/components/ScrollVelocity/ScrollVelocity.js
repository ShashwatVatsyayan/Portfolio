/**
 * ScrollVelocity — Kinetic Horizontal Text Streams Driven by Scroll Velocity
 * 
 * Options:
 * - texts: Array of strings to render
 * - baseVelocity: baseline movement speed (default 15)
 * - velocityFactor: how aggressively page scroll moves the stream (default 1.8)
 */

export class ScrollVelocity {
  constructor(containerEl, options = {}) {
    this.container = typeof containerEl === 'string' ? document.querySelector(containerEl) : containerEl;
    if (!this.container) return;

    this.texts = options.texts || [
      'INITIATE COLLABORATION',
      'LETS BUILD SOMETHING',
      'GET IN TOUCH'
    ];
    this.baseVelocity = options.baseVelocity ?? 18;
    this.velocityFactor = options.velocityFactor ?? 2.2;

    this.lastScrollY = window.scrollY;
    this.scrollVelocity = 0;
    this.lines = [];

    this.initDOM();
    this.bindEvents();
    this.startLoop();
  }

  initDOM() {
    this.container.classList.add('scroll-velocity-wrapper');

    this.texts.forEach((text, lineIdx) => {
      const lineEl = document.createElement('div');
      lineEl.className = 'scroll-velocity-line';

      const trackEl = document.createElement('div');
      trackEl.className = 'scroll-velocity-track';

      const isReverse = lineIdx % 2 === 1;
      const isCrimson = lineIdx === 0;
      const isFilled = lineIdx === 1;

      const textClass = isCrimson ? 'text-crimson' : isFilled ? 'text-filled' : '';

      // Create repeat units for continuous horizontal loop
      let content = '';
      for (let r = 0; r < 5; r++) {
        content += `
          <span class="scroll-velocity-text ${textClass}">
            ${text}
            <span class="scroll-velocity-sep">✦</span>
          </span>
        `;
      }

      trackEl.innerHTML = content;
      lineEl.appendChild(trackEl);
      this.container.appendChild(lineEl);

      this.lines.push({
        track: trackEl,
        direction: isReverse ? -1 : 1,
        offset: 0
      });
    });
  }

  bindEvents() {
    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - this.lastScrollY;
      this.lastScrollY = currentScrollY;

      // Track scroll impulse
      this.scrollVelocity = delta * this.velocityFactor;
    }, { passive: true });
  }

  startLoop() {
    let lastTime = performance.now();

    const tick = (now) => {
      const dt = (now - lastTime) / 1000;
      lastTime = now;

      // Decay scroll velocity smoothly
      this.scrollVelocity *= 0.92;

      this.lines.forEach(line => {
        // Velocity tied directly to user's scrolling + subtle ambient drift
        const totalVelocity = (this.baseVelocity + Math.abs(this.scrollVelocity) * 12) * line.direction;
        line.offset += totalVelocity * dt;

        // Wrap around loop
        const halfWidth = line.track.scrollWidth / 3;
        if (halfWidth > 0) {
          if (line.offset >= halfWidth) {
            line.offset -= halfWidth;
          } else if (line.offset <= -halfWidth) {
            line.offset += halfWidth;
          }
        }

        line.track.style.transform = `translate3d(${-line.offset.toFixed(1)}px, 0, 0)`;
      });

      requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }
}
