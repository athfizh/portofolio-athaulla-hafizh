/**
 * DOM Utility Helpers & XSS Sanitizer
 */

export const ARROW = `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle;margin-left:2px;flex-shrink:0;"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>`;

export function qs(selector, parent = document) {
  const el = parent.querySelector(selector);
  if (!el && process.env.NODE_ENV !== 'production') {
    console.warn(`[DOM] Element not found: ${selector}`);
  }
  return el;
}

export function qsa(selector, parent = document) {
  return Array.from(parent.querySelectorAll(selector));
}

/**
 * Escapes unsafe characters to prevent Cross-Site Scripting (XSS)
 */
export function esc(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
