/**
 * Lightbox Modal Component
 */
import { qs } from '../utils/dom.js';

export function openLightbox(src, caption) {
  const modal   = qs('#lightbox-modal');
  const imgEl   = qs('#lightbox-img');
  const capEl   = qs('#lightbox-caption');
  if (!modal || !imgEl) return;

  imgEl.src = src;
  imgEl.alt = caption || 'Documentation Preview';
  if (capEl) capEl.textContent = caption || '';

  modal.style.display = 'flex';
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

export function closeLightbox() {
  const modal = qs('#lightbox-modal');
  if (!modal) return;
  modal.style.display = 'none';
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

export function initLightbox() {
  const modal = qs('#lightbox-modal');
  const closeBtn = qs('#lightbox-close');
  if (!modal) return;

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeLightbox();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display !== 'none') {
      closeLightbox();
    }
  });
}

export function initGalleryListeners() {
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.doc-thumb-btn');
    if (!btn) return;
    const src = btn.getAttribute('data-img-src');
    const cap = btn.getAttribute('data-caption');
    if (src) openLightbox(src, cap);
  });
}
