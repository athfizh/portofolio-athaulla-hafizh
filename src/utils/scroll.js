/**
 * Smooth Scroll and Reveal Effects
 */
import { qs, qsa } from './dom.js';

export function smoothScrollToTop(duration = 850) {
  const startPosition = window.pageYOffset || document.documentElement.scrollTop;
  if (startPosition === 0) return;

  let startTime = null;

  function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function step(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const ease = easeInOutCubic(progress);

    window.scrollTo(0, startPosition * (1 - ease));

    if (timeElapsed < duration) {
      window.requestAnimationFrame(step);
    }
  }

  window.requestAnimationFrame(step);
}

export function initBackToTop() {
  const btn = qs('#back-to-top');
  if (!btn) return;

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const isPastThreshold = window.scrollY > 350;
        btn.classList.toggle('visible', isPastThreshold);
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    smoothScrollToTop(850);
  });
}

export function initScrollReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

  qsa('.reveal').forEach((el) => io.observe(el));
}
