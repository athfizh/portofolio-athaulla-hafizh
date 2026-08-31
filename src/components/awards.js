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
    <div class="award-card"
         style="border:1px solid var(--border);border-radius:10px;padding:2rem;background:var(--paper);
                display:grid;grid-template-columns:220px 1fr;gap:2rem;align-items:start;
                transition:border-color 0.25s,box-shadow 0.25s;">

      <!-- Left: Title, Event Badge, Issuer, Date -->
      <div>
        <div style="display:inline-block;padding:0.2rem 0.5rem;background:var(--cream);
                    border:1px solid var(--border);border-radius:4px;margin-bottom:0.75rem;">
          <span style="font-size:0.6875rem;font-weight:600;color:var(--charcoal);letter-spacing:0.04em;">
            ${esc(award.event)}
          </span>
        </div>
        <h3 style="font-family:'DM Serif Display',serif;font-size:1.125rem;color:var(--charcoal);line-height:1.2;margin-bottom:0.35rem;">
          ${esc(data.title)}
        </h3>
        <p style="font-size:0.8125rem;color:var(--ink);margin-bottom:0.2rem;">${esc(award.issuer)}</p>
        <p style="font-size:0.75rem;color:var(--muted);">${esc(date)}</p>
      </div>

      <!-- Right: Description + Documentation Gallery -->
      <div>
        <p style="font-size:0.875rem;color:var(--ink);line-height:1.75;margin-bottom:${hasImages ? '1.25rem' : '0'};">
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
