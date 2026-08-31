/**
 * Navbar Component with Bilingual Support & Active Section Highlighting
 */
import { qs, qsa, esc } from '../utils/dom.js';

/**
 * Update the active navigation link based on current scroll position
 */
export function updateActiveNav() {
  const sections = qsa('section[id]');
  const navLinks = qsa('.nav-item');
  if (!sections.length || !navLinks.length) return;

  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;
  const docHeight = document.documentElement.scrollHeight;

  // If user has scrolled close to the bottom of the page, activate the last section (#contact)
  if (windowHeight + scrollY >= docHeight - 80) {
    const lastSection = sections[sections.length - 1];
    const lastId = lastSection ? lastSection.getAttribute('id') : '';
    navLinks.forEach((l) => {
      l.classList.toggle('active', l.getAttribute('href') === `#${lastId}`);
    });
    return;
  }

  let currentId = '';
  // Find which section is currently active in the viewport
  sections.forEach((sec) => {
    const top = sec.offsetTop - 140;
    const height = sec.offsetHeight;
    if (scrollY >= top && scrollY < top + height) {
      currentId = sec.getAttribute('id');
    }
  });

  // Fallback to first section (about) if at the top of the page
  if (!currentId && sections[0]) {
    currentId = sections[0].getAttribute('id');
  }

  if (currentId) {
    navLinks.forEach((l) => {
      l.classList.toggle('active', l.getAttribute('href') === `#${currentId}`);
    });
  }
}

export function renderNavbar(name, navItems) {
  const logo = qs('#nav-logo');
  if (logo) logo.textContent = name;

  const desktopNav = qs('#nav-desktop');
  if (desktopNav && navItems) {
    desktopNav.innerHTML = navItems.map(
      (l) => `<a href="${esc(l.href)}" class="nav-item">${esc(l.label)}</a>`
    ).join('');
  }

  const mobileNav = qs('#nav-mobile');
  if (mobileNav && navItems) {
    mobileNav.innerHTML = navItems.map(
      (l) => `<a href="${esc(l.href)}" class="nav-item">${esc(l.label)}</a>`
    ).join('');
  }

  // Update active state immediately after DOM elements are created
  updateActiveNav();
}

export function initNavbar() {
  const navbar = qs('#navbar');

  const onScroll = () => {
    if (navbar) {
      navbar.style.borderBottomColor = window.scrollY > 10 ? 'var(--border)' : 'transparent';
    }
    updateActiveNav();
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', updateActiveNav, { passive: true });
  window.addEventListener('hashchange', updateActiveNav, { passive: true });

  // Initial calculation on load
  updateActiveNav();
}

export function initMobileMenu() {
  const btn   = qs('#hamburger-btn');
  const menu  = qs('#mobile-menu');
  const links = qsa('#nav-mobile a');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    const open = menu.style.display !== 'none';
    menu.style.display = open ? 'none' : 'block';
    btn.classList.toggle('open', !open);
    btn.setAttribute('aria-expanded', String(!open));
  });

  links.forEach((l) => l.addEventListener('click', () => {
    menu.style.display = 'none';
    btn.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  }));
}

