const polite = document.getElementById('announcer');
const assertive = document.getElementById('alert-announcer');

/** Announce a change to screen readers. Errors use the assertive region. */
export function announce(message, { urgent = false } = {}) {
  const region = urgent ? assertive : polite;
  region.textContent = '';
  // A tick lets repeated identical messages be announced again.
  window.setTimeout(() => {
    region.textContent = message;
  }, 30);
}

const FOCUSABLE = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',');

export function focusables(container) {
  return Array.from(container.querySelectorAll(FOCUSABLE)).filter(
    (el) => el.offsetParent !== null || el === document.activeElement
  );
}

/** Open a modal dialog, trap focus inside it, and restore focus on close. */
export function openModal({ title, body, actions = [], onClose }) {
  const opener = document.activeElement;
  const scrim = document.createElement('div');
  scrim.className = 'dialog-scrim';

  const dialog = document.createElement('div');
  dialog.className = 'dialog';
  dialog.setAttribute('role', 'dialog');
  dialog.setAttribute('aria-modal', 'true');
  dialog.setAttribute('tabindex', '-1');

  const headingId = 'dialog-title-' + Math.random().toString(36).slice(2, 8);
  dialog.setAttribute('aria-labelledby', headingId);

  const header = document.createElement('div');
  header.className = 'window-titlebar';
  header.innerHTML = '<h2 id="' + headingId + '"></h2>';
  header.querySelector('h2').textContent = title;

  const bodyEl = document.createElement('div');
  bodyEl.className = 'dialog-body';
  if (typeof body === 'string') bodyEl.innerHTML = body;
  else bodyEl.appendChild(body);

  const actionBar = document.createElement('div');
  actionBar.className = 'dialog-actions';

  const close = (label = 'Close') => {
    scrim.remove();
    if (opener && typeof opener.focus === 'function') opener.focus();
    if (onClose) onClose();
    announce(label + ' closed.');
  };

  actions.forEach((action) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = action.label;
    button.addEventListener('click', () => {
      if (action.onClick) action.onClick({ close });
      else close();
    });
    actionBar.appendChild(button);
  });

  if (!actions.some((a) => a.label === 'Close')) {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = 'Close';
    button.addEventListener('click', () => close());
    actionBar.appendChild(button);
  }

  dialog.append(header, bodyEl, actionBar);
  scrim.appendChild(dialog);
  document.body.appendChild(scrim);

  scrim.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      close();
      return;
    }
    if (event.key !== 'Tab') return;
    const items = focusables(dialog);
    if (items.length === 0) return;
    const first = items[0];
    const last = items[items.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  const items = focusables(dialog);
  (items[0] || dialog).focus();

  return { dialog, close };
}
