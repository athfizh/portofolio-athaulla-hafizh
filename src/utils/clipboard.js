/**
 * Clipboard & Toast Notification Manager
 */
import { qs } from './dom.js';

let toastTimeout = null;

export function showToast(message, icon = '✓') {
  const toast = qs('#toast');
  const msgEl = qs('#toast-message');
  const iconEl = qs('#toast-icon');
  if (!toast || !msgEl) return;

  msgEl.textContent = message;
  if (iconEl) iconEl.textContent = icon;

  toast.classList.add('show');
  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

function fallbackCopy(text, successMsg) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.opacity = '0';
  document.body.appendChild(ta);
  ta.select();
  try {
    document.execCommand('copy');
    showToast(successMsg, '✓');
  } catch (err) {
    showToast('Failed to copy', '✕');
  }
  document.body.removeChild(ta);
}

export function copyToClipboard(text, successMsg = 'Copied to clipboard!') {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(successMsg, '✓');
    }).catch(() => {
      fallbackCopy(text, successMsg);
    });
  } else {
    fallbackCopy(text, successMsg);
  }
}

export function initCopyListeners(defaultEmail) {
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-copy-email');
    if (!btn) return;
    const email = btn.getAttribute('data-email') || defaultEmail;
    copyToClipboard(email, `Email copied: ${email}`);
  });
}
