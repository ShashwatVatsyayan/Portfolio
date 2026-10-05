/**
 * TargetCursor — Minimal Rotating Reticle Custom Pointer
 * 
 * Options:
 * - spinDuration: duration in seconds per full 360deg spin (default 2s)
 * - hideDefaultCursor: boolean to hide the default browser arrow (default true)
 * - parallaxOn: boolean to enable subtle inertia on cursor movement (default true)
 */

export class TargetCursor {
  constructor(options = {}) {
    this.spinDuration = options.spinDuration ?? 2;
    this.hideDefaultCursor = options.hideDefaultCursor !== false;
    this.parallaxOn = options.parallaxOn !== false;

    // Detect touch / coarse pointer
    const isTouch = window.matchMedia('(hover: none) or (pointer: coarse)').matches;
    if (isTouch) return;

    this.mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    this.pos = { x: this.mouse.x, y: this.mouse.y };
    this.isHoveringTarget = false;
    this.isVisible = false;

    this.initDOM();
    this.bindEvents();
    this.startLoop();
  }

  initDOM() {
    if (this.hideDefaultCursor) {
      document.documentElement.classList.add('hide-default-cursor');
    }

    this.wrapper = document.createElement('div');
    this.wrapper.className = 'target-cursor-wrapper';
    this.wrapper.style.setProperty('--spin-duration', `${this.spinDuration}s`);

    this.cursor = document.createElement('div');
    this.cursor.className = 'target-cursor';
    this.cursor.innerHTML = `
      <div class="target-cursor__ring"></div>
      <div class="target-cursor__brackets"></div>
      <div class="target-cursor__center"></div>
    `;

    this.wrapper.appendChild(this.cursor);
    document.body.appendChild(this.wrapper);
  }

  bindEvents() {
    window.addEventListener('pointermove', e => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
      if (!this.isVisible) {
        this.isVisible = true;
        this.wrapper.style.opacity = '1';
      }
    }, { passive: true });

    document.addEventListener('pointerleave', () => {
      this.isVisible = false;
      this.wrapper.style.opacity = '0';
    });

    document.addEventListener('pointerenter', () => {
      this.isVisible = true;
      this.wrapper.style.opacity = '1';
    });

    // Detect hover on .cursor-target elements dynamically (works for newly added items too)
    document.addEventListener('mouseover', e => {
      const target = e.target.closest('.cursor-target, button, a, .cylinder-card, .logo-loop-item, input, textarea');
      if (target) {
        this.cursor.classList.add('is-locked');
      } else {
        this.cursor.classList.remove('is-locked');
      }
    }, { passive: true });
  }

  startLoop() {
    const lerpSpeed = this.parallaxOn ? 0.22 : 0.45;
    const tick = () => {
      // Smooth lerp to mouse position
      this.pos.x += (this.mouse.x - this.pos.x) * lerpSpeed;
      this.pos.y += (this.mouse.y - this.pos.y) * lerpSpeed;

      this.wrapper.style.transform = `translate3d(${this.pos.x.toFixed(1)}px, ${this.pos.y.toFixed(1)}px, 0)`;
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }
}
