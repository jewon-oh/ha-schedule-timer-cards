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

  // HA signs the user in through a nested lit/shadow form; Playwright handles
  // shadow DOM piercing by default for `page.fill`/`page.click` selectors.
  try {
    await page.fill('input[name="username"]', USER, { timeout: 8000 });
    await page.fill('input[name="password"]', PASS);
    // The submit button is an mwc-button inside <ha-auth-form>. Press Enter as a fallback.
    await page.keyboard.press("Enter");
    await page.waitForLoadState("networkidle");
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
