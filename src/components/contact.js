/**
 * Contact Component with Bilingual Support
 */
import { qs, esc, ARROW } from '../utils/dom.js';

export function renderContact(profile, ui, lang) {
  const { email, social, resume } = profile;
  const uLang = ui[lang] || ui.en;

  const heading = qs('#contact-heading');
  if (heading) heading.textContent = uLang.sections.contactHeading;

  const tagline = qs('#contact-tagline');
  if (tagline) tagline.textContent = uLang.sections.contactTagline;

  const links = qs('#contact-links');
  if (links) {
    links.innerHTML = `
      <div style="display:inline-flex;align-items:center;gap:0.5rem;flex-wrap:wrap;">
        <a href="mailto:${esc(email)}" class="link-underline"
           style="color:var(--contact-text);border-color:var(--contact-text);font-size:0.9rem;">
          ${esc(email)} ${ARROW}
        </a>
        <button type="button" class="btn-copy-email" data-email="${esc(email)}" title="Copy email address"
                style="background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.2);
                       border-radius:4px;color:var(--contact-text);cursor:pointer;padding:3px 8px;font-size:0.75rem;
                       transition:background 0.2s;">
          ${esc(uLang.actions.copyEmail)}
        </button>
      </div>
      <a href="${esc(social.linkedin)}" target="_blank" rel="noopener noreferrer"
         class="link-underline" style="color:var(--contact-text);border-color:#555;font-size:0.9rem;">LinkedIn ${ARROW}</a>
      <a href="${esc(social.github)}" target="_blank" rel="noopener noreferrer"
         class="link-underline" style="color:var(--contact-text);border-color:#555;font-size:0.9rem;">GitHub ${ARROW}</a>
      ${social.instagram ? `
      <a href="${esc(social.instagram)}" target="_blank" rel="noopener noreferrer"
         class="link-underline" style="color:var(--contact-text);border-color:#555;font-size:0.9rem;">Instagram ${ARROW}</a>` : ''}
      ${resume ? `
      <a href="${esc(resume)}" target="_blank" rel="noopener noreferrer"
         class="link-underline" style="color:var(--contact-text);border-color:#555;font-size:0.9rem;">${esc(uLang.actions.cv)} ${ARROW}</a>` : ''}
    `;
  }
}
