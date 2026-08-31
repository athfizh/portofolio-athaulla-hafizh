/**
 * Selected Projects Component with Bilingual Support
 */
import { qs, esc, ARROW } from '../utils/dom.js';
import { resolveAsset } from '../utils/assets.js';

export function renderProjects(projects, ui, lang) {
  const labelEl = qs('#projects-label');
  if (labelEl && ui[lang]?.sections?.projectsLabel) {
    labelEl.textContent = ui[lang].sections.projectsLabel;
  }

  const titleEl = qs('#projects-title');
  if (titleEl && ui[lang]?.sections?.projectsTitle) {
    titleEl.textContent = ui[lang].sections.projectsTitle;
  }

  const list = qs('#projects-list');
  if (!list) return;

  const uLang = ui[lang] || ui.en;

  list.innerHTML = projects.map((p) => {
    const data = lang === 'id' ? p.idLang : p.en;
    const status = p.status[lang] || p.status.en;
    const hasImages = p.images && p.images.length > 0;

    return `
    <div class="project-card">

      <!-- Col 1: Index Number -->
      <div class="project-index">
        ${esc(p.id)}
      </div>

      <!-- Col 2: Content Body -->
      <div>
        <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:0.35rem;flex-wrap:wrap;">
          <h3 style="font-family:'DM Serif Display',serif;font-size:clamp(1.25rem,2.5vw,1.625rem);
                     color:var(--charcoal);line-height:1.2;">
            ${esc(p.title)}
          </h3>
          <span style="font-size:0.75rem;color:var(--muted);">${esc(p.year)}</span>
          <span style="font-size:0.6875rem;padding:2px 8px;border-radius:999px;
                       background:var(--cream);border:1px solid var(--border);color:var(--ink);">
            ${esc(status)}
          </span>
        </div>

        <p style="font-size:0.8125rem;color:var(--muted);margin-bottom:0.75rem;">${esc(data.subtitle)}</p>
        <p style="font-size:0.875rem;color:var(--ink);line-height:1.7;margin-bottom:1.25rem;">
          ${esc(data.description)}
        </p>

        <!-- Tech tags -->
        <div style="display:flex;flex-wrap:wrap;gap:0.4rem;">
          ${p.tech.map((t) => `<span class="tag-badge">${esc(t)}</span>`).join('')}
        </div>
      </div>

      <!-- Col 3: Right Column with Preview Thumbnail & Dual Action Links -->
      <div class="project-right-col">
        ${hasImages ? `
          <div style="display:flex;flex-direction:column;gap:0.5rem;align-items:flex-end;">
            ${p.images.map((img) => {
              const url = resolveAsset(img.src);
              const caption = img.caption[lang] || img.caption.en || `${p.title} · ${data.subtitle}`;
              return `
                <button type="button" class="doc-thumb-btn"
                        data-img-src="${esc(url)}" data-caption="${esc(caption)}"
                        style="border:1px solid var(--border);border-radius:6px;overflow:hidden;
                               width:130px;height:82px;padding:0;background:var(--cream);cursor:pointer;
                               position:relative;box-shadow:0 2px 6px rgba(0,0,0,0.04);
                               transition:transform 0.2s,box-shadow 0.2s,border-color 0.2s;"
                        onmouseover="this.style.transform='scale(1.03)';this.style.borderColor='var(--charcoal)';"
                        onmouseout="this.style.transform='scale(1)';this.style.borderColor='var(--border)';"
                        title="Click to preview: ${esc(caption)}">
                  <img src="${esc(url)}" alt="${esc(p.title)}" style="width:100%;height:100%;object-fit:cover;display:block;" loading="lazy" />
                  <span style="position:absolute;bottom:3px;right:3px;background:rgba(0,0,0,0.65);color:#fff;
                               font-size:0.625rem;padding:1px 4px;border-radius:3px;backdrop-filter:blur(2px);">
                    ${esc(uLang.actions.preview)}
                  </span>
                </button>
              `;
            }).join('')}
          </div>` : ''}

        ${(p.live || p.github) ? `
          <div style="display:flex;gap:0.75rem;align-items:center;flex-wrap:wrap;">
            ${p.live ? `<a href="${esc(p.live)}" target="_blank" rel="noopener noreferrer" class="link-underline" style="font-size:0.75rem;white-space:nowrap;">${esc(uLang.actions.viewLive)} ${ARROW}</a>` : ''}
            ${p.github ? `<a href="${esc(p.github)}" target="_blank" rel="noopener noreferrer" class="link-underline" style="font-size:0.75rem;white-space:nowrap;">${esc(uLang.actions.viewCode)} ${ARROW}</a>` : ''}
          </div>` : ''}
      </div>
    </div>`;
  }).join('');
}
