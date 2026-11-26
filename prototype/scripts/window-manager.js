import { announce } from './a11y.js';

const windowsEl = document.getElementById('windows');
const taskbarEl = document.getElementById('taskbar-windows');
const open = new Map();

/** Open (or focus) a window. render(bodyElement) fills the window body. */
export function openWindow({ id, title, render }) {
  if (open.has(id)) {
    const existing = open.get(id);
    existing.heading.focus();
    announce(title + ' brought to the front.');
    return existing;
  }

  const section = document.createElement('section');
  section.className = 'window';
  section.setAttribute('aria-labelledby', 'win-title-' + id);

  const bar = document.createElement('div');
  bar.className = 'window-titlebar';

  const heading = document.createElement('h2');
  heading.id = 'win-title-' + id;
  heading.tabIndex = -1;
  heading.textContent = title;

  const closeButton = document.createElement('button');
  closeButton.type = 'button';
  closeButton.textContent = 'Close';
  closeButton.setAttribute('aria-label', 'Close ' + title);

  bar.append(heading, closeButton);

  const body = document.createElement('div');
  body.className = 'window-body';
  render(body);

  section.append(bar, body);
  windowsEl.appendChild(section);

  const taskButton = document.createElement('button');
  taskButton.type = 'button';
  taskButton.textContent = title;
  taskButton.addEventListener('click', () => heading.focus());
  taskbarEl.appendChild(taskButton);

  const record = { section, heading, closeButton, taskButton, id };
  open.set(id, record);

  const close = () => {
    section.remove();
    taskButton.remove();
    open.delete(id);
    announce(title + ' closed.');
    const next = Array.from(open.values()).pop();
    if (next) next.heading.focus();
  };

  closeButton.addEventListener('click', close);
  heading.focus();
  announce(title + ' opened.');

  return record;
}

export function closeWindow(id) {
  const record = open.get(id);
  if (record) record.closeButton.click();
}

export function openCount() {
  return open.size;
}
