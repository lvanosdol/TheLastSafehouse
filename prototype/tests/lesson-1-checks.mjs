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
      if (el.labels && el.labels.length) return el.labels[0].textContent.trim();
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
  check('Fifth Tab reaches the safety note', (await activeId()) === 'safety-toggle');

  await page.keyboard.press('Tab');
  const sixth = await page.evaluate(() => document.activeElement.tagName.toLowerCase());
  check('Sixth Tab reaches the first part entry in the guide', sixth === 'summary', sixth);

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

  // ---- 9. the matching board ----------------------------------------------

  const board = await page.evaluate(() => {
    const cards = Array.from(document.querySelectorAll('.part-card'));
    const slots = Array.from(document.querySelectorAll('.slot'));
    return {
      cards: cards.length,
      slots: slots.length,
      cardsNamed: cards.every((card) => card.textContent.trim().length > 2),
      slotsNamed: slots.every((slot) => slot.querySelector('.slot-purpose').textContent.trim().length > 20),
      described: slots.every((slot) => {
        const id = slot.getAttribute('aria-describedby');
        return Boolean(id) && Boolean(document.getElementById(id));
      }),
      empty: slots.every((slot) => /Nothing matched yet/.test(slot.textContent)),
    };
  });

  check('The board offers eight parts', board.cards === 8, String(board.cards));
  check('The board offers eight purposes', board.slots === 8, String(board.slots));
  check('Every part has a visible name', board.cardsNamed);
  check('Every purpose states what it does', board.slotsNamed);
  check('Every purpose is tied to its own feedback line', board.described);
  check('The board starts empty', board.empty);

  async function pickUp(partId) {
    await page.focus('.part-card[data-part="' + partId + '"]');
    await page.keyboard.press('Enter');
    await sleep(60);
  }

  async function dropOn(purposeId) {
    await page.focus('.slot[data-purpose="' + purposeId + '"]');
    await page.keyboard.press('Enter');
    await sleep(80);
  }

  async function checkAnswers() {
    await page.focus('#match-form button[type="submit"]');
    await page.keyboard.press('Enter');
    await sleep(150);
  }

  const slotText = (id) => page.$eval('.slot[data-purpose="' + id + '"]', (el) => el.textContent.trim());

  // ---- 9b. the purposes are scrambled, and stay scrambled -----------------

  const order = () =>
    page.evaluate(() => ({
      parts: Array.from(document.querySelectorAll('.part-card')).map((card) => card.getAttribute('data-part')),
      purposes: Array.from(document.querySelectorAll('.slot')).map((slot) => slot.getAttribute('data-purpose')),
    }));

  const firstOrder = await order();

  const fixedPoints = firstOrder.purposes.filter(
    (purpose, index) => purpose === firstOrder.parts[index]
  );
  check(
    'No purpose sits opposite its own part',
    fixedPoints.length === 0,
    'aligned: ' + fixedPoints.join(', ')
  );

  const isRotation = [1, 2, 3, 4, 5, 6, 7].some((shift) =>
    firstOrder.purposes.every(
      (purpose, index) => purpose === firstOrder.parts[(index + shift) % firstOrder.parts.length]
    )
  );
  check('The purposes are not the parts shifted along', !isRotation);

  await page.reload({ waitUntil: 'load' });
  await sleep(700);
  const secondOrder = await order();
  check(
    'A reload reorders the purposes rather than repeating them',
    firstOrder.purposes.join(',') !== secondOrder.purposes.join(','),
    secondOrder.purposes.join(',')
  );

  // ---- 9c. the safety note ------------------------------------------------

  const note = await page.evaluate(() => {
    const section = document.querySelector('.note');
    const guideHeading = document.getElementById('guide-heading');
    return {
      present: Boolean(section),
      visible: Boolean(section) && section.offsetParent !== null,
      aboveTheParts:
        Boolean(section) &&
        section.compareDocumentPosition(guideHeading) === Node.DOCUMENT_POSITION_FOLLOWING,
      rules: section ? section.querySelectorAll('li').length : 0,
      disclaimer: section ? section.querySelector('.disclaimer').textContent.trim() : '',
      title: section ? section.querySelector('.note-title').textContent.trim() : '',
    };
  });

  check('The safety note is on the page', note.present);
  check('The note starts open', note.visible);

  const noteState = () =>
    page.evaluate(() => ({
      expanded: document.getElementById('safety-toggle').getAttribute('aria-expanded'),
      bodyShown: !document.getElementById('safety-body').hidden,
      rules: document.querySelectorAll('#safety-body li').length,
    }));

  check(
    'The note says it is expanded to a screen reader',
    (await noteState()).expanded === 'true' && (await noteState()).bodyShown
  );

  await page.focus('#safety-toggle');
  await page.keyboard.press('Enter');
  await sleep(120);
  const collapsed = await noteState();
  check('The note can be folded away once read', collapsed.expanded === 'false' && !collapsed.bodyShown);
  check('Folding it away is announced', /collapsed/i.test(await page.$eval('#announcer', (el) => el.textContent)), await page.$eval('#announcer', (el) => el.textContent));

  await page.keyboard.press('Enter');
  await sleep(120);
  const reopened = await noteState();
  check('And opened again, with the rules intact', reopened.expanded === 'true' && reopened.bodyShown && reopened.rules === 5);
  check('The note comes before the parts', note.aboveTheParts);
  check('The note names itself', /safety/i.test(note.title), note.title);
  check('The note lists the five rules', note.rules === 5, String(note.rules));
  check(
    'The note says it is not a dismantling guide',
    /not a guide to dismantling your own computer/.test(note.disclaimer),
    note.disclaimer
  );

  // ---- 10. keyboard: pick up, move, place ---------------------------------

  await pickUp('ram');
  const pickedUp = await page.evaluate(() => ({
    pressed: document.querySelector('.part-card[data-part="ram"]').getAttribute('aria-pressed'),
    said: document.getElementById('announcer').textContent.trim(),
  }));
  check('Enter picks a part up', pickedUp.pressed === 'true');

  await sleep(80);
  const pickAnnouncement = await page.$eval('#announcer', (el) => el.textContent.trim());
  check('Picking up is announced with what to do next', /picked up/.test(pickAnnouncement), pickAnnouncement);

  await dropOn('ram');
  check('Enter on a purpose places the part', /Matched: RAM/.test(await slotText('ram')), await slotText('ram'));

  const focusAfterPlacing = await page.evaluate(() => document.activeElement.getAttribute('data-purpose'));
  check('Focus stays on the purpose that received the part', focusAfterPlacing === 'ram', String(focusAfterPlacing));

  const cardHidden = await page.evaluate(
    () => document.querySelector('.part-card[data-part="ram"]').classList.contains('used')
  );
  check('A placed part leaves the pool', cardHidden);

  // ---- 11. drag and drop --------------------------------------------------

  const dragged = await page.evaluate(() => {
    const card = document.querySelector('.part-card[data-part="cooling"]');
    const slot = document.querySelector('.slot[data-purpose="cooling"]');
    const data = new DataTransfer();
    card.dispatchEvent(new DragEvent('dragstart', { bubbles: true, cancelable: true, dataTransfer: data }));
    slot.dispatchEvent(new DragEvent('dragover', { bubbles: true, cancelable: true, dataTransfer: data }));
    slot.dispatchEvent(new DragEvent('drop', { bubbles: true, cancelable: true, dataTransfer: data }));
    return slot.textContent.trim();
  });
  check('Dragging a part onto a purpose matches them', /Matched: Cooling/.test(dragged), dragged);

  // ---- 12. a wrong answer names the mistake, and costs nothing ------------

  // Take RAM off, then put it on Storage's purpose on purpose.
  await dropOn('ram');
  const returned = await page.evaluate(() => ({
    text: document.querySelector('.slot[data-purpose="ram"]').textContent.trim(),
    cardVisible: !document.querySelector('.part-card[data-part="ram"]').classList.contains('used'),
  }));
  check('Enter on a filled purpose returns the part', /Nothing matched yet/.test(returned.text) && returned.cardVisible, returned.text);

  await pickUp('ram');
  await dropOn('storage');
  check('A part can be put on the wrong purpose', /Matched: RAM/.test(await slotText('storage')));

  await checkAnswers();

  const wrongAnswer = await page.evaluate(() => ({
    summary: document.getElementById('match-summary').textContent.trim(),
    feedback: document.getElementById('feedback-storage').textContent.trim(),
    focused: document.activeElement.id === 'match-summary',
  }));

  check('The result takes focus, so it is heard', wrongAnswer.focused);
  check('The summary says where the mistake is', /RAM is on the wrong purpose/.test(wrongAnswer.summary), wrongAnswer.summary);
  check(
    'The wrong purpose names itself, the part and the part\'s real job',
    /Not yet/.test(wrongAnswer.feedback) && /Storage's job/.test(wrongAnswer.feedback) && /RAM: Temporary working memory/.test(wrongAnswer.feedback),
    wrongAnswer.feedback
  );

  // ---- 13. free retry, no reset ------------------------------------------

  await dropOn('storage');
  await pickUp('ram');
  await dropOn('ram');

  for (const partId of ['motherboard', 'processor', 'storage', 'power', 'graphics', 'case']) {
    await pickUp(partId);
    await dropOn(partId);
  }

  await checkAnswers();

  const solved = await page.evaluate(() => ({
    summary: document.getElementById('match-summary').textContent.trim(),
    next: document.getElementById('next-step').textContent.trim(),
    focused: document.activeElement.id === 'match-summary',
  }));
  check('Eight correct placements are accepted after a mistake', /All 8 matched/.test(solved.summary), solved.summary);
  check('The result takes focus, so it is heard', solved.focused);
  check('The next step is named once the parts match', /rebuild/i.test(solved.next), solved.next);

  // ---- 14. clearing ------------------------------------------------------

  await page.focus('#match-reset');
  await page.keyboard.press('Enter');
  await sleep(150);

  const cleared = await page.evaluate(() => ({
    summary: document.getElementById('match-summary').textContent.trim(),
    emptied: Array.from(document.querySelectorAll('.slot')).every((slot) => /Nothing matched yet/.test(slot.textContent)),
    cardsBack: Array.from(document.querySelectorAll('.part-card')).every((card) => !card.classList.contains('used')),
    guide: document.querySelectorAll('.guide details').length,
  }));

  check('Clearing empties every purpose', cleared.emptied);
  check('Clearing returns every part to the pool', cleared.cardsBack);
  check('Clearing says so', /Answers cleared/.test(cleared.summary), cleared.summary);
  check('Clearing keeps the guide', cleared.guide === 8, String(cleared.guide));

  await page.focus('#match-form button[type="submit"]');
  await page.keyboard.press('Enter');
  await sleep(150);
  const blankCheck = await page.$eval('#match-summary', (el) => el.textContent.trim());
  check('Checking an empty board asks for every part by name', /Still to place:/.test(blankCheck) && /Motherboard/.test(blankCheck), blankCheck);

  // ---- 15. preferences and errors -----------------------------------------

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
