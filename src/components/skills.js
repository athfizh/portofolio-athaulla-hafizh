/**
 * Capabilities & Certifications Component
 */
import { qs, esc, ARROW } from '../utils/dom.js';

export function renderSkills(capabilities, certifications) {
  // Capabilities Grid
  const capGrid = qs('#capabilities-grid');
  if (capGrid) {
    capGrid.innerHTML = capabilities.map((c, i) => `
      <div class="reveal reveal-delay-${Math.min(i + 1, 5)}">
        <p class="meta-tag" style="margin-bottom:0.75rem;">${esc(c.area.toUpperCase())}</p>
        <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:0.375rem;">
          ${c.items.map((item) => `
            <li style="font-size:0.875rem;color:var(--ink);display:flex;align-items:center;gap:0.5rem;">
              <span style="color:var(--muted);font-size:0.75rem;">&bull;</span>
              <span>${esc(item)}</span>
            </li>
          `).join('')}
        </ul>
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
