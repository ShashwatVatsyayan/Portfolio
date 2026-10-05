/**
 * ScrollReveal — Editorial text reveal with subtle opacity, blur reduction, and rotation correction.
 * Lightweight, highly performant via IntersectionObserver.
 */

export class ScrollReveal {
  constructor(target, options = {}) {
    this.elements = typeof target === 'string' 
      ? Array.from(document.querySelectorAll(target)) 
      : (target instanceof NodeList || Array.isArray(target) ? Array.from(target) : [target]);

    if (!this.elements || this.elements.length === 0) return;

    this.baseOpacity = options.baseOpacity ?? 0;
    this.enableBlur = options.enableBlur !== false;
    this.blurStrength = options.blurStrength ?? 10; // px
    this.baseRotation = options.baseRotation ?? 5; // degrees
    this.threshold = options.threshold ?? 0.15;
    this.once = options.once !== false;

    this.init();
  }

  init() {
    if (!('IntersectionObserver' in window)) {
      this.elements.forEach(el => el.classList.add('is-revealed'));
      return;
    }

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          if (this.once) {
            this.observer.unobserve(entry.target);
          }
        } else if (!this.once) {
          entry.target.classList.remove('is-revealed');
        }
      });
    }, {
      threshold: this.threshold,
      rootMargin: '0px 0px -40px 0px'
    });

    this.elements.forEach(el => {
      el.classList.add('scroll-reveal');
      el.style.setProperty('--sr-base-opacity', String(this.baseOpacity));
      el.style.setProperty('--sr-blur', this.enableBlur ? `${this.blurStrength}px` : '0px');
      el.style.setProperty('--sr-rot', `${this.baseRotation}deg`);
      this.observer.observe(el);
    });
  }

  destroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}

export function initScrollReveal() {
  return new ScrollReveal('.scroll-reveal-text', {
    baseOpacity: 0,
    enableBlur: true,
    blurStrength: 10,
    baseRotation: 5,
    threshold: 0.2,
    once: true
  });
}
