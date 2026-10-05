/**
 * ShinyText — Metallic light-sweep typography component.
 * Produces an elegant, continuous specular shine across prominent editorial text.
 */

export class ShinyText {
  constructor(el, options = {}) {
    this.el = typeof el === 'string' ? document.querySelector(el) : el;
    if (!this.el) return;

    this.text = options.text || this.el.textContent.trim();
    this.speed = options.speed ?? 4.5; // seconds
    this.color = options.color || '#b5b5b5';
    this.shineColor = options.shineColor || '#ffffff';
    this.spread = options.spread ?? 120; // %

    this.render();
  }

  render() {
    this.el.classList.add('shiny-text');
    this.el.textContent = this.text;
    this.el.style.animationDuration = `${this.speed}s`;
  }
}

export function initShinyText() {
  document.querySelectorAll('[data-shiny-text]').forEach(el => {
    new ShinyText(el, {
      text: el.dataset.shinyText,
      speed: 4.5,
      color: '#b5b5b5',
      shineColor: '#ffffff'
    });
  });
}
