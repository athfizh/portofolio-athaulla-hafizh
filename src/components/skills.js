/**
 * Capabilities & Certifications Component
 */
import { qs, esc, ARROW } from '../utils/dom.js';

export function renderSkills(capabilities, certifications) {
  // Capabilities List
  const capList = qs('#capabilities-list');
  if (capList) {
    capList.innerHTML = capabilities.map((c, i) => `
      <div class="capability-group" style="margin-bottom:1.5rem;">
        <p style="font-family:'DM Serif Display',serif;font-size:1.0625rem;color:var(--charcoal);margin-bottom:0.75rem;">
          ${esc(c.area)}
        </p>
        <div style="display:flex;flex-wrap:wrap;gap:0.5rem;">
          ${c.items.map((item) => `
            <span class="tag-badge">${esc(item)}</span>
          `).join('')}
        </div>
      </div>
    `).join('');
  }

  // Certifications List
  const certList = qs('#certifications-list');
  if (certList) {
    certList.innerHTML = certifications.map((cert) => `
      <div class="cert-row">
        <div>
          <p style="font-family:'DM Serif Display',serif;font-size:1.0625rem;color:var(--charcoal);line-height:1.2;margin-bottom:0.25rem;">
            ${esc(cert.title)}
          </p>
          <p style="font-size:0.8125rem;color:var(--muted);">
            ${esc(cert.issuer)} &middot; ${esc(cert.year)}
            ${cert.credentialId ? `&middot; <span style="font-family:monospace;font-size:0.75rem;">ID: ${esc(cert.credentialId)}</span>` : ''}
          </p>
        </div>

        ${cert.verify ? `
          <a href="${esc(cert.verify)}" target="_blank" rel="noopener noreferrer"
             class="link-underline"
             style="font-size:0.75rem;color:var(--charcoal);flex-shrink:0;white-space:nowrap;">
            Verify ${ARROW}
          </a>` : ''}
      </div>
    `).join('');
  }
}
