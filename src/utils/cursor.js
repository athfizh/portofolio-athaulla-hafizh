/**
 * Custom Interactive Cursor (Desktop only)
 */
import { qs, qsa } from './dom.js';

export function initCursor() {
  if (window.matchMedia('(pointer: coarse)').matches) {
    [qs('#cursor-dot'), qs('#cursor-ring')].forEach((el) => {
      if (el) el.style.display = 'none';
    });
    return;
  }

  const dot = qs('#cursor-dot');
  const ring = qs('#cursor-ring');
  if (!dot || !ring) return;

  let mx = -100, my = -100, rx = -100, ry = -100;

  document.addEventListener('mousemove', (e) => {
    mx = e.clientX;
    my = e.clientY;
    dot.style.left = `${mx}px`;
    dot.style.top = `${my}px`;
  });

  (function loop() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = `${rx}px`;
    ring.style.top = `${ry}px`;
    requestAnimationFrame(loop);
  })();

  qsa('a, button, .cmd-item').forEach((el) => {
    el.addEventListener('mouseenter', () => {
      dot.classList.add('hovered');
      ring.classList.add('hovered');
    });
    el.addEventListener('mouseleave', () => {
      dot.classList.remove('hovered');
      ring.classList.remove('hovered');
    });
  });
}
