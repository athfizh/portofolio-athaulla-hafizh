/**
 * Footer Component with Real-time Clock (WIB) and Bilingual Support
 */
import { qs } from '../utils/dom.js';

let clockInterval = null;

export function renderFooter(year, ui, lang) {
  const uLang = ui[lang] || ui.en;
  const pLang = lang === 'id' ? 'Teknik Informatika · Polinema' : 'Informatics Engineering · Polinema';

  const subEl = qs('#footer-subtext');
  if (subEl) subEl.textContent = pLang;

  const rightEl = qs('#footer-right-text');
  if (rightEl) rightEl.textContent = `© ${year} · ${uLang.actions.allRights}`;

  // Start Real-Time Live Clock (Malang, Indonesia - WIB / UTC+7)
  const timeEl = qs('#footer-live-time');
  if (!timeEl) return;

  function updateClock() {
    try {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Jakarta',
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      };
      const timeString = new Intl.DateTimeFormat('en-US', options).format(now);
      timeEl.textContent = `Malang, ID · ${timeString} WIB`;
    } catch {
      timeEl.textContent = 'Malang, ID · WIB';
    }
  }

  if (clockInterval) clearInterval(clockInterval);
  updateClock();
  clockInterval = setInterval(updateClock, 1000);
}
