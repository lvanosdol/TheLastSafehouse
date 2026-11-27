#!/usr/bin/env node
// Automated DOM checks for prototype/standalone.html.
//
// These are NOT a screen-reader test. They verify what a screen reader depends
// on — live-region text, focus order, focus trapping, table headers, accessible
// names, reduced-motion and high-contrast behaviour — so that the manual run of
// prototype/ACCESSIBILITY-TEST.md is about speech, not structure.
//
//   npm install     (once)
//   npm test        (or: node tests/spike-checks.mjs)
//
// Set CHROMIUM_PATH if the browser is somewhere unusual.

import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { extname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer-core';

const here = fileURLToPath(new URL('.', import.meta.url));
const root = resolve(here, '..');

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
};

const candidates = [
  process.env.CHROMIUM_PATH,
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser',
  '/usr/bin/google-chrome',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
].filter(Boolean);

const executablePath = candidates.find((path) => existsSync(path));
if (!executablePath) {
  console.error('No Chromium or Chrome found. Set CHROMIUM_PATH to the browser executable.');
  process.exit(2);
}

const results = [];
let failures = 0;

function check(label, ok, detail = '') {
  results.push({ label, ok, detail });
  if (!ok) failures += 1;
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${label}${!ok && detail ? ' — ' + detail : ''}`);
}

const sleep = (ms) => new Promise((done) => setTimeout(done, ms));

function serve() {
  const server = createServer(async (request, response) => {
    const url = new URL(request.url, 'http://localhost');
    if (url.pathname === '/favicon.ico') {
      response.writeHead(204).end();
      return;
    }

    const path = join(root, decodeURIComponent(url.pathname));
    if (!path.startsWith(root)) {
      response.writeHead(403).end();
      return;
    }

    try {
      const body = await readFile(path);
      response.writeHead(200, { 'content-type': MIME[extname(path)] || 'application/octet-stream' });
      response.end(body);
    } catch {
      response.writeHead(404).end();
    }
  });

  return new Promise((done) => server.listen(0, '127.0.0.1', () => done(server)));
}

const server = await serve();
const base = `http://127.0.0.1:${server.address().port}`;
const browser = await puppeteer.launch({
  executablePath,
  headless: 'new',
  args: ['--no-sandbox', '--disable-dev-shm-usage', '--disable-gpu'],
});

try {
  const page = await browser.newPage();
  const consoleErrors = [];
  page.on('console', (message) => {
    if (message.type() === 'error') consoleErrors.push(message.text());
  });
  page.on('pageerror', (error) => consoleErrors.push('pageerror: ' + error.message));

  const announcer = () => page.$eval('#announcer', (el) => el.textContent.trim());
  const alertRegion = () => page.$eval('#alert-announcer', (el) => el.textContent.trim());
  const mirror = () => page.$eval('#last-announcement', (el) => el.textContent.trim());
  const textOf = (selector) => page.$eval(selector, (el) => el.textContent).catch(() => '');

  const focused = () =>
    page.evaluate(() => {
      const el = document.activeElement;
      if (!el) return null;
      return {
        tag: el.tagName.toLowerCase(),
        id: el.id,
        text: (el.innerText || '').trim().replace(/\s+/g, ' ').slice(0, 80),
        ariaLabel: el.getAttribute('aria-label'),
        inDialog: Boolean(el.closest('[role="dialog"]')),
      };
    });

  async function focusByText(name, scope = 'body') {
    return page.evaluate(
      ({ name, scope }) => {
        const host = document.querySelector(scope);
        if (!host) return false;

        // Accessible name: drop aria-hidden decoration (the icon glyph), then
        // fall back to aria-label the way a screen reader would.
        const accessibleName = (el) => {
          const copy = el.cloneNode(true);
          copy.querySelectorAll('[aria-hidden="true"]').forEach((node) => node.remove());
          const text = (copy.textContent || '').replace(/\s+/g, ' ').trim();
          return (el.getAttribute('aria-label') || text).trim();
        };

        const target = Array.from(host.querySelectorAll('button, a[href]')).find(
          (el) => accessibleName(el) === name
        );
        if (!target) return false;
        target.focus();
        return true;
      },
      { name, scope }
    );
  }

  async function press(key = 'Enter', modifier) {
    if (modifier) await page.keyboard.down(modifier);
    await page.keyboard.press(key);
    if (modifier) await page.keyboard.up(modifier);
    await sleep(120);
  }

  const lastWindow = '#windows > section:last-child';

  // ---- 1. load -------------------------------------------------------------

  await page.goto(`${base}/standalone.html`, { waitUntil: 'load' });
  await sleep(900);

  const loadAnnouncement = await announcer();
  check(
    'Load announces that the computer is simulated',
    /Simulated computer\. Nothing you do here affects your real device\./.test(loadAnnouncement),
    JSON.stringify(loadAnnouncement)
  );
  check(
    'The visible simulation marker is present in text',
    (await page.$eval('#simulation-flag', (el) => el.textContent)).includes('nothing here affects your device')
  );
  check('The visible announcement mirror shows the last message', (await mirror()).includes('Simulated computer'));

  // ---- 2. structure a screen reader walks ----------------------------------

  const structure = await page.evaluate(() => {
    const levels = Array.from(document.querySelectorAll('h1,h2,h3,h4,h5,h6')).map((h) =>
      Number(h.tagName.slice(1))
    );

    const nameOf = (el) => {
      const labelled = el.getAttribute('aria-labelledby');
      if (labelled) {
        return labelled
          .split(/\s+/)
          .map((id) => (document.getElementById(id) || {}).textContent || '')
          .join(' ')
          .trim();
      }
      if (el.getAttribute('aria-label')) return el.getAttribute('aria-label').trim();
      if (el.labels && el.labels.length) return el.labels[0].textContent.trim();
      return (el.innerText || el.value || el.getAttribute('title') || '').trim();
    };

    const unnamed = Array.from(document.querySelectorAll('button, a[href], input, select, textarea'))
      .filter((el) => nameOf(el) === '')
      .map((el) => el.outerHTML.slice(0, 60));

    const hiddenFocusable = Array.from(document.querySelectorAll('[aria-hidden="true"]')).flatMap((el) =>
      Array.from(el.querySelectorAll('button, a[href], input, [tabindex]'))
    ).length;

    const skipLink = document.querySelector('.skip-link');

    return {
      h1: document.querySelectorAll('h1').length,
      levels,
      unnamed,
      hiddenFocusable,
      skipLink: skipLink ? skipLink.textContent.trim() : '',
      skipLinkHref: skipLink ? skipLink.getAttribute('href') : '',
    };
  });

  check('Exactly one h1', structure.h1 === 1, `found ${structure.h1}`);
  check(
    'No heading level is skipped',
    structure.levels.every((level, index) => index === 0 || level - structure.levels[index - 1] <= 1),
    structure.levels.join(',')
  );
  check('Every control has an accessible name', structure.unnamed.length === 0, structure.unnamed.join(' | '));
  check('Nothing focusable sits inside aria-hidden', structure.hiddenFocusable === 0);
  check(
    'The skip link names its target',
    structure.skipLink === 'Skip to desktop' && structure.skipLinkHref === '#desktop',
    `${structure.skipLink} -> ${structure.skipLinkHref}`
  );

  // ---- 3. test announcement -----------------------------------------------

  await page.focus('#test-announce');
  await press();
  check(
    'Test announcement reaches the polite live region',
    (await announcer()).includes('This is a test announcement')
  );
  check(
    'The sentence is not duplicated in the same region',
    ((await announcer()).match(/test announcement/gi) || []).length === 1
  );

  // ---- 4. skip link moves focus -------------------------------------------

  await page.evaluate(() => document.querySelector('.skip-link').focus());
  await press();
  check(
    'Skip link moves focus to the desktop',
    (await focused())?.id === 'desktop',
    JSON.stringify(await focused())
  );

  // ---- 5. open Practice with the keyboard ---------------------------------

  check('Practice icon can be focused', await focusByText('Practice', '#desktop-icons'));
  await press();
  check(
    'Practice opens a window whose heading takes focus',
    (await focused())?.tag === 'h2',
    JSON.stringify(await focused())
  );
  check('Opening is announced with the window title', (await announcer()).includes('opened'));
  check(
    'The window is labelled by its heading',
    await page.evaluate(() => {
      const section = document.querySelector('#windows > section');
      const id = section?.getAttribute('aria-labelledby');
      return Boolean(id && document.getElementById(id)?.textContent.trim());
    })
  );

  // ---- 6. folder change and file selection --------------------------------

  check('Logs folder is reachable by name', await focusByText('Logs', lastWindow));
  await press();
  const folderAnnouncement = await announcer();
  check(
    'Opening a folder announces the path and its item count',
    /Opened C:\\Safehouse7\\Practice\\Logs\. 3 items\./.test(folderAnnouncement),
    JSON.stringify(folderAnnouncement)
  );

  check('sensor.log is reachable by name', await focusByText('sensor.log', lastWindow));
  await press();
  const selection = await announcer();
  check(
    'Selection announcement names all five attributes',
    /Selected sensor\.log\. 4 KB\. Modified 2026-11-24 07:58\. Read-only: no\./.test(selection),
    JSON.stringify(selection)
  );
  check(
    'The selected row is marked current',
    await page
      .$eval(lastWindow + ' tbody tr[aria-current="true"]', () => true)
      .catch(() => false)
  );
  check(
    'The details pane is a named group that restates the selection',
    (await textOf(lastWindow + ' [role="group"][aria-label="Selected item"]')).includes('Selected: sensor.log')
  );

  // ---- 7. permissions for a file with no per-file ACLs --------------------

  check('View permissions is reachable by name', await focusByText('View permissions', lastWindow));
  await press();

  const inherited = await page.evaluate(() => {
    const modal = document.querySelector('[role="dialog"]');
    if (!modal) return null;
    const labelId = modal.getAttribute('aria-labelledby');
    return {
      title: labelId ? document.getElementById(labelId)?.textContent.trim() : '',
      modal: modal.getAttribute('aria-modal'),
      hasTable: Boolean(modal.querySelector('table')),
      body: modal.innerText.replace(/\s+/g, ' '),
    };
  });

  check(
    'The dialog is named after the file it was opened for',
    inherited?.title === 'sensor.log — Properties',
    JSON.stringify(inherited?.title)
  );
  check('It is a modal dialog', inherited?.modal === 'true');
  check(
    'A file without per-file permissions does not show a table of blanks',
    inherited?.hasTable === false
  );
  check(
    'It says folder permissions are not modelled rather than claiming read-only',
    (inherited?.body || '').includes('inherits its folder permissions') &&
      !(inherited?.body || '').includes('cannot write'),
    inherited?.body
  );
  check('Focus moves into the dialog when it opens', (await focused())?.inDialog === true);

  await press('Escape');
  check('Escape closes the dialog', (await page.$('[role="dialog"]')) === null);
  check(
    'Focus returns to the control that opened the dialog',
    (await focused())?.text === 'View permissions',
    JSON.stringify(await focused())
  );
  check(
    'Close announces the dialog name rather than the word "Close"',
    /sensor\.log — Properties closed\./.test(await announcer()),
    JSON.stringify(await announcer())
  );

  // ---- 8. permissions for the recovery file, and the focus trap -----------

  check('The Recovery desktop icon can be focused', await focusByText('Recovery', '#desktop-icons'));
  await press();
  check('practice.cfg is listed in Recovery', await focusByText('practice.cfg', lastWindow));
  await press();
  check(
    'A read-only file reports itself as read-only when selected',
    (await announcer()).includes('Read-only: yes'),
    JSON.stringify(await announcer())
  );

  check('View permissions is offered for the recovery file', await focusByText('View permissions', lastWindow));
  await press();

  const dialog = await page.evaluate(() => {
    const modal = document.querySelector('[role="dialog"]');
    if (!modal) return null;
    const labelId = modal.getAttribute('aria-labelledby');
    const table = modal.querySelector('table');
    const rows = Array.from(table?.querySelectorAll('tbody tr') || []);
    return {
      title: labelId ? document.getElementById(labelId)?.textContent.trim() : '',
      modal: modal.getAttribute('aria-modal'),
      caption: table?.querySelector('caption')?.textContent.trim() || '',
      columns: Array.from(table?.querySelectorAll('thead th') || []).map((th) => th.textContent.trim()),
      rowHeaders: Array.from(table?.querySelectorAll('tbody th[scope="row"]') || []).map((th) =>
        th.textContent.trim()
      ),
      firstRow: rows[0] ? Array.from(rows[0].children).map((cell) => cell.textContent.trim()) : [],
      body: modal.innerText.replace(/\s+/g, ' '),
    };
  });

  check(
    'The security dialog is modal and labelled by its title',
    dialog?.modal === 'true' && Boolean(dialog.title)
  );
  check(
    'The dialog title reads as the file and tab',
    dialog?.title === 'practice.cfg — Properties',
    JSON.stringify(dialog?.title)
  );
  check('The table has a caption', dialog?.caption === 'Security tab — effective permissions', dialog?.caption);
  check(
    'The permission table announces its four column headings',
    JSON.stringify(dialog?.columns) === JSON.stringify(['Account', 'Read', 'Write', 'Role note']),
    JSON.stringify(dialog?.columns)
  );
  check(
    'Every permission row begins with its account as a row header',
    (dialog?.rowHeaders || []).length === 3,
    JSON.stringify(dialog?.rowHeaders)
  );
  check(
    'Row headers and cells agree for the recovery account',
    JSON.stringify(dialog?.firstRow?.slice(0, 3)) ===
      JSON.stringify(['SAFEHOUSE7\\recovery', 'Allow', 'Deny']),
    JSON.stringify(dialog?.firstRow)
  );
  check(
    'The dialog explains that the read-only result is deliberate',
    (dialog?.body || '').includes('Read-only in this exercise') &&
      (dialog?.body || '').includes('cannot write to it')
  );
  check('Focus moves into the tables dialog when it opens', (await focused())?.inDialog === true);

  // ---- 9. focus trap, Escape, focus return --------------------------------

  let stayedInside = true;
  for (let i = 0; i < 6; i += 1) {
    await press('Tab');
    if (!(await focused())?.inDialog) stayedInside = false;
  }
  check('Tab never escapes the modal dialog', stayedInside);

  let stayedInsideBackwards = true;
  for (let i = 0; i < 4; i += 1) {
    await press('Tab', 'Shift');
    if (!(await focused())?.inDialog) stayedInsideBackwards = false;
  }
  check('Shift+Tab never escapes the modal dialog', stayedInsideBackwards);

  await press('Escape');
  check('Escape closes the dialog', (await page.$('[role="dialog"]')) === null);
  check(
    'Focus returns to the control that opened the dialog',
    (await focused())?.text === 'View permissions',
    JSON.stringify(await focused())
  );
  const closeAnnouncement = await announcer();
  check(
    'Close announces the dialog name rather than the word "Close"',
    /practice\.cfg — Properties closed\./.test(closeAnnouncement),
    JSON.stringify(closeAnnouncement)
  );

  // ---- 10. denial dialog --------------------------------------------------

  check('The Recovery desktop icon can be focused', await focusByText('Recovery', '#desktop-icons'));
  await press();
  check('practice.cfg is listed in Recovery', await focusByText('practice.cfg', lastWindow));
  await press();
  check(
    'A read-only file reports itself as read-only when selected',
    (await announcer()).includes('Read-only: yes'),
    JSON.stringify(await announcer())
  );

  check(
    'The edit control is labelled for a read-only file',
    await focusByText('Try to edit this file', lastWindow)
  );
  await press();
  const denialBody = await page.evaluate(
    () => document.querySelector('[role="dialog"]')?.innerText.replace(/\s+/g, ' ') || ''
  );
  check('The denial names the file it refused', denialBody.includes('practice.cfg'), denialBody.slice(0, 120));
  check(
    'The denial explains the refusal is not damage',
    denialBody.includes('does not mean the file is damaged')
  );
  check(
    'The denial uses the assertive region',
    (await alertRegion()).includes('Permission denied'),
    JSON.stringify(await alertRegion())
  );
  await press('Escape');
  check(
    'Escape from the denial returns focus to its opener',
    (await focused())?.text === 'Try to edit this file',
    JSON.stringify(await focused())
  );

  // ---- 10. terminal -------------------------------------------------------

  check('The Terminal icon can be focused', await focusByText('Terminal', '#desktop-icons'));
  await press();
  check(
    'Terminal output is a labelled aria-log',
    await page.$eval(
      lastWindow + ' [role="log"]',
      (el) => el.getAttribute('aria-label') === 'Terminal output'
    )
  );

  let reachedInput = false;
  for (let i = 0; i < 6 && !reachedInput; i += 1) {
    await press('Tab');
    reachedInput = (await focused())?.id === 'terminal-input';
  }
  check('The terminal prompt is reachable by Tab from the window heading', reachedInput);

  await page.focus('#terminal-input');
  for (const command of ['dir', 'whoami', 'bogus']) {
    await page.keyboard.type(command);
    await press();
  }

  const terminalText = await page.$eval(lastWindow + ' [role="log"]', (el) => el.textContent);
  check(
    'dir lists the simulated directory',
    terminalText.includes('Directory of C:\\Safehouse7') && terminalText.includes('Practice'),
    terminalText.slice(0, 120)
  );
  check('whoami answers as the standard account', terminalText.includes('SAFEHOUSE7\\recovery'));
  check(
    'An unknown command is rejected by name and lists the real commands',
    terminalText.includes('Command not recognized: bogus') &&
      terminalText.includes('Available commands: dir, whoami, help, cls.'),
    terminalText.slice(-160)
  );

  // ---- 11. text size ------------------------------------------------------

  await page.focus('#text-larger');
  await press();
  await press();
  const sizeStatus = await page.$eval('#text-size-status', (el) => el.textContent.trim());
  const scale = await page.evaluate(() => document.documentElement.style.fontSize);
  check(
    'Two increases reach 124 percent and report it',
    sizeStatus === 'Text size: 124 percent' && scale === '124%',
    `${sizeStatus} / ${scale}`
  );
  check('Text-size changes are announced', (await announcer()).includes('Text size 124 percent'));
  check(
    'No horizontal overflow at 124 percent',
    await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth),
    await page.evaluate(
      () => `${document.documentElement.scrollWidth} > ${document.documentElement.clientWidth}`
    )
  );

  for (let i = 0; i < 5; i += 1) {
    await page.focus('#text-smaller');
    await press();
  }
  check(
    'Text size clamps at its documented minimum',
    (await page.$eval('#text-size-status', (el) => el.textContent.trim())) === 'Text size: 87 percent'
  );

  // ---- 12. reduced motion -------------------------------------------------

  const reduced = await browser.newPage();
  await reduced.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
  await reduced.goto(`${base}/standalone.html`, { waitUntil: 'load' });
  await reduced.evaluate(() => {
    const target = Array.from(document.querySelectorAll('#desktop-icons button')).find(
      (el) => (el.querySelector('.name')?.textContent || '').trim() === 'Practice'
    );
    if (!target) throw new Error('Practice icon missing');
    target.click();
  });
  await sleep(120);
  const motion = await reduced.$eval('#windows > section', (el) => {
    const style = getComputedStyle(el);
    return { animation: style.animationName, transition: style.transitionDuration };
  });
  check(
    'Reduced motion removes animation and transition',
    motion.animation === 'none' && motion.transition.split(',').every((value) => value.trim() === '0s'),
    JSON.stringify(motion)
  );

  // ---- 13. high contrast --------------------------------------------------

  const highContrast = await browser.newPage();
  // puppeteer's emulateMediaFeatures rejects prefers-contrast, so drive CDP directly.
  const cdp = await highContrast.createCDPSession();
  await cdp.send('Emulation.setEmulatedMedia', {
    features: [{ name: 'prefers-contrast', value: 'more' }],
  });
  await highContrast.goto(`${base}/standalone.html`, { waitUntil: 'load' });
  const contrastStyles = await highContrast.evaluate(() => {
    const root = getComputedStyle(document.documentElement);
    return {
      line: root.getPropertyValue('--line').trim(),
      ink: root.getPropertyValue('--ink').trim(),
      background: root.backgroundColor,
    };
  });
  check(
    'High contrast raises borders to white on black',
    contrastStyles.line === '#fff' &&
      contrastStyles.ink === '#fff' &&
      contrastStyles.background === 'rgb(0, 0, 0)',
    JSON.stringify(contrastStyles)
  );

  // ---- 14. the modular version still loads --------------------------------

  const modular = await browser.newPage();
  const modularErrors = [];
  modular.on('pageerror', (error) => modularErrors.push(error.message));
  modular.on('console', (message) => {
    if (message.type() === 'error') modularErrors.push(message.text());
  });
  await modular.goto(`${base}/index.html`, { waitUntil: 'load' });
  await sleep(700);
  const modularIcons = await modular.$$eval('#desktop-icons button', (els) => els.length);
  check(
    'The modular page loads its modules and desktop icons',
    modularErrors.length === 0 && modularIcons === 3,
    modularErrors.join(' | ') || `icons=${modularIcons}`
  );

  // ---- 15. console cleanliness --------------------------------------------

  check('No console or page errors during the run', consoleErrors.length === 0, consoleErrors.join(' | '));
} catch (error) {
  check('The run finished without throwing', false, error.message);
} finally {
  await browser.close();
  server.close();
}

const total = results.length;
console.log(`\n${total - failures} passed, ${failures} failed (${total} checks)`);
if (failures > 0) {
  console.log('\nFailing checks:');
  for (const entry of results.filter((result) => !result.ok)) console.log(`  - ${entry.label}: ${entry.detail}`);
  process.exit(1);
}
