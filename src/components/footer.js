/**
 * Footer & Real-Time Local Clock Component
 */
import { qs } from '../utils/dom.js';

export function renderFooter(year) {
  const copy = qs('#footer-copy');
  if (copy) copy.textContent = `© ${year} · All rights reserved`;
}

export function initLiveClock() {
  const clockEl = qs('#footer-live-time');
  if (!clockEl) return;

  function update() {
    const now = new Date();
    const timeStr = now.toLocaleTimeString('en-US', {
      timeZone: 'Asia/Jakarta',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    });
    clockEl.textContent = `Malang, ID · ${timeStr} WIB`;
  }

  update();
  setInterval(update, 1000);
}
