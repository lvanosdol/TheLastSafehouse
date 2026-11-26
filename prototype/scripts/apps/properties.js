import { ACCOUNTS, entry, shortName } from '../data.js';
import { openModal, announce } from '../a11y.js';

export function showSecurity(path) {
  const file = entry(path) || {};
  const security = file.security || {};

  const wrap = document.createElement('div');
  const intro = document.createElement('p');
  intro.textContent =
    'Permissions for ' + shortName(path) + '. Read-only in this exercise: the recovery role cannot change them.';
  wrap.appendChild(intro);

  const tableWrap = document.createElement('div');
  tableWrap.className = 'table-wrap';
  const table = document.createElement('table');
  table.innerHTML =
    '<caption>Security tab — effective permissions</caption>' +
    '<thead><tr><th scope="col">Account</th><th scope="col">Read</th><th scope="col">Write</th><th scope="col">Role note</th></tr></thead>';
  const tbody = document.createElement('tbody');

  ACCOUNTS.forEach((account) => {
    const rights = security[account.id] || { read: 'Not listed', write: 'Not listed' };
    const row = document.createElement('tr');
    const cells = [account.label, rights.read, rights.write, account.note];
    cells.forEach((value, index) => {
      const cell = document.createElement(index === 0 ? 'th' : 'td');
      if (index === 0) cell.setAttribute('scope', 'row');
      cell.textContent = value;
      row.appendChild(cell);
    });
    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  tableWrap.appendChild(table);
  wrap.appendChild(tableWrap);

  const note = document.createElement('p');
  note.className = 'status-ok';
  note.textContent = 'Your account can read this file. It cannot write to it, and that is expected.';
  wrap.appendChild(note);

  openModal({
    title: 'practice.cfg — Properties',
    body: wrap,
    actions: [{ label: 'Close' }],
  });

  announce('Properties opened for ' + shortName(path) + '. Security tab. Read allowed, write denied for the recovery role.');
}

export function showDenial(path, action) {
  const wrap = document.createElement('div');
  const first = document.createElement('p');
  first.innerHTML =
    '<strong>Permission denied.</strong> You can read <span class="path-inline"></span>, but you cannot ' +
    action +
    ' it.';
  first.querySelector('.path-inline').textContent = shortName(path);

  const second = document.createElement('p');
  second.textContent =
    'A denial does not mean the file is damaged, encrypted, or unusable. It means your account does not have that permission.';

  wrap.append(first, second);

  openModal({
    title: 'Permission denied',
    body: wrap,
    actions: [{ label: 'Close' }],
  });

  announce('Permission denied. The file is readable but cannot be changed.', { urgent: true });
}
