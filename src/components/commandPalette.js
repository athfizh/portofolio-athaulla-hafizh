/**
 * Command Palette (Ctrl+K / Cmd+K) Component
 */
import { qs, esc } from '../utils/dom.js';
import { copyToClipboard } from '../utils/clipboard.js';

export function initCommandPalette(portfolioData) {
  const backdrop = qs('#cmd-backdrop');
  const triggerBtn = qs('#cmd-trigger-btn');
  const input = qs('#cmd-input');
  const list = qs('#cmd-list');
  if (!backdrop || !input || !list) return;

  const actions = [
    { label: 'About & Profile', badge: 'Section', icon: '👤', action: () => scrollToId('about') },
    { label: 'Experience & Leadership', badge: 'Section', icon: '🏛️', action: () => scrollToId('experience') },
    { label: 'Honors & Awards', badge: 'Section', icon: '🏆', action: () => scrollToId('awards') },
    { label: 'Selected Projects', badge: 'Section', icon: '💻', action: () => scrollToId('projects') },
    { label: 'Capabilities & Certifications', badge: 'Section', icon: '⚡', action: () => scrollToId('skills') },
    { label: 'Contact & Collaboration', badge: 'Section', icon: '✉️', action: () => scrollToId('contact') },
    { label: `Copy Email (${portfolioData.profile.email})`, badge: 'Action', icon: '📋', action: () => copyToClipboard(portfolioData.profile.email, `Email copied: ${portfolioData.profile.email}`) },
    { label: 'View CV / Resume', badge: 'Link', icon: '📄', action: () => window.open(portfolioData.profile.resume, '_blank', 'noopener,noreferrer') },
    { label: 'Open GitHub Profile', badge: 'Link', icon: '🐙', action: () => window.open(portfolioData.profile.social.github, '_blank', 'noopener,noreferrer') },
    { label: 'Open LinkedIn Profile', badge: 'Link', icon: '🔗', action: () => window.open(portfolioData.profile.social.linkedin, '_blank', 'noopener,noreferrer') },
    { label: 'Toggle Dark / Light Mode', badge: 'Theme', icon: '🌓', action: () => qs('#theme-toggle-btn')?.click() },
  ];

  let selectedIdx = 0;
  let filtered = [...actions];

  function scrollToId(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  function renderItems() {
    if (filtered.length === 0) {
      list.innerHTML = `<div style="padding:1.5rem;text-align:center;color:var(--muted);font-size:0.8125rem;">No matching commands found.</div>`;
      return;
    }
    list.innerHTML = filtered.map((item, idx) => `
      <div class="cmd-item ${idx === selectedIdx ? 'active' : ''}" data-idx="${idx}">
        <div class="cmd-item-left">
          <span style="font-size:0.9375rem;">${item.icon}</span>
          <span style="font-weight:500;">${esc(item.label)}</span>
        </div>
        <span class="cmd-badge">${esc(item.badge)}</span>
      </div>
    `).join('');
  }

  function open() {
    backdrop.classList.add('open');
    input.value = '';
    filtered = [...actions];
    selectedIdx = 0;
    renderItems();
    setTimeout(() => input.focus(), 50);
  }

  function close() {
    backdrop.classList.remove('open');
  }

  if (triggerBtn) triggerBtn.addEventListener('click', open);

  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) close();
  });

  input.addEventListener('input', () => {
    const q = input.value.toLowerCase().trim();
    filtered = actions.filter((a) => a.label.toLowerCase().includes(q) || a.badge.toLowerCase().includes(q));
    selectedIdx = 0;
    renderItems();
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      selectedIdx = (selectedIdx + 1) % Math.max(1, filtered.length);
      renderItems();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      selectedIdx = (selectedIdx - 1 + filtered.length) % Math.max(1, filtered.length);
      renderItems();
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filtered[selectedIdx]) {
        filtered[selectedIdx].action();
        close();
      }
    } else if (e.key === 'Escape') {
      close();
    }
  });

  list.addEventListener('click', (e) => {
    const itemEl = e.target.closest('.cmd-item');
    if (!itemEl) return;
    const idx = parseInt(itemEl.getAttribute('data-idx'), 10);
    if (filtered[idx]) {
      filtered[idx].action();
      close();
    }
  });

  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      backdrop.classList.contains('open') ? close() : open();
    } else if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
      e.preventDefault();
      open();
    } else if (e.key === 'Escape' && backdrop.classList.contains('open')) {
      close();
    }
  });
}
