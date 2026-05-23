// One-shot release helper.
//
// Usage:
//   node scripts/release.js patch          # 1.4.1 -> 1.4.2
//   node scripts/release.js minor          # 1.4.1 -> 1.5.0
//   node scripts/release.js major          # 1.4.1 -> 2.0.0
//   node scripts/release.js patch --push   # also push branch + tag to origin
//   node scripts/release.js 1.5.0-beta.1   # explicit version
//
// What it does, in order:
//   1. Validates the working tree (must be clean, branch must be master).
//   2. Computes the next version from the bump arg (or accepts an explicit
//      X.Y.Z[-pre] string).
//   3. Writes the new version into package.json and the runtime banner in
//      src/timer-schedule-card.ts.
//   4. Runs npm run build + npm run smoke to make sure the bump bundles.
//   5. Stages the changed files, commits as "release: vX.Y.Z", tags vX.Y.Z.
//   6. (Optional, --push) pushes both master and the tag to origin, which
//      triggers .github/workflows/release.yml to draft the GitHub Release
//      with git-cliff notes and the built bundle attached.

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const ROOT = path.resolve(__dirname, "..");
const PKG = path.join(ROOT, "package.json");
const ENTRY = path.join(ROOT, "src/timer-schedule-card.ts");

function sh(cmd, opts = {}) {
  return execSync(cmd, { cwd: ROOT, stdio: "pipe", encoding: "utf-8", ...opts }).trim();
}

function shInherit(cmd) {
  execSync(cmd, { cwd: ROOT, stdio: "inherit" });
}

function abort(msg) {
  console.error(`✗ ${msg}`);
  process.exit(1);
}

// ── parse args ──────────────────────────────────────────────────────────
const args = process.argv.slice(2);
const push = args.includes("--push");
const bumpOrVer = args.find((a) => !a.startsWith("-"));
if (!bumpOrVer) {
  abort("usage: node scripts/release.js <patch|minor|major|X.Y.Z[-pre]> [--push]");
}

// ── load current version ────────────────────────────────────────────────
const pkg = JSON.parse(fs.readFileSync(PKG, "utf-8"));
const current = pkg.version;
const m = current.match(/^(\d+)\.(\d+)\.(\d+)/);
if (!m) abort(`package.json has non-semver version: ${current}`);
const [, maj, min, pat] = m.map((v, i) => (i === 0 ? v : Number(v)));

// ── compute next version ────────────────────────────────────────────────
let next;
if (/^\d+\.\d+\.\d+(?:[-+].+)?$/.test(bumpOrVer)) {
  next = bumpOrVer;
} else if (bumpOrVer === "major") {
  next = `${maj + 1}.0.0`;
} else if (bumpOrVer === "minor") {
  next = `${maj}.${min + 1}.0`;
} else if (bumpOrVer === "patch") {
  next = `${maj}.${min}.${pat + 1}`;
} else {
  abort(`unknown bump: ${bumpOrVer} (expected patch|minor|major or X.Y.Z)`);
}

if (next === current) abort(`computed version ${next} == current ${current}`);
console.log(`◯ ${current}  →  ${next}`);

// ── pre-flight checks ───────────────────────────────────────────────────
const branch = sh("git rev-parse --abbrev-ref HEAD");
if (branch !== "master" && branch !== "main") {
  abort(`branch is ${branch}, expected master/main. Switch branches before releasing.`);
}
const dirty = sh("git status --porcelain");
if (dirty) abort(`working tree is dirty:\n${dirty}\nCommit or stash first.`);
const existingTag = sh(`git tag --list v${next}`);
if (existingTag) abort(`tag v${next} already exists locally`);

// ── apply version changes ───────────────────────────────────────────────
pkg.version = next;
fs.writeFileSync(PKG, JSON.stringify(pkg, null, 2) + "\n");
console.log(`✓ package.json @ ${next}`);

const entryText = fs.readFileSync(ENTRY, "utf-8");
const bannerRe = /(%c\[schedule-ui\] v)\d+\.\d+\.\d+[^\s"]*( loaded)/;
if (!bannerRe.test(entryText)) abort(`banner string not found in ${path.relative(ROOT, ENTRY)}`);
fs.writeFileSync(ENTRY, entryText.replace(bannerRe, `$1${next}$2`));
console.log(`✓ src banner @ v${next}`);

// ── build + smoke ───────────────────────────────────────────────────────
console.log("→ npm run build");
shInherit("npm run build");
console.log("→ npm run smoke");
shInherit("npm run smoke");

// ── commit + tag ────────────────────────────────────────────────────────
shInherit(`git add package.json src/timer-schedule-card.ts timer-schedule-card.js`);
shInherit(`git commit -m "release: v${next}"`);
shInherit(`git tag v${next}`);
console.log(`✓ tagged v${next} locally`);

// ── optional push ───────────────────────────────────────────────────────
if (push) {
  shInherit(`git push origin ${branch}`);
  shInherit(`git push origin v${next}`);
  console.log("✓ pushed branch + tag — GitHub Actions will draft the release");
} else {
  console.log(`\nTo publish:\n  git push origin ${branch} && git push origin v${next}`);
}
