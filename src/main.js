/**
 * Application Entry Point & Module Orchestrator with Bilingual Support
 */
import './style.css';
import { portfolioData } from './data/portfolioData.js';

// Components (View Layer)
import { renderNavbar, initNavbar, initMobileMenu } from './components/navbar.js';
import { renderAbout } from './components/about.js';
import { renderExperience } from './components/experience.js';
import { renderAwards } from './components/awards.js';
import { renderProjects } from './components/projects.js';
import { renderSkills } from './components/skills.js';
import { renderContact } from './components/contact.js';
import { renderFooter } from './components/footer.js';
import { initLightbox, initGalleryListeners } from './components/lightbox.js';
import { initCommandPalette } from './components/commandPalette.js';
import { initPreloader } from './components/preloader.js';

// Utilities & Controllers
import { initCopyListeners } from './utils/clipboard.js';
import { initThemeToggle } from './utils/theme.js';
import { initLangToggle, getLang, onLangChange } from './utils/i18n.js';
import { initBackToTop, initScrollReveal } from './utils/scroll.js';
import { initCursor } from './utils/cursor.js';

/**
 * Render all views with active language
 */
function renderAll(lang = getLang()) {
  const { profile, ui, about, experiences, awards, projects, capabilities, certifications, footer } = portfolioData;

  const navItems = ui[lang]?.nav || ui.en.nav;

  renderNavbar(profile.name, navItems);
  renderAbout({ profile, about, ui, lang });
  renderExperience(experiences, ui, lang);
  renderAwards(awards, ui, lang);
  renderProjects(projects, ui, lang);
  renderSkills(capabilities, certifications, ui, lang);
  renderContact(profile, ui, lang);
  renderFooter(footer.year, ui, lang);

  // Re-attach dynamic element listeners for lightbox and copy buttons
  initGalleryListeners();
  initCopyListeners(profile.email);
}

/**
 * Bootstrap the entire Portfolio Web App
 */
function bootstrap() {
  const { profile } = portfolioData;
  const initialLang = getLang();

  // 1. Initial Render
  renderAll(initialLang);

  // 2. Initialize Controllers
  initPreloader();
  initNavbar();
  initMobileMenu();
  initBackToTop();
  initLightbox();
  initThemeToggle();
  initLangToggle();
  initCommandPalette(portfolioData);

  // 3. Subscribe to Language Change
  onLangChange((newLang) => {
    renderAll(newLang);
  });

  // 4. Initialize Visual Enhancements
  requestAnimationFrame(() => {
    initCursor();
    setTimeout(initScrollReveal, 60);
  });
}

// Ensure execution after DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootstrap);
} else {
  bootstrap();
}
