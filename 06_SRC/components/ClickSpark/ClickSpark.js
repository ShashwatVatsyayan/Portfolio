/**
 * ClickSpark — Subtle global click spark particle burst.
 * Emits restrained white sparks on clicks across interactive elements without interfering with drag or text selection.
 */

export class ClickSpark {
  constructor(options = {}) {
    this.sparkColor = options.sparkColor || '#ffffff';
    this.sparkSize = options.sparkSize ?? 10;
    this.sparkRadius = options.sparkRadius ?? 15;
    this.sparkCount = options.sparkCount ?? 8;
    this.duration = options.duration ?? 400; // ms

    this.sparks = [];
    this.rafId = null;
    this.pointerStart = { x: 0, y: 0 };
    this.isDragging = false;

    this.initDOM();
    this.bindEvents();
  }

  initDOM() {
    this.canvas = document.createElement('canvas');
    this.canvas.className = 'click-spark-canvas';
    document.body.appendChild(this.canvas);
    this.ctx = this.canvas.getContext('2d');

    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.w = window.innerWidth;
    this.h = window.innerHeight;
    this.canvas.width = Math.round(this.w * dpr);
    this.canvas.height = Math.round(this.h * dpr);
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  bindEvents() {
    window.addEventListener('pointerdown', (e) => {
      this.pointerStart = { x: e.clientX, y: e.clientY };
      this.isDragging = false;
    }, { passive: true });

    window.addEventListener('pointermove', (e) => {
      const dx = e.clientX - this.pointerStart.x;
      const dy = e.clientY - this.pointerStart.y;
      if (Math.sqrt(dx * dx + dy * dy) > 8) {
        this.isDragging = true;
      }
    }, { passive: true });

    window.addEventListener('click', (e) => {
      // Do not trigger while Lanyard intro is active or during drag
      if (document.body.classList.contains('lanyard-active')) return;
      if (e.target.closest('#lanyardIntro')) return;
      if (this.isDragging) return;

      this.createSpark(e.clientX, e.clientY);
    });
  }

  createSpark(x, y) {
    const now = performance.now();
    for (let i = 0; i < this.sparkCount; i++) {
      const angle = (i * 2 * Math.PI) / this.sparkCount;
      this.sparks.push({
        x,
        y,
        angle,
        startTime: now
      });
    }

    if (!this.rafId) {
      this.rafId = requestAnimationFrame(this.render.bind(this));
    }
  }

  render(now) {
    this.ctx.clearRect(0, 0, this.w, this.h);

    this.sparks = this.sparks.filter(spark => {
      const elapsed = now - spark.startTime;
      if (elapsed >= this.duration) return false;

      const progress = elapsed / this.duration;
      const ease = 1 - Math.pow(1 - progress, 3); // cubic ease out

      const distance = ease * this.sparkRadius;
      const length = (1 - progress) * this.sparkSize;

      const sx = spark.x + Math.cos(spark.angle) * distance;
      const sy = spark.y + Math.sin(spark.angle) * distance;
      const ex = spark.x + Math.cos(spark.angle) * (distance + length);
      const ey = spark.y + Math.sin(spark.angle) * (distance + length);

      this.ctx.save();
      this.ctx.beginPath();
      this.ctx.moveTo(sx, sy);
      this.ctx.lineTo(ex, ey);
      this.ctx.strokeStyle = this.sparkColor;
      this.ctx.lineWidth = 1.5;
      this.ctx.lineCap = 'round';
      this.ctx.globalAlpha = 1 - progress;
      this.ctx.shadowColor = 'rgba(255, 255, 255, 0.4)';
      this.ctx.shadowBlur = 4;
      this.ctx.stroke();
      this.ctx.restore();

      return true;
    });

    if (this.sparks.length > 0) {
      this.rafId = requestAnimationFrame(this.render.bind(this));
    } else {
      this.rafId = null;
    }
  }
}

export function initClickSpark() {
  return new ClickSpark({
    sparkColor: '#ffffff',
    sparkSize: 10,
    sparkRadius: 15,
    sparkCount: 8,
    duration: 400
  });
}
