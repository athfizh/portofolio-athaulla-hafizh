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

  function renderList(query = '') {
    const actions = buildActions();
    const q = query.toLowerCase().trim();
    const filtered = actions.filter((a) => a.label.toLowerCase().includes(q) || a.badge.toLowerCase().includes(q));

    if (filtered.length === 0) {
      list.innerHTML = `<div style="padding:1.5rem;text-align:center;color:var(--muted);font-size:0.8125rem;">${getLang() === 'id' ? 'Perintah tidak ditemukan.' : 'No matching commands found.'}</div>`;
      return;
    }

    list.innerHTML = filtered.map((item, i) => `
      <div class="cmd-item ${i === 0 ? 'active' : ''}" data-index="${i}">
        <div class="cmd-item-left">
          <span>${esc(item.label)}</span>
        </div>
        <span class="cmd-badge">${esc(item.badge)}</span>
      </div>
    `).join('');

    qsa('.cmd-item', list).forEach((el, i) => {
      el.addEventListener('click', () => {
        filtered[i].action();
        closeModal();
      });
    });
  }

  function openModal() {
    backdrop.classList.add('open');
    input.value = '';
    renderList();
    setTimeout(() => input.focus(), 50);
  }

  function closeModal() {
    backdrop.classList.remove('open');
  }

  // Keyboard Navigation
  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      if (backdrop.classList.contains('open')) closeModal();
      else openModal();
    } else if (e.key === 'Escape' && backdrop.classList.contains('open')) {
      closeModal();
    }
  });

  if (trigger) trigger.addEventListener('click', openModal);

  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) closeModal();
  });

  input.addEventListener('input', () => renderList(input.value));
}
