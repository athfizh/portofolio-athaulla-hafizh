/**
 * Honors & Awards Component with Bilingual Support
 */
import { qs, esc } from '../utils/dom.js';
import { resolveAsset } from '../utils/assets.js';

export function renderAwards(awards, ui, lang) {
  const labelEl = qs('#awards-label');
  if (labelEl && ui[lang]?.sections?.awardsLabel) {
    labelEl.textContent = ui[lang].sections.awardsLabel;
  }

  const titleEl = qs('#awards-title');
  if (titleEl && ui[lang]?.sections?.awardsTitle) {
    titleEl.textContent = ui[lang].sections.awardsTitle;
  }

  const list = qs('#awards-list');
  if (!list) return;

  const uLang = ui[lang] || ui.en;

  list.innerHTML = awards.map((award) => {
    const data = lang === 'id' ? award.idLang : award.en;
    const date = award.date[lang] || award.date.en;
    const hasImages = award.images && award.images.length > 0;

    return `
    <div class="award-card">
      <!-- Left: Title, Event Badge, Issuer, Date -->
      <div>
        <div class="award-badge">
          ${esc(award.event)}
        </div>
        <h3 class="award-title">
          ${esc(data.title)}
        </h3>
        <p class="award-issuer">${esc(award.issuer)}</p>
        <p class="award-date">${esc(date)}</p>
      </div>

      <!-- Right: Description + Documentation Gallery -->
      <div>
        <p class="award-desc" style="margin-bottom:${hasImages ? '1.25rem' : '0'};">
          ${esc(data.description)}
        </p>

        ${hasImages ? `
          <div style="display:flex;flex-wrap:wrap;gap:0.875rem;">
            ${award.images.map((img) => {
              const url = resolveAsset(img.src);
              const caption = img.caption[lang] || img.caption.en || `${data.title} (${award.event})`;
              return `
                <button type="button" class="doc-thumb-btn"
                        data-img-src="${esc(url)}" data-caption="${esc(caption)}"
                        style="border:1px solid var(--border);border-radius:6px;overflow:hidden;
                               width:130px;height:82px;padding:0;background:var(--cream);cursor:pointer;
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
