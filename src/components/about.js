/**
 * About Component with Bilingual Support
 */
import { qs, esc, ARROW } from '../utils/dom.js';
import { resolveAsset } from '../utils/assets.js';

export function renderAbout({ profile, about, ui, lang }) {
  const pLang = profile[lang] || profile.en;
  const aLang = about[lang] || about.en;
  const uLang = ui[lang] || ui.en;

  const { name, photo, resume, social, email } = profile;
  const { role, availability } = pLang;
  const { bio, philosophyTranslation, currentFocus, education } = aLang;

  // Photo
  const photoImg = qs('#about-photo');
  if (photoImg) {
    photoImg.src = resolveAsset(photo);
    photoImg.alt = name;
  }

  // Content
  const content = qs('#about-content');
  if (!content) return;

  const socialLinks = [
    { label: 'LinkedIn',  href: social.linkedin,  external: true  },
    { label: 'GitHub',    href: social.github,    external: true  },
    { label: 'Instagram', href: social.instagram, external: true  },
  ].filter((l) => l.href);

  content.innerHTML = `
    <!-- Name, Role & Availability Badge -->
    <div>
      ${availability ? `
        <div style="display:inline-flex;align-items:center;gap:0.5rem;padding:0.25rem 0.625rem;
                    background:var(--badge-bg);border:1px solid var(--badge-border);border-radius:999px;margin-bottom:0.75rem;">
          <span style="width:7px;height:7px;border-radius:50%;background:var(--badge-text);display:inline-block;
                       box-shadow:0 0 0 2px rgba(46,125,50,0.2);"></span>
          <span style="font-size:0.6875rem;font-weight:600;color:var(--badge-text);letter-spacing:0.02em;">
            ${esc(availability)}
          </span>
        </div>` : ''}

      <h1 style="font-family:'DM Serif Display',serif;font-size:clamp(1.75rem,3.5vw,2.5rem);
                 color:var(--charcoal);letter-spacing:-0.025em;line-height:1.1;margin-bottom:0.4rem;">
        ${esc(name)}
      </h1>
      <p style="font-size:0.8125rem;color:var(--muted);margin-bottom:1.25rem;">${esc(role)}</p>

      <!-- Action Links, CV Button & Quick Copy Email -->
      <div style="display:flex;flex-wrap:wrap;align-items:center;gap:0.875rem;">
        ${resume ? `
          <a href="${esc(resume)}" target="_blank" rel="noopener noreferrer"
             style="display:inline-flex;align-items:center;gap:0.4rem;padding:0.4rem 0.875rem;
                    background:var(--charcoal);color:var(--paper);border-radius:5px;
                    font-size:0.75rem;font-weight:500;text-decoration:none;letter-spacing:0.02em;
                    transition:transform 0.2s,opacity 0.2s;"
             onmouseover="this.style.opacity='0.9'" onmouseout="this.style.opacity='1'">
            ${esc(uLang.actions.cv)} ${ARROW}
          </a>` : ''}

        ${socialLinks.map((l) => `
          <a href="${esc(l.href)}" ${l.external ? 'target="_blank" rel="noopener noreferrer"' : ''}
             class="link-underline" style="font-size:0.8125rem;">
            ${esc(l.label)} ${ARROW}
          </a>
        `).join('')}

        <button type="button" class="btn-copy-email link-underline" data-email="${esc(email)}"
                style="background:none;border:none;padding:0;font-size:0.8125rem;color:var(--charcoal);cursor:pointer;display:inline-flex;align-items:center;"
                title="Click to copy email address">
          ${esc(uLang.actions.copyEmail)} ${ARROW}
        </button>
      </div>
    </div>

    <!-- Divider -->
    <hr style="border:none;border-top:1px solid var(--border);margin:0;">

    <!-- Philosophy -->
    <div>
      <blockquote style="font-family:'DM Serif Display',serif;font-style:italic;
                         font-size:clamp(1.125rem,2vw,1.375rem);color:var(--charcoal);
                         line-height:1.25;margin-bottom:0.35rem;">
        &ldquo;${esc(about.philosophy)}&rdquo;
      </blockquote>
      <p style="font-size:0.75rem;color:var(--muted);">${esc(philosophyTranslation)}</p>
    </div>

    <!-- Bio paragraphs -->
    <div style="display:flex;flex-direction:column;gap:0.875rem;">
      ${bio.map((p) => `
        <p style="font-size:0.875rem;color:var(--ink);line-height:1.75;">${esc(p)}</p>
      `).join('')}
    </div>

    <!-- Divider -->
    <hr style="border:none;border-top:1px solid var(--border);margin:0;">

    <!-- 2-col mini-grid: Education + Currently -->
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;">
      <!-- Education -->
      <div>
        <p class="meta-tag" style="margin-bottom:0.5rem;">${lang === 'id' ? 'PENDIDIKAN' : 'EDUCATION'}</p>
        <p style="font-family:'DM Serif Display',serif;font-size:0.9375rem;color:var(--charcoal);line-height:1.2;margin-bottom:0.25rem;">
          ${esc(education.institution)}
        </p>
        <p style="font-size:0.8125rem;color:var(--ink);margin-bottom:0.2rem;">${esc(education.degree)}</p>
        <p style="font-size:0.75rem;color:var(--muted);">
          IPK / GPA ${esc(education.gpa)} &middot; ${esc(education.period)}
        </p>
      </div>

      <!-- Currently -->
      <div>
        <p class="meta-tag" style="margin-bottom:0.5rem;">${lang === 'id' ? 'FOKUS SAAT INI' : 'CURRENTLY'}</p>
        <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:0.35rem;">
          ${currentFocus.map((f) => `
            <li style="font-size:0.8125rem;color:var(--ink);display:flex;align-items:flex-start;gap:0.4rem;line-height:1.4;">
              <span style="color:var(--muted);line-height:1.3;flex-shrink:0;">&bull;</span>
              <span>${esc(f)}</span>
            </li>
          `).join('')}
        </ul>
      </div>
    </div>
  `;
}
