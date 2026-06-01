<!--
Thanks for the contribution! A few things to keep in mind:
- Keep the title in conventional-commit form, e.g. `feat(schedule): ...`,
  `fix(timer): ...`, `refactor(turn-on): ...`. The release notes are
  generated from commit subjects via git-cliff.
- Run `pnpm run build` + `pnpm run smoke` locally before pushing.
- Do not bump the version in this PR — `scripts/release.js` handles that
  in a follow-up release commit on master.
-->

## Summary

<!-- One or two sentences: what changes and why. Link related issues. -->

Closes #

## Type of change

- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (config schema, behavior, or HA API surface changes)
- [ ] Refactor / chore / docs only (no user-visible change)

## Affected cards

- [ ] Schedule card (`ha-custom-schedule-card`)
- [ ] Timer card (`ha-custom-timer-card`)
- [ ] Turn-On Schedule card (`ha-custom-turn-on-card`)
- [ ] Bridge blueprints (`ha-config/blueprints/automation/jewon-oh/...`)
- [ ] Editor / wizard
- [ ] Build / tooling only

## Test plan

<!--
Manual checklist — what to verify before merging. Cards are UI-heavy with
HA-side side effects, so call out the exact thing you ran in HA.
Replace these with the specific scenarios you tested.
-->

- [ ] `pnpm run build` succeeds
- [ ] `pnpm run smoke` reports PASS for both preview pages
- [ ] Loaded the new bundle in HA and exercised the affected card(s)
- [ ] Verified on both Korean and English HA locales (UI text + format)
- [ ] Verified on mobile (HA Companion or Chrome devtools mobile view) if the
      change touches pointer / touch handling

## Screenshots / GIFs

<!--
Especially for visible changes. Before/after if relevant.
Drop images directly in the PR — GitHub uploads them.
-->

## Notes for reviewers

<!--
Anything non-obvious: design tradeoffs you considered, migrations for
existing users, follow-ups left as TODO, etc.
-->
