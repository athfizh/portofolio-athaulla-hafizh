/**
 * Navbar Component
 */
import { qs, qsa, esc } from '../utils/dom.js';

export const NAV_LINKS = [
  { label: 'About',      href: '#about'      },
  { label: 'Experience', href: '#experience' },
  { label: 'Awards',     href: '#awards'     },
  { label: 'Work',       href: '#projects'   },
  { label: 'Skills',     href: '#skills'     },
  { label: 'Contact',    href: '#contact'    },
];

export function renderNavbar(name) {
  const logo = qs('#nav-logo');
  if (logo) logo.textContent = name;

  const desktopNav = qs('#nav-desktop');
  if (desktopNav) {
    desktopNav.innerHTML = NAV_LINKS.map(
      (l) => `<a href="${esc(l.href)}" class="nav-item">${esc(l.label)}</a>`
    ).join('');
  }

  const mobileNav = qs('#nav-mobile');
  if (mobileNav) {
    mobileNav.innerHTML = NAV_LINKS.map(
      (l) => `<a href="${esc(l.href)}" class="nav-item" style="padding:0.625rem 0;display:block;">${esc(l.label)}</a>`
    ).join('');
  }
}

export function initNavbar() {
  const navbar = qs('#navbar');
  window.addEventListener('scroll', () => {
    if (!navbar) return;
    navbar.style.borderBottomColor = window.scrollY > 10 ? 'var(--border)' : 'transparent';
  }, { passive: true });

  const sections = qsa('section[id]');
  const navLinks  = qsa('.nav-item');
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        navLinks.forEach((l) => {
          l.classList.toggle('active', l.getAttribute('href') === `#${e.target.id}`);
        });
      }
    });
  }, { threshold: 0.3 });
  sections.forEach((s) => io.observe(s));
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
