/**
 * Experience Component with Bilingual Support
 */
import { qs, esc } from '../utils/dom.js';
import { resolveAsset } from '../utils/assets.js';

export function renderExperience(experiences, ui, lang) {
  const labelEl = qs('#experience-label');
  if (labelEl && ui[lang]?.sections?.experienceLabel) {
    labelEl.textContent = ui[lang].sections.experienceLabel;
  }

  const titleEl = qs('#experience-title');
  if (titleEl && ui[lang]?.sections?.experienceTitle) {
    titleEl.textContent = ui[lang].sections.experienceTitle;
  }

  const list = qs('#experience-list');
  if (!list) return;

  const uLang = ui[lang] || ui.en;

  list.innerHTML = experiences.map((exp) => {
    const data = lang === 'id' ? exp.idLang : exp.en;
    const period = exp.period[lang] || exp.period.en;
    const hasImages = exp.images && exp.images.length > 0;

    return `
    <div class="exp-row"
         style="display:grid;grid-template-columns:220px 1fr;gap:2rem;align-items:start;padding:2rem 0;border-bottom:1px solid var(--border);">

      <!-- Left: Role, Org, Period -->
      <div>
        <h3 style="font-family:'DM Serif Display',serif;font-size:1.125rem;color:var(--charcoal);line-height:1.2;margin-bottom:0.25rem;">
          ${esc(data.role)}
        </h3>
        <p style="font-size:0.8125rem;color:var(--ink);margin-bottom:0.2rem;">${esc(data.organization)}</p>
        <p style="font-size:0.75rem;color:var(--muted);">${esc(period)}</p>
      </div>

      <!-- Right: Description + Documentation Gallery -->
      <div>
        <p style="font-size:0.875rem;color:var(--ink);line-height:1.7;margin-bottom:${hasImages ? '1rem' : '0'};">
          ${esc(data.description)}
        </p>

        ${hasImages ? `
          <div style="display:flex;flex-wrap:wrap;gap:0.75rem;margin-top:0.875rem;">
            ${exp.images.map((img) => {
              const url = resolveAsset(img.src);
              const caption = img.caption[lang] || img.caption.en || `${data.role} · ${data.organization}`;
              return `
                <button type="button" class="doc-thumb-btn"
                        data-img-src="${esc(url)}" data-caption="${esc(caption)}"
                        style="border:1px solid var(--border);border-radius:6px;overflow:hidden;
                               width:140px;height:88px;padding:0;background:var(--cream);cursor:pointer;
                               position:relative;box-shadow:0 2px 8px rgba(0,0,0,0.06);
                               transition:transform 0.2s,box-shadow 0.2s,border-color 0.2s;"
                        onmouseover="this.style.transform='scale(1.03)';this.style.borderColor='var(--charcoal)';"
                        onmouseout="this.style.transform='scale(1)';this.style.borderColor='var(--border)';"
                        title="Click to preview: ${esc(caption)}">
                  <img src="${esc(url)}" alt="${esc(caption)}" style="width:100%;height:100%;object-fit:cover;display:block;" loading="lazy" />
                  <span style="position:absolute;bottom:4px;right:4px;background:rgba(0,0,0,0.65);color:#fff;
                               font-size:0.625rem;padding:2px 5px;border-radius:3px;backdrop-filter:blur(2px);">
                    ${esc(uLang.actions.preview)}
                  </span>
                </button>
              `;
            }).join('')}
          </div>` : ''}
      </div>
    </div>`;
  }).join('');
}
