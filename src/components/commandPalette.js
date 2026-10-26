/**
 * Command Palette Modal Component with Bilingual Support
 */
import { qs, qsa, esc } from '../utils/dom.js';
import { copyToClipboard } from '../utils/clipboard.js';
import { toggleTheme } from '../utils/theme.js';
import { getLang, setLang } from '../utils/i18n.js';

export function initCommandPalette(portfolioData) {
  const backdrop = qs('#cmd-backdrop');
  const input    = qs('#cmd-input');
  const list     = qs('#cmd-list');
  const trigger  = qs('#cmd-trigger-btn');

  if (!backdrop || !input || !list) return;

  function buildActions() {
    const lang = getLang();
    const isId = lang === 'id';

    return [
      // Sections
      { label: isId ? 'Tentang (Profil & Filosofi)' : 'Go to: About', badge: isId ? 'Navigasi' : 'Section', action: () => scrollTo('#about') },
      { label: isId ? 'Pengalaman & Organisasi' : 'Go to: Experience', badge: isId ? 'Navigasi' : 'Section', action: () => scrollTo('#experience') },
      { label: isId ? 'Prestasi & Penghargaan' : 'Go to: Awards', badge: isId ? 'Navigasi' : 'Section', action: () => scrollTo('#awards') },
      { label: isId ? 'Proyek Terpilih' : 'Go to: Projects', badge: isId ? 'Navigasi' : 'Section', action: () => scrollTo('#projects') },
      { label: isId ? 'Keahlian & Sertifikasi' : 'Go to: Skills', badge: isId ? 'Navigasi' : 'Section', action: () => scrollTo('#skills') },
      { label: isId ? 'Kontak & Kolaborasi' : 'Go to: Contact', badge: isId ? 'Navigasi' : 'Section', action: () => scrollTo('#contact') },

      // Quick Actions
      { label: isId ? 'Ganti Bahasa (English / Indonesia)' : 'Switch Language (EN / ID)', badge: isId ? 'Bahasa' : 'Language', action: () => setLang(getLang() === 'en' ? 'id' : 'en', true) },
      { label: isId ? 'Ubah Mode Tema Gelap / Terang' : 'Toggle Dark / Light Mode', badge: isId ? 'Tema' : 'Theme', action: () => toggleTheme() },
      { label: isId ? 'Salin Alamat Email' : 'Copy Email Address', badge: 'Email', action: () => copyToClipboard(portfolioData.profile.email) },
      { label: isId ? 'Unduh CV / Resume' : 'Download CV / Resume', badge: isId ? 'Tautan' : 'Link', action: () => window.open(portfolioData.profile.resume, '_blank') },
      { label: isId ? 'Kunjungi Profil LinkedIn' : 'Open LinkedIn Profile', badge: isId ? 'Sosial' : 'Social', action: () => window.open(portfolioData.profile.social.linkedin, '_blank') },
      { label: isId ? 'Kunjungi Profil GitHub' : 'Open GitHub Profile', badge: isId ? 'Sosial' : 'Social', action: () => window.open(portfolioData.profile.social.github, '_blank') },
      { label: isId ? 'Cetak Halaman (PDF Resume)' : 'Print / Save as PDF Resume', badge: isId ? 'Cetak' : 'Print', action: () => window.print() },
    ];
  }

  function scrollTo(selector) {
    const el = qs(selector);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  let lastActiveElement = null;
  let activeIndex = 0;
  let currentFiltered = [];

  function updateActiveHighlight() {
    const items = qsa('.cmd-item', list);
    items.forEach((el, i) => {
      const isActive = i === activeIndex;
      el.classList.toggle('active', isActive);
      el.setAttribute('aria-selected', String(isActive));
      if (isActive) {
        el.scrollIntoView({ block: 'nearest' });
      }
    });
  }

  function renderList(query = '') {
    const actions = buildActions();
    const q = query.toLowerCase().trim();
    currentFiltered = actions.filter((a) => a.label.toLowerCase().includes(q) || a.badge.toLowerCase().includes(q));
    activeIndex = 0;

    if (currentFiltered.length === 0) {
      list.innerHTML = `<div style="padding:1.5rem;text-align:center;color:var(--muted);font-size:0.8125rem;">${getLang() === 'id' ? 'Perintah tidak ditemukan.' : 'No matching commands found.'}</div>`;
      return;
    }

    list.innerHTML = currentFiltered.map((item, i) => `
      <div class="cmd-item ${i === 0 ? 'active' : ''}" role="option" aria-selected="${i === 0}" data-index="${i}">
        <div class="cmd-item-left">
          <span>${esc(item.label)}</span>
        </div>
        <span class="cmd-badge">${esc(item.badge)}</span>
      </div>
    `).join('');

    qsa('.cmd-item', list).forEach((el, i) => {
      el.addEventListener('mouseenter', () => {
        activeIndex = i;
        updateActiveHighlight();
      });
      el.addEventListener('click', () => {
        if (currentFiltered[i]) {
          currentFiltered[i].action();
          closeModal();
        }
      });
    });
  }

  function openModal() {
    lastActiveElement = document.activeElement;
    backdrop.classList.add('open');
    backdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    const currentLang = getLang();
    const placeholder = portfolioData.ui[currentLang]?.actions?.cmdPlaceholder || 'Type a command or search section...';
    input.placeholder = placeholder;
    input.value = '';
    renderList();
    setTimeout(() => input.focus(), 50);
  }

  function closeModal() {
    backdrop.classList.remove('open');
    backdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    if (lastActiveElement && typeof lastActiveElement.focus === 'function') {
      lastActiveElement.focus();
      lastActiveElement = null;
    }
  }

  // Keyboard Navigation
  window.addEventListener('keydown', (e) => {
    const isOpen = backdrop.classList.contains('open');

    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      if (isOpen) closeModal();
      else openModal();
      return;
    }

    if (!isOpen) return;

    if (e.key === 'Escape') {
      e.preventDefault();
      closeModal();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (currentFiltered.length > 0) {
        activeIndex = (activeIndex + 1) % currentFiltered.length;
        updateActiveHighlight();
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (currentFiltered.length > 0) {
        activeIndex = (activeIndex - 1 + currentFiltered.length) % currentFiltered.length;
        updateActiveHighlight();
      }
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (currentFiltered[activeIndex]) {
        currentFiltered[activeIndex].action();
        closeModal();
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      input.focus();
    }
  });

  if (trigger) trigger.addEventListener('click', openModal);

  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) closeModal();
  });

  input.addEventListener('input', () => renderList(input.value));
}
