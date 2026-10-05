/**
 * JapaneseLoader — Cinematic Japanese Character Decryption Transition.
 * Runs high-speed character cipher transitions before revealing the portfolio.
 */

const CIPHER_GLYPHS = [
  'ア', 'イ', 'ウ', 'エ', 'オ', 'カ', 'キ', 'ク', 'ケ', 'コ',
  'サ', 'シ', 'ス', 'セ', 'ソ', 'タ', 'チ', 'ツ', 'テ', 'ト',
  'ナ', 'ニ', 'ヌ', 'ネ', 'ノ', 'ハ', 'ヒ', 'フ', 'ヘ', 'ホ',
  'マ', 'ミ', 'ム', 'メ', 'モ', 'ヤ', 'ユ', 'ヨ', 'ラ', 'リ',
  'ル', 'レ', 'ロ', 'ワ', 'ン', '変', '化', '文', '字', '進',
  '行', '読', '込', '完', '了', '写', '輪', '眼', '天', '照',
  '7', 'X', '9', 'K', 'A', '3', '4', '8'
];

const RESOLVED_GLYPHS = ['読', 'み', '込', 'み', '完', '了'];

export class JapaneseLoader {
  constructor(options = {}) {
    this.container = null;
    this.duration = options.duration || 2150;
    this.onComplete = options.onComplete || null;
    this.intervalId = null;
    this.isCompleted = false;

    this.initDOM();
  }

  initDOM() {
    this.container = document.getElementById('jpLoader');
    if (!this.container) {
      this.container = document.createElement('div');
      this.container.id = 'jpLoader';
      this.container.className = 'jp-loader';
      this.container.setAttribute('aria-hidden', 'true');
      this.container.innerHTML = `
        <div class="jp-loader-ambient"></div>
        <div class="jp-loader-content">
          <div class="jp-loader-badge">SYSTEM GATEWAY // <span>DIGITAL IDENTITY</span></div>
          <div class="jp-loader-matrix" id="jpMatrix">
            ${RESOLVED_GLYPHS.map(() => `
              <div class="jp-char-box">
                <span class="jp-char">?</span>
              </div>
            `).join('')}
          </div>
          <div class="jp-loader-status" id="jpStatus">
            <span class="jp-status-dot"></span>
            <span class="jp-status-text">INITIALIZING CINEMATIC ENVIRONMENT</span>
          </div>
          <div class="jp-loader-progress">
            <div class="jp-loader-progress-bar" id="jpProgressBar"></div>
          </div>
        </div>
      `;
      document.body.appendChild(this.container);
    }

    this.charBoxes = [...this.container.querySelectorAll('.jp-char-box')];
    this.charEls = [...this.container.querySelectorAll('.jp-char')];
    this.statusTextEl = this.container.querySelector('.jp-status-text');
    this.progressBarEl = this.container.querySelector('#jpProgressBar');
  }

  start(onComplete) {
    if (onComplete) this.onComplete = onComplete;
    if (!this.container) return;

    this.isCompleted = false;
    this.container.classList.remove('is-hidden', 'is-exiting');
    this.container.classList.add('is-active');

    // Reset slots
    this.charBoxes.forEach(box => box.classList.remove('is-resolved'));
    this.charEls.forEach(char => { char.textContent = this.getRandomGlyph(); });
    if (this.progressBarEl) this.progressBarEl.style.width = '0%';
    if (this.statusTextEl) this.statusTextEl.textContent = 'PORTFOLIO SYSTEM // INITIALIZING';

    const startTime = performance.now();
    const totalSlots = RESOLVED_GLYPHS.length;
    const resolvedSlots = new Set();

    // High frequency decryption loop (~38ms)
    this.intervalId = setInterval(() => {
      const elapsed = performance.now() - startTime;
      const progress = Math.min(1, elapsed / (this.duration - 350));

      if (this.progressBarEl) {
        this.progressBarEl.style.width = `${(progress * 100).toFixed(1)}%`;
      }

      // Phase 1: Rapid cycling (0 - 1200ms)
      // Phase 2: Staggered locking from left to right (1200ms - 1750ms)
      const lockStartTime = 1150;
      const lockDuration = 600;

      for (let i = 0; i < totalSlots; i++) {
        const slotLockTime = lockStartTime + (i / totalSlots) * lockDuration;
        if (elapsed >= slotLockTime) {
          if (!resolvedSlots.has(i)) {
            resolvedSlots.add(i);
            this.charEls[i].textContent = RESOLVED_GLYPHS[i];
            this.charBoxes[i].classList.add('is-resolved');
          }
        } else {
          // Rapid random cipher character
          this.charEls[i].textContent = this.getRandomGlyph();
        }
      }

      // Update status text
      if (elapsed > 1150 && elapsed < 1750 && this.statusTextEl) {
        this.statusTextEl.textContent = 'RESOLVING CORE ARCHITECTURE';
      } else if (elapsed >= 1750 && this.statusTextEl) {
        this.statusTextEl.textContent = 'SYSTEM // READY';
      }

      // Phase 3: All characters locked, trigger smooth exit
      if (elapsed >= this.duration - 350 && !this.isCompleted) {
        this.isCompleted = true;
        clearInterval(this.intervalId);
        this.intervalId = null;

        // Ensure all slots are locked to final glyphs
        for (let i = 0; i < totalSlots; i++) {
          this.charEls[i].textContent = RESOLVED_GLYPHS[i];
          this.charBoxes[i].classList.add('is-resolved');
        }
        if (this.progressBarEl) this.progressBarEl.style.width = '100%';

        // Begin smooth exit fade & blur
        setTimeout(() => {
          this.container.classList.add('is-exiting');

          // Reveal portfolio at 250ms into exit fade
          setTimeout(() => {
            this.container.classList.remove('is-active');
            this.container.classList.add('is-hidden');

            if (typeof this.onComplete === 'function') {
              this.onComplete();
            }
          }, 450);
        }, 200);
      }
    }, 38);
  }

  getRandomGlyph() {
    return CIPHER_GLYPHS[Math.floor(Math.random() * CIPHER_GLYPHS.length)];
  }

  destroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
}
