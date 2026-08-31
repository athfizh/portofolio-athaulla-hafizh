/**
 * Internationalization (i18n) State Manager
 */
import { qs } from './dom.js';
import { showToast } from './clipboard.js';

let currentLang = localStorage.getItem('portfolio_lang') || 'en';
const listeners = [];

export function getLang() {
  return currentLang;
}

export function setLang(lang, showFeedback = true) {
  if (lang !== 'en' && lang !== 'id') lang = 'en';
  currentLang = lang;
  localStorage.setItem('portfolio_lang', lang);
  document.documentElement.setAttribute('lang', lang);

  updateLangButtonUI();

  // Notify all subscriber components to re-render
  listeners.forEach((fn) => fn(currentLang));

  if (showFeedback) {
    showToast(
      lang === 'id' ? 'Bahasa diubah ke Bahasa Indonesia' : 'Language switched to English',
      '🌐'
    );
  }
}

export function onLangChange(fn) {
  listeners.push(fn);
}

export function initLangToggle() {
  const btn = qs('#lang-toggle-btn');
  if (!btn) return;

  updateLangButtonUI();

  btn.addEventListener('click', () => {
    const nextLang = currentLang === 'en' ? 'id' : 'en';
    setLang(nextLang, true);
  });
}

function updateLangButtonUI() {
  const btn = qs('#lang-toggle-btn');
  if (!btn) return;

  btn.innerHTML = `
    <span style="font-weight:${currentLang === 'en' ? '700' : '400'};color:${currentLang === 'en' ? 'var(--charcoal)' : 'var(--muted)'};">EN</span>
    <span style="color:var(--border);font-size:0.6875rem;">/</span>
    <span style="font-weight:${currentLang === 'id' ? '700' : '400'};color:${currentLang === 'id' ? 'var(--charcoal)' : 'var(--muted)'};">ID</span>
  `;
}
