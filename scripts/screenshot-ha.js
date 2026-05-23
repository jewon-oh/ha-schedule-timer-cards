// Capture a screenshot of a real Home Assistant dashboard page.
//
// Usage:
//   HA_USER=admin HA_PASS=hunter2 npm run screenshot:ha
//   HA_USER=admin HA_PASS=hunter2 npm run screenshot:ha -- /dashboard-test/0
//
// Optional env:
//   HA_BASE_URL  (default http://localhost:8123)
//   HA_OUTPUT    (default assets/dashboard.png)
//
// Notes:
//   - Credentials are read from environment only, never written to disk
//     or committed. Use a .env or shell export before running.
//   - The script signs in through the standard HA username/password
//     auth_provider; storage state is kept in-process and discarded.
//   - If a <ha-custom-schedule-card> or <ha-custom-timer-card> exists
//     on the page, it'll also be captured separately into the assets/
//     folder for use in the README.

const path = require("path");
const { chromium } = require("playwright");

const BASE = process.env.HA_BASE_URL || "http://localhost:8123";
const USER = process.env.HA_USER || "";
const PASS = process.env.HA_PASS || "";
const TARGET = process.argv[2] || "/dashboard-test/0";
const OUT = process.env.HA_OUTPUT || path.join(__dirname, "..", "assets", "dashboard.png");

if (!USER || !PASS) {
  console.error("HA_USER and HA_PASS must be set in the environment. Aborting.");
  process.exit(2);
}

(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({
    deviceScaleFactor: 2,
    viewport: { width: 1280, height: 1600 },
  });
  const page = await ctx.newPage();
  page.on("pageerror", (e) => console.warn("PAGE ERROR:", e.message));
  page.on("console", (m) => {
    if (m.type() === "error") console.warn("console.error:", m.text());
  });

  console.log(`[ha-screenshot] BASE=${BASE} TARGET=${TARGET}`);
  console.log("[ha-screenshot] Navigating to root and signing in…");
  await page.goto(`${BASE}/`, { waitUntil: "networkidle" });

  // HA's login form lives inside ha-authorize > ha-auth-flow > ha-form. The
  // input elements don't carry a `name="username"`/`name="password"` attribute
  // (HA uses ha-form-string with auto-generated ids), so we target by input
  // ordering + type. Playwright pierces shadow DOM by default.
  try {
    const userInput = page.locator('input').first();
    const passInput = page.locator('input[type="password"]').first();
    await userInput.waitFor({ state: "visible", timeout: 10000 });
    await userInput.fill(USER);
    await passInput.fill(PASS);

    // Submit: prefer the mwc-button, fall back to Enter on the password input.
    const submit = page.locator(
      'mwc-button[raised], mwc-button:has-text("로그인"), mwc-button:has-text("Log in"), button[type="submit"]'
    ).first();
    if (await submit.count()) {
      await submit.click();
    } else {
      await passInput.press("Enter");
    }
    // Wait for the auth redirect to settle.
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(1500);
  } catch (e) {
    console.warn("[ha-screenshot] login form filling failed:", e.message);
    console.warn("[ha-screenshot] continuing in case the session was already valid.");
  }

  console.log(`[ha-screenshot] Navigating to ${TARGET}…`);
  await page.goto(`${BASE}${TARGET}`, { waitUntil: "networkidle" });
  await page.waitForTimeout(2500);

  console.log(`[ha-screenshot] Capturing full page -> ${OUT}`);
  await page.screenshot({ path: OUT, fullPage: true });

  for (const tag of ["ha-custom-schedule-card", "ha-custom-timer-card"]) {
    const handle = await page.$(tag);
    if (!handle) continue;
    const fname = path.join(
      __dirname,
      "..",
      "assets",
      tag === "ha-custom-schedule-card" ? "preview.png" : "preview-timer.png",
    );
    console.log(`[ha-screenshot] ${tag} found -> ${fname}`);
    try {
      await handle.screenshot({ path: fname });
    } catch (e) {
      console.warn(`[ha-screenshot] failed to capture ${tag}:`, e.message);
    }
  }

  await browser.close();
  console.log("[ha-screenshot] Done.");
})();
