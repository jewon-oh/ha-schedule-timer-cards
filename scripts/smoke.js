// Headless smoke test: loads both preview pages and reports
// (a) version banner from console
// (b) any pageerror / console errors
// (c) whether the two custom elements actually rendered.
const { spawn } = require('child_process');
const http = require('http');
const path = require('path');
const { chromium } = require('playwright');

const rootDir = path.resolve(__dirname, '..');
const PORT = 8081;
const BASE = `http://localhost:${PORT}`;

function waitForServer(retries = 30) {
  return new Promise((resolve, reject) => {
    const attempt = () => {
      http.get(`${BASE}/`, () => resolve()).on('error', () => {
        if (retries-- <= 0) return reject(new Error('Server did not start'));
        setTimeout(attempt, 200);
      });
    };
    attempt();
  });
}

async function checkPage(page, urlPath, expectedTag) {
  const logs = [];
  const errors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') errors.push(`[console.error] ${msg.text()}`);
    else logs.push(`[${msg.type()}] ${msg.text()}`);
  });
  page.on('pageerror', err => errors.push(`[pageerror] ${err.message}`));

  await page.goto(`${BASE}${urlPath}`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2500);

  const present = await page.evaluate(tag => !!document.querySelector(tag), expectedTag);
  const hasShadow = await page.evaluate(tag => {
    const el = document.querySelector(tag);
    return !!(el && el.shadowRoot && el.shadowRoot.childElementCount > 0);
  }, expectedTag);
  return { urlPath, expectedTag, present, hasShadow, logs, errors };
}

(async () => {
  const httpServerBin = path.join(rootDir, 'node_modules/http-server/bin/http-server');
  const server = spawn('node', [httpServerBin, rootDir, '-p', String(PORT), '--silent'], {
    stdio: 'ignore',
    detached: false,
  });

  let browser;
  try {
    await waitForServer();
    browser = await chromium.launch();
    const ctx = await browser.newContext();
    const results = [];
    for (const target of [
      { url: '/dev/preview.html', tag: 'ha-custom-schedule-card' },
      { url: '/dev/preview-timer.html', tag: 'ha-custom-timer-card' },
    ]) {
      const page = await ctx.newPage();
      results.push(await checkPage(page, target.url, target.tag));
      await page.close();
    }

    let failed = false;
    for (const r of results) {
      console.log(`\n=== ${r.urlPath} ===`);
      console.log(`element <${r.expectedTag}>: present=${r.present}, shadowRoot=${r.hasShadow}`);
      const versionLine = r.logs.find(l => l.includes('ha-schedule-timer-cards'));
      console.log(`banner: ${versionLine || 'NOT FOUND'}`);
      if (r.errors.length) {
        console.log(`errors (${r.errors.length}):`);
        for (const e of r.errors) console.log('  -', e);
        failed = true;
      } else {
        console.log('errors: none');
      }
      if (!r.present || !r.hasShadow) failed = true;
    }

    console.log('\nResult:', failed ? 'FAIL' : 'PASS');
    process.exitCode = failed ? 1 : 0;
  } finally {
    if (browser) await browser.close();
    server.kill();
  }
})();
