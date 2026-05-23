const { chromium } = require('playwright');
const path = require('path');

(async () => {
  console.log("Starting browser...");
  const browser = await chromium.launch();
  const context = await browser.newContext({ deviceScaleFactor: 2 });
  const page = await context.newPage();

  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', error => console.log('PAGE ERROR:', error.message));

  const width = 600;

  // 1. Timer screenshot
  console.log("Navigating to Timer Preview...");
  await page.setViewportSize({ width, height: 1000 });
  await page.goto('http://localhost:8080/dev/preview-timer.html', { waitUntil: 'networkidle' });
  await page.waitForTimeout(3500);

  const timerClip = await page.evaluate(() => {
    const card = document.querySelector('ha-custom-timer-card');
    if (!card) return null;
    const rect = card.getBoundingClientRect();
    return { x: rect.x, y: rect.y, width: rect.width, height: rect.height };
  });
  console.log("Timer Clip:", timerClip);
  if (timerClip && timerClip.width > 0) {
    await page.screenshot({
      path: path.join(__dirname, '..', 'assets', 'preview-timer.png'),
      clip: timerClip,
      scale: 'device'
    });
  } else {
    await page.screenshot({ path: path.join(__dirname, '..', 'assets', 'preview-timer-fallback.png') });
  }

  // 2. Schedule screenshot - 첫 번째 블록을 선택해서 핸들/라벨/삭제버튼이 보이도록
  console.log("Navigating to Schedule Preview...");
  await page.setViewportSize({ width, height: 1100 });
  await page.goto('http://localhost:8080/dev/preview.html', { waitUntil: 'networkidle' });
  await page.waitForTimeout(3500);

  // 첫 번째 editor-block을 클릭하여 선택 상태로 만든다
  await page.evaluate(() => {
    const card = document.querySelector('ha-custom-schedule-card');
    if (!card?.shadowRoot) return;
    const firstBlock = card.shadowRoot.querySelector('.editor-block:not(.pending)');
    if (firstBlock) firstBlock.click();
  });
  await page.waitForTimeout(500);

  const scheduleClip = await page.evaluate(() => {
    const card = document.querySelector('ha-custom-schedule-card');
    if (!card) return null;
    const rect = card.getBoundingClientRect();
    return { x: rect.x, y: rect.y, width: rect.width, height: rect.height };
  });
  console.log("Schedule Clip:", scheduleClip);
  if (scheduleClip && scheduleClip.width > 0) {
    await page.screenshot({
      path: path.join(__dirname, '..', 'assets', 'preview.png'),
      clip: scheduleClip,
      scale: 'device'
    });
  } else {
    await page.screenshot({ path: path.join(__dirname, '..', 'assets', 'preview-fallback.png') });
  }

  await browser.close();
  console.log("Done!");
})();
