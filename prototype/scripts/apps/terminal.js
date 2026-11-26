import { ROOT, list } from '../data.js';

const COMMANDS = ['dir', 'whoami', 'help', 'cls'];

function dirOutput(path) {
  const rows = list(path);
  const header = ' Directory of ' + path + '\n\n';
  if (rows.length === 0) return header + '(no items)\n';
  return (
    header +
    rows
      .map((row) => {
        const kind = row.type === 'folder' ? '<DIR>' : '     ';
        return kind + '  ' + row.modified + '  ' + row.name;
      })
      .join('\n') +
    '\n'
  );
}

export function terminalBody(container) {
  const output = document.createElement('pre');
  output.className = 'terminal-output';
  output.setAttribute('role', 'log');
  output.setAttribute('aria-label', 'Terminal output');
  output.textContent =
    'Safehouse 7 simulated terminal\nType help for available commands.\n\n';

  const form = document.createElement('form');
  form.className = 'terminal-form';

  const label = document.createElement('label');
  label.htmlFor = 'terminal-input';
  label.textContent = 'C:\\Safehouse7>';

  const input = document.createElement('input');
  input.id = 'terminal-input';
  input.name = 'command';
  input.autocomplete = 'off';
  input.spellcheck = false;
  input.setAttribute('aria-describedby', 'terminal-hint');

  const hint = document.createElement('p');
  hint.id = 'terminal-hint';
  hint.className = 'sr-only';
  hint.textContent = 'Available commands: dir, whoami, help, cls.';

  const submit = document.createElement('button');
  submit.type = 'submit';
  submit.textContent = 'Run';

  form.append(label, input, submit);

  let cwd = ROOT;

  function write(text) {
    output.textContent += text;
    output.scrollTop = output.scrollHeight;
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const raw = input.value.trim();
    if (!raw) return;
    const command = raw.toLowerCase();
    write('C:\\Safehouse7> ' + raw + '\n');

    if (command === 'help') {
      write('Available commands: dir, whoami, help, cls.\n\n');
    } else if (command === 'dir') {
      write(dirOutput(cwd));
    } else if (command === 'whoami') {
      write('SAFEHOUSE7\\recovery\n\n');
    } else if (command === 'cls') {
      output.textContent = '';
    } else {
      write(
        'Command not recognized: ' +
          raw +
          '\nAvailable commands: ' +
          COMMANDS.join(', ') +
          '.\n\n'
      );
    }

    input.value = '';
  });

  container.append(output, form, hint);
  input.focus();
}
