import { ROOT, list, shortName } from '../data.js';
import { announce } from '../a11y.js';
import { showSecurity, showDenial } from './properties.js';

export function explorerBody(container, startPath) {
  let current = startPath;
  let selected = null;

  function openFolder(path) {
    current = path;
    selected = null;
    render();
    announce('Opened ' + path + '. ' + list(path).length + ' items.');
  }

  function selectFile(file) {
    selected = file;
    render();
    announce(
      'Selected ' + file.name + '. ' + file.size + '. Modified ' + file.modified + '. Read-only: ' +
        (file.readOnly ? 'yes' : 'no') + '.'
    );
  }

  function render() {
    container.innerHTML = '';

    const pathLine = document.createElement('p');
    pathLine.className = 'path';
    pathLine.textContent = current;

    const toolbar = document.createElement('div');
    toolbar.className = 'terminal-form';
    const up = document.createElement('button');
    up.type = 'button';
    up.textContent = 'Up one level';
    up.disabled = current === ROOT;
    up.addEventListener('click', () => {
      const parent = current.slice(0, current.lastIndexOf('\\'));
      if (parent) openFolder(parent);
    });
    toolbar.appendChild(up);

    const tableWrap = document.createElement('div');
    tableWrap.className = 'table-wrap';
    const table = document.createElement('table');
    const caption = document.createElement('caption');
    caption.textContent = 'Contents of ' + shortName(current);
    table.appendChild(caption);

    const thead = document.createElement('thead');
    thead.innerHTML =
      '<tr><th scope="col">Name</th><th scope="col">Type</th><th scope="col">Size</th>' +
      '<th scope="col">Date modified</th><th scope="col">Read-only</th></tr>';
    table.appendChild(thead);

    const tbody = document.createElement('tbody');
    const rows = list(current);

    if (rows.length === 0) {
      const row = document.createElement('tr');
      const cell = document.createElement('td');
      cell.colSpan = 5;
      cell.textContent = 'This folder is empty.';
      row.appendChild(cell);
      tbody.appendChild(row);
    }

    rows.forEach((item) => {
      const row = document.createElement('tr');
      row.dataset.path = item.path;

      const nameCell = document.createElement('td');
      const nameButton = document.createElement('button');
      nameButton.type = 'button';
      nameButton.className = 'row-button';
      nameButton.textContent = item.name;
      nameButton.addEventListener('click', () => {
        if (item.type === 'folder') openFolder(item.path);
        else selectFile(item);
      });
      nameCell.appendChild(nameButton);

      const values = [
        item.type === 'folder' ? 'File folder' : 'Log file',
        item.size || '',
        item.modified,
        item.type === 'folder' ? '' : item.readOnly ? 'Yes' : 'No',
      ];

      row.appendChild(nameCell);
      values.forEach((value) => {
        const cell = document.createElement('td');
        cell.textContent = value;
        row.appendChild(cell);
      });

      if (selected && selected.path === item.path) row.setAttribute('aria-current', 'true');
      tbody.appendChild(row);
    });

    table.appendChild(tbody);
    tableWrap.appendChild(table);

    const details = document.createElement('div');
    details.setAttribute('role', 'group');
    details.setAttribute('aria-label', 'Selected item');
    details.setAttribute('aria-live', 'polite');

    if (selected) {
      const summary = document.createElement('p');
      summary.textContent =
        'Selected: ' + selected.name + '. Size ' + selected.size + '. Modified ' +
        selected.modified + '. Read-only: ' + (selected.readOnly ? 'yes' : 'no') + '.';

      const actions = document.createElement('div');
      actions.className = 'worker-actions';

      const perms = document.createElement('button');
      perms.type = 'button';
      perms.textContent = 'View permissions';
      perms.addEventListener('click', () => showSecurity(selected.path));

      const edit = document.createElement('button');
      edit.type = 'button';
      edit.textContent = selected.readOnly ? 'Try to edit this file' : 'Open a copy';
      edit.addEventListener('click', () => {
        if (selected.readOnly) showDenial(selected.path, 'change or remove');
        else announce('Copy opened in the simulated editor. The original is unchanged.');
      });

      actions.append(perms, edit);
      details.append(summary, actions);
    } else {
      const hint = document.createElement('p');
      hint.textContent = 'Select a file to see its details, or open a folder.';
      details.appendChild(hint);
    }

    container.append(pathLine, toolbar, tableWrap, details);
  }

  render();
}
