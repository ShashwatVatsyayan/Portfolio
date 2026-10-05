/**
 * LogoLoop — Continuous Moving Technology Strip
 * 
 * Options:
 * - logos: array of { title, svg, href }
 * - speed: pixels per second (default 120)
 * - direction: 'left' | 'right' (default 'left')
 * - gap: spacing in px between logos (default 40)
 * - hoverSpeed: speed when hovered (default 0 for pause)
 * - scaleOnHover: boolean (default true)
 * - fadeOut: boolean (default true)
 */

export class LogoLoop {
  constructor(containerEl, options = {}) {
    this.container = typeof containerEl === 'string' ? document.querySelector(containerEl) : containerEl;
    if (!this.container) return;

    this.logos = options.logos || [];
    if (this.logos.length === 0) return;

    this.baseSpeed = options.speed ?? 120;
    this.direction = options.direction === 'right' ? -1 : 1;
    this.gap = options.gap ?? 40;
    this.hoverSpeed = options.hoverSpeed ?? 0;
    this.scaleOnHover = options.scaleOnHover !== false;
    this.fadeOut = options.fadeOut !== false;

    this.currentSpeed = this.baseSpeed;
    this.targetSpeed = this.baseSpeed;
    this.offset = 0;
    this.isHovered = false;
    this.lastTime = performance.now();

    this.initDOM();
    this.bindEvents();
    this.startLoop();
  }

  initDOM() {
    this.container.classList.add('logo-loop-container');
    this.container.style.setProperty('--logo-gap', `${this.gap}px`);

    if (this.fadeOut) {
      const leftFade = document.createElement('div');
      leftFade.className = 'logo-loop-fade logo-loop-fade--left';
      const rightFade = document.createElement('div');
      rightFade.className = 'logo-loop-fade logo-loop-fade--right';
      this.container.appendChild(leftFade);
      this.container.appendChild(rightFade);
    }

    this.track = document.createElement('div');
    this.track.className = 'logo-loop-track';

    // Duplicate logos 3 times for seamless wrapping
    const itemsHtml = this.logos.map(item => `
      <div class="logo-loop-item cursor-target" title="${item.title}">
        ${item.svg}
        <span>${item.title}</span>
      </div>
    `).join('');

    this.track.innerHTML = itemsHtml + itemsHtml + itemsHtml;
    this.container.appendChild(this.track);
  }

  bindEvents() {
    this.container.addEventListener('pointerenter', () => {
      this.targetSpeed = this.hoverSpeed;
    });

    this.container.addEventListener('pointerleave', () => {
      this.targetSpeed = this.baseSpeed;
    });
  }

  startLoop() {
    const tick = (now) => {
      const delta = (now - this.lastTime) / 1000;
      this.lastTime = now;

      // Smooth acceleration / deceleration
      this.currentSpeed += (this.targetSpeed - this.currentSpeed) * 0.1;

      // Move track
      this.offset += this.currentSpeed * this.direction * delta;

      // Wrap around when one set has scrolled
      const halfWidth = this.track.scrollWidth / 3;
      if (halfWidth > 0) {
        if (this.offset >= halfWidth) {
          this.offset -= halfWidth;
        } else if (this.offset <= 0 && this.direction < 0) {
          this.offset += halfWidth;
        }
      }

      this.track.style.transform = `translate3d(${-this.offset}px, 0, 0)`;
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }
}
