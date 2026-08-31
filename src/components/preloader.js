/**
 * Editorial Monogram & Counter Preloader Component (Concept 1)
 */
import { qs } from '../utils/dom.js';

export function initPreloader() {
  const preloader = qs('#preloader');
  const counterEl = qs('#preloader-counter');
  const barEl     = qs('#preloader-bar');
  const contentEl = qs('#preloader-content');

  if (!preloader || !counterEl || !barEl) return;

  // Prevent background scrolling while loading
  document.body.style.overflow = 'hidden';

  let current = 0;
  const target = 100;
  const startTime = performance.now();
  const duration = 1100; // ~1.1s total counter animation

  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  function update(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeOutCubic(progress);

    current = Math.floor(easedProgress * target);
    counterEl.textContent = `${String(current).padStart(2, '0')}%`;
    barEl.style.width = `${easedProgress * 100}%`;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      counterEl.textContent = '100%';
      barEl.style.width = '100%';

      // Hold briefly at 100% for impact, then reveal
      setTimeout(() => {
        if (contentEl) {
          contentEl.style.opacity = '0';
          contentEl.style.transform = 'translateY(-16px)';
          contentEl.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        }

        setTimeout(() => {
          preloader.classList.add('curtain-up');

          // Restore normal document scrolling
          document.body.style.overflow = '';

          // Cleanup after curtain animation ends
          setTimeout(() => {
            preloader.style.display = 'none';
            preloader.remove();
          }, 900);
        }, 120);
      }, 140);
    }
  }

  requestAnimationFrame(update);
}
