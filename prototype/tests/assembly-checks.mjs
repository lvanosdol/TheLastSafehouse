#!/usr/bin/env node
// Automated DOM checks for prototype/assembly.html — the rebuild.
//
// Structural and behavioural, not a screen-reader test: what the page refuses
// and why, what the machine reports when something is missing, and that every
// placement is reachable from the keyboard.
//
//   npm test

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

  const mara = () => page.$eval('#mara', (el) => el.textContent.replace(/\s+/g, ' ').trim());
  const alertRegion = () => page.$eval('#alert-announcer', (el) => el.textContent.trim());
  const resultText = () => page.$eval('#result-text', (el) => el.textContent.trim());

  await page.goto(`${base}/assembly.html`, { waitUntil: 'load' });
  await sleep(900);

  const shape = await page.evaluate(() => {
    const items = Array.from(document.querySelectorAll('.item'));
    const slots = Array.from(document.querySelectorAll('.slot'));
    const named = (el) => (el.textContent || '').replace(/\s+/g, ' ').trim().length > 0;
    return {
      items: items.length,
      slots: slots.length,
      itemsNamed: items.every(named),
      slotsNamed: slots.every(named),
      unnamedControls: Array.from(document.querySelectorAll('button, a[href]')).filter((el) => !named(el)).length,
      simulation: document.getElementById('simulation-flag').textContent.trim(),
      linkToLesson: Boolean(document.querySelector('a[href="lesson-1.html"]')),
    };
  });

  check('Twelve things on the bench', shape.items === 12, String(shape.items));
  check('Thirteen places for them', shape.slots === 13, String(shape.slots));
  check('Every item and place is named', shape.itemsNamed && shape.slotsNamed);
  check('Every control has an accessible name', shape.unnamedControls === 0, String(shape.unnamedControls));
  check('The page says it is simulated', /Simulated workbench/.test(shape.simulation));
  check('The build links back to the lesson', shape.linkToLesson);

  async function pick(itemId) {
    await page.focus('.item[data-item="' + itemId + '"]');
    await page.keyboard.press('Enter');
    await sleep(50);
  }

  async function put(targetId) {
    await page.focus('.slot[data-target="' + targetId + '"]');
    await page.keyboard.press('Enter');
    await sleep(60);
  }

  async function place(itemId, targetId) {
    await pick(itemId);
    await put(targetId);
  }

  async function press(id) {
    await page.focus('#' + id);
    await page.keyboard.press('Enter');
    await sleep(120);
  }

  const filled = (targetId) =>
    page.$eval('.slot[data-target="' + targetId + '"]', (el) =>
      /Fitted:/.test(el.textContent) ? el.textContent.replace(/\s+/g, ' ').trim() : ''
    );

  // ---- what the machine refuses, and why -------------------------------

  await place('cooler', 'cpu-top');
  check('A cooler cannot go on an empty socket', /no processor in the socket/i.test(await mara()), await mara());
  check('The refusal reaches the assertive region', /no processor/i.test(await alertRegion()), await alertRegion());
  check('The refused part stays on the bench', (await filled('cpu-top')) === '');

  await place('cpu', 'memory-slots');
  check('A processor dropped on the memory slots is refused by name', /processor does not go there/i.test(await mara()), await mara());

  await place('board', 'standoffs');
  check(
    'The board will not go in until it is ready',
    /not ready to go in/i.test(await mara()) && /processor/i.test(await mara()),
    await mara()
  );

  // ---- a full build, with the monitor in the wrong port ----------------

  await place('cpu', 'cpu-socket');
  await place('ram', 'memory-slots');
  await press('clips');
  await place('cooler', 'cpu-top');
  await place('fan', 'fan-header');
  await place('board', 'standoffs');
  await place('ssd', 'm2-slot');
  await place('psu', 'psu-bay');
  await place('atx', 'board-power');
  await place('eps', 'cpu-power');
  await place('gpu', 'pcie-slot');
  await place('monitor', 'board-video');
  await place('desk', 'desk');

  await press('power');
  check('With the switch off, pressing the button does nothing', /Nothing happens/.test(await resultText()), await resultText());

  await press('switch');
  await press('power');
  check(
    'The monitor on the board port gives no signal',
    /NO SIGNAL/.test(await resultText()),
    await resultText()
  );
  check(
    'Mara explains the disabled onboard video',
    /motherboard port/i.test(await page.$eval('#result-mara', (el) => el.textContent)),
    await page.$eval('#result-mara', (el) => el.textContent)
  );

  // ---- the same machine, cable moved to the card -----------------------

  // Moving a cable means unplugging it first: a placed item has left the bench.
  await put('board-video');
  await place('monitor', 'gpu-port');
  await press('power');

  const success = await resultText();
  check('Moving the cable to the card gives POST and boot', /POWER: ON/.test(success) && /POST: COMPLETE/.test(success), success);
  check('The result reports storage and memory', /STORAGE: DETECTED/.test(success) && /MEMORY: DETECTED/.test(success), success);
  check('Windows starts', /WINDOWS: STARTING/.test(success), success);

  const hiddenResult = await page.$eval('#result', (el) => el.hidden);
  check('The result panel is shown, not hidden', hiddenResult === false);

  // ---- the other two diagnostics, from clean builds ---------------------

  await press('reset');
  const clearedState = await page.evaluate(() => ({
    hidden: document.getElementById('result').hidden,
    emptySlots: Array.from(document.querySelectorAll('.slot')).filter((slot) => /Empty/.test(slot.textContent)).length,
    itemsBack: Array.from(document.querySelectorAll('.item')).filter((item) => !item.classList.contains('used')).length,
  }));
  check(
    'Resetting clears the board',
    clearedState.hidden && clearedState.emptySlots === 13 && clearedState.itemsBack === 12,
    JSON.stringify(clearedState)
  );

  for (const [itemId, targetId] of [
    ['cpu', 'cpu-socket'],
    ['ram', 'memory-slots'],
    ['cooler', 'cpu-top'],
    ['fan', 'fan-header'],
    ['board', 'standoffs'],
    ['ssd', 'm2-slot'],
    ['psu', 'psu-bay'],
    ['atx', 'board-power'],
    ['gpu', 'pcie-slot'],
    ['monitor', 'gpu-port'],
    ['desk', 'desk'],
  ]) {
    await place(itemId, targetId);
  }

  await press('clips');
  await press('switch');
  await press('power');
  check(
    'Without the CPU power cable the fans blip and nothing else',
    /fans start for a second/i.test(await resultText()),
    await resultText()
  );

  await place('eps', 'cpu-power');
  await press('power');
  check('Adding the CPU power cable clears that fault', /WINDOWS: STARTING/.test(await resultText()), await resultText());

  // ---- the clips -------------------------------------------------------

  await press('reset');

  for (const [itemId, targetId] of [
    ['cpu', 'cpu-socket'],
    ['ram', 'memory-slots'],
    ['cooler', 'cpu-top'],
    ['fan', 'fan-header'],
    ['board', 'standoffs'],
    ['ssd', 'm2-slot'],
    ['psu', 'psu-bay'],
    ['atx', 'board-power'],
    ['eps', 'cpu-power'],
    ['gpu', 'pcie-slot'],
    ['monitor', 'gpu-port'],
    ['desk', 'desk'],
  ]) {
    await place(itemId, targetId);
  }

  await press('switch');
  await press('power');
  check(
    'Memory with the clips open is a detection error',
    /memory detection error/i.test(await resultText()),
    await resultText()
  );

  await press('clips');
  await press('power');
  check('Closing the clips clears it', /WINDOWS: STARTING/.test(await resultText()), await resultText());

  // ---- the lesson still links to this page -----------------------------

  await page.goto(`${base}/lesson-1.html`, { waitUntil: 'load' });
  await sleep(700);
  const lessonLinks = await page.evaluate(() =>
    Array.from(document.querySelectorAll('a[href]')).map((a) => a.getAttribute('href'))
  );
  check('The lesson links to the build', lessonLinks.includes('assembly.html'), lessonLinks.join(', '));

  check('No console or page errors during the run', consoleErrors.length === 0, consoleErrors.join(' | '));
} finally {
  await browser.close();
  server.close();
}

console.log('');
console.log(failures === 0 ? 'all assembly checks passed' : failures + ' assembly check(s) failed');
process.exit(failures === 0 ? 0 : 1);
