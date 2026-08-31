/**
 * Contact Component
 */
import { qs, esc, ARROW } from '../utils/dom.js';

export function renderContact(profile) {
  const { email, social, resume } = profile;

  const heading = qs('#contact-heading');
  if (heading) heading.textContent = "Let's build something together.";

  const tagline = qs('#contact-tagline');
  if (tagline) tagline.textContent = "Open for collaboration, internship, or technical discussions.";

  const links = qs('#contact-links');
  if (links) {
    const style = 'color:#FAF8F4;border-color:#555;font-size:0.9rem;';
    links.innerHTML = `
      <div style="display:inline-flex;align-items:center;gap:0.4rem;">
        <a href="mailto:${esc(email)}" class="link-underline"
           style="color:#FAF8F4;border-color:#FAF8F4;font-size:0.9rem;">
          ${esc(email)} ${ARROW}
        </a>
        <button type="button" class="btn-copy-email" data-email="${esc(email)}" title="Copy email address"
                style="background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);
                       border-radius:4px;color:#FAF8F4;cursor:pointer;padding:2px 6px;font-size:0.6875rem;">
          Copy
        </button>
      </div>
      <a href="${esc(social.linkedin)}" target="_blank" rel="noopener noreferrer"
         class="link-underline" style="${style}">LinkedIn ${ARROW}</a>
      <a href="${esc(social.github)}" target="_blank" rel="noopener noreferrer"
         class="link-underline" style="${style}">GitHub ${ARROW}</a>
      ${social.instagram ? `
      <a href="${esc(social.instagram)}" target="_blank" rel="noopener noreferrer"
         class="link-underline" style="${style}">Instagram ${ARROW}</a>` : ''}
      ${resume ? `
      <a href="${esc(resume)}" target="_blank" rel="noopener noreferrer"
         class="link-underline" style="${style}">CV/Resume ${ARROW}</a>` : ''}
    `;
  }
}
