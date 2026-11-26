import { DESKTOP_ICONS, ROOT } from './data.js';
import { announce } from './a11y.js';
import { openWindow } from './window-manager.js';
import { explorerBody } from './apps/files.js';
import { terminalBody } from './apps/terminal.js';

const iconList = document.getElementById('desktop-icons');

function iconButton({ label, glyph, onActivate, description }) {
  const li = document.createElement('li');
  const button = document.createElement('button');
  button.type = 'button';
  button.innerHTML = '<span class="glyph" aria-hidden="true"></span><span class="name"></span>';
  button.querySelector('.glyph').textContent = glyph;
  button.querySelector('.name').textContent = label;
  if (description) button.setAttribute('aria-describedby', description.id);
  button.addEventListener('click', onActivate);
  li.appendChild(button);
  return li;
}

DESKTOP_ICONS.forEach((icon) => {
  iconList.appendChild(
    iconButton({
      label: icon.label,
      glyph: icon.type === 'folder' ? '▤' : '▥',
      onActivate: () =>
        openWindow({
          id: 'explorer:' + icon.path,
          title: icon.label + ' — File Explorer',
          render: (body) => explorerBody(body, icon.path),
        }),
    })
  );
});

iconList.appendChild(
  iconButton({
    label: 'Terminal',
    glyph: '▶',
    onActivate: () =>
      openWindow({ id: 'terminal', title: 'Terminal', render: terminalBody }),
  })
);

// Text size control
const status = document.getElementById('text-size-status');
let scale = 100;

function setScale(next) {
  scale = Math.min(150, Math.max(87, next));
  document.documentElement.style.fontSize = scale + '%';
  status.textContent = 'Text size: ' + scale + ' percent';
  announce('Text size ' + scale + ' percent.');
}

document.getElementById('text-smaller').addEventListener('click', () => setScale(scale - 12));
document.getElementById('text-larger').addEventListener('click', () => setScale(scale + 12));

// Announce the simulation once, after the page settles.
window.setTimeout(() => {
  announce(
    'Simulated computer. Nothing you do here affects your real device. Press Tab to reach the desktop.'
  );
}, 600);

document.getElementById('desktop').addEventListener('focus', () => {
  announce('Desktop. ' + DESKTOP_ICONS.length + ' folders and a terminal are available.');
}, { once: true });

export { ROOT };
