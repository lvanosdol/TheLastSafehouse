#!/usr/bin/env node
// Automated DOM checks for prototype/lesson-1.html.
//
// These are NOT a screen-reader test. They verify what a screen reader depends
// on: live-region text, focus order, accessible names, dialog-free keyboard
// operation of the parts guide, and text-size clamping. The manual run of
// prototype/ACCESSIBILITY-TEST.md is still what proves speech.
//
//   npm test        (runs this after tests/spike-checks.mjs)
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

let failures = 0;

function check(label, ok, detail = '') {
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

  const polite = () => page.$eval('#announcer', (el) => el.textContent.trim());
  const mirror = () => page.$eval('#last-announcement', (el) => el.textContent.trim());
  const activeId = () => page.evaluate(() => (document.activeElement && document.activeElement.id) || document.activeElement.tagName.toLowerCase());

  await page.goto(`${base}/lesson-1.html`, { waitUntil: 'load' });
  await sleep(900);

  // ---- 1. what the page says about itself --------------------------------

  check(
    'Load announces a simulated workbench',
    /Simulated workbench\. Nothing here touches a real computer\./.test(await polite()),
    JSON.stringify(await polite())
  );
  check(
    'The visible simulation marker is present in text',
    (await page.$eval('#simulation-flag', (el) => el.textContent)).includes('nothing here touches a real computer')
  );
  check('The visible mirror shows the last message', (await mirror()).includes('Simulated workbench'));

  // ---- 2. structure -------------------------------------------------------

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
      return (el.innerText || el.value || el.getAttribute('title') || '').trim();
    };

    const unnamed = Array.from(document.querySelectorAll('button, a[href], input, select, textarea, summary'))
      .filter((el) => nameOf(el) === '')
      .map((el) => el.outerHTML.slice(0, 60));

    const hiddenFocusable = Array.from(document.querySelectorAll('[aria-hidden="true"]')).flatMap((el) =>
      Array.from(el.querySelectorAll('button, a[href], input, summary, [tabindex]'))
    ).length;

    const skip = document.querySelector('.skip-link');

    return {
      h1: document.querySelectorAll('h1').length,
      levels,
      unnamed,
      hiddenFocusable,
      skipText: skip ? skip.textContent.trim() : '',
      skipHref: skip ? skip.getAttribute('href') : '',
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
    structure.skipText === 'Skip to the workbench' && structure.skipHref === '#bench',
    `${structure.skipText} -> ${structure.skipHref}`
  );

  // ---- 3. live regions ----------------------------------------------------

  const regions = await page.evaluate(() => ({
    polite: [
      document.getElementById('announcer').getAttribute('role'),
      document.getElementById('announcer').getAttribute('aria-live'),
    ],
    assertive: [
      document.getElementById('alert-announcer').getAttribute('role'),
      document.getElementById('alert-announcer').getAttribute('aria-live'),
    ],
  }));
  check(
    'A polite status region exists',
    regions.polite[0] === 'status' && regions.polite[1] === 'polite',
    regions.polite.join('/')
  );
  check(
    'An assertive alert region exists',
    regions.assertive[0] === 'alert' && regions.assertive[1] === 'assertive',
    regions.assertive.join('/')
  );

  // ---- 4. keyboard order --------------------------------------------------

  await page.evaluate(() => document.activeElement && document.activeElement.blur());

  await page.keyboard.press('Tab');
  const firstIsSkipLink = await page.evaluate(() => document.activeElement.className === 'skip-link');
  check('First Tab reaches the skip link', firstIsSkipLink);

  await page.keyboard.press('Tab');
  check('Second Tab reaches the test announcement', (await activeId()) === 'test-announce');

  await page.keyboard.press('Tab');
  check('Third Tab reaches the smaller text control', (await activeId()) === 'text-smaller');

  await page.keyboard.press('Tab');
  check('Fourth Tab reaches the larger text control', (await activeId()) === 'text-larger');

  await page.keyboard.press('Tab');
  const fifth = await page.evaluate(() => document.activeElement.tagName.toLowerCase());
  check('Fifth Tab reaches the first part', fifth === 'summary', fifth);

  // ---- 5. the skip link moves focus --------------------------------------

  await page.evaluate(() => document.querySelector('.skip-link').focus());
  await page.keyboard.press('Enter');
  await sleep(150);
  check('The skip link focuses the workbench', (await activeId()) === 'bench');

  // ---- 6. text size -------------------------------------------------------

  const sizeOf = () => page.evaluate(() => document.documentElement.style.fontSize);

  await page.focus('#text-larger');
  await page.keyboard.press('Enter');
  await sleep(80);
  await page.keyboard.press('Enter');
  await sleep(120);
  check('Two increases reach 124 percent', (await sizeOf()) === '124%', await sizeOf());
  check('The increase is announced', /Text size 124 percent/.test(await polite()), await polite());

  const overflowAt124 = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth
  );
  check('No horizontal overflow at 124 percent', !overflowAt124);

  await page.focus('#text-smaller');
  for (let i = 0; i < 6; i += 1) {
    await page.keyboard.press('Enter');
    await sleep(60);
  }
  check('Text size clamps at its documented minimum', (await sizeOf()) === '87%', await sizeOf());

  // ---- 7. the parts guide -------------------------------------------------

  const guide = await page.evaluate(() => {
    const parts = Array.from(document.querySelectorAll('.guide details'));
    return {
      count: parts.length,
      names: parts.map((part) => part.querySelector('summary').textContent.trim()),
      bodies: parts.map((part) => part.querySelector('.detail-body').textContent.replace(/\s+/g, ' ').trim()),
      allClosed: parts.every((part) => !part.open),
    };
  });

  check('The guide lists eight parts', guide.count === 8, String(guide.count));
  check(
    'Every part is named',
    guide.names.every((name) => name.length > 2),
    guide.names.join(', ')
  );
  check(
    'Every part says what it is for',
    guide.bodies.every((body) => body.length > 40),
    guide.bodies.map((b) => b.length).join(',')
  );
  check('The guide starts closed, so it does not read as one wall of text', guide.allClosed);

  // ---- 8. the guide opens with the keyboard -------------------------------

  await page.evaluate(() => document.querySelector('.guide summary').focus());
  await page.keyboard.press('Enter');
  await sleep(120);
  const opened = await page.evaluate(() => document.querySelector('.guide details').open);
  check('A part opens with Enter', opened === true);

  await page.keyboard.press('Enter');
  await sleep(120);
  const closedAgain = await page.evaluate(() => document.querySelector('.guide details').open);
  check('The same part closes with Enter', closedAgain === false);

  // ---- 9. preferences and errors -----------------------------------------

  const css = await page.$eval('style', (el) => el.textContent);
  check('Reduced motion is respected in the stylesheet', css.includes('prefers-reduced-motion'));
  check('High contrast is respected in the stylesheet', css.includes('prefers-contrast'));
  check('No console or page errors during the run', consoleErrors.length === 0, consoleErrors.join(' | '));
} finally {
  await browser.close();
  server.close();
}

console.log('');
console.log(failures === 0 ? 'all lesson-1 checks passed' : failures + ' lesson-1 check(s) failed');
process.exit(failures === 0 ? 0 : 1);
