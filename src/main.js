/**
 * Application Entry Point & Module Orchestrator
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
import { renderFooter, initLiveClock } from './components/footer.js';
import { initLightbox, initGalleryListeners } from './components/lightbox.js';
import { initCommandPalette } from './components/commandPalette.js';

// Utilities & Controllers
import { initCopyListeners } from './utils/clipboard.js';
import { initThemeToggle } from './utils/theme.js';
import { initBackToTop, initScrollReveal } from './utils/scroll.js';
import { initCursor } from './utils/cursor.js';

/**
 * Bootstrap the entire Portfolio Web App
 */
function bootstrap() {
  const { profile, about, experiences, awards, projects, capabilities, certifications, footer } = portfolioData;

  // 1. Render all HTML Component Views
  renderNavbar(profile.name);
  renderAbout({ profile, about });
  renderExperience(experiences);
  renderAwards(awards);
  renderProjects(projects);
  renderSkills(capabilities, certifications);
  renderContact(profile);
  renderFooter(footer.year);

  // 2. Initialize Interactive Features & Event Controllers
  initNavbar();
  initMobileMenu();
  initBackToTop();
  initLightbox();
  initGalleryListeners();
  initLiveClock();
  initThemeToggle();
  initCommandPalette(portfolioData);
  initCopyListeners(profile.email);

  // 3. Initialize Visual Enhancements
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
