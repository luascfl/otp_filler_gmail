---
type: doc
name: development-workflow
description: Day-to-day engineering processes, branching, and contribution guidelines
category: workflow
generated: 2026-07-23
status: filled
scaffoldVersion: "2.0.0"
---

# Development workflow

Work in small security-focused stories. Each story must have a single owner, explicit DoD, observable validation and an update to `.context/plans/STATE.md` or `.context/workflow/prd.json` when state changes.

## Branching and releases

- Upstream remote starts at `jiahongc/otp-filler-for-gmail-extension`.
- Personal fork work should happen on focused branches after Lucas creates or points a fork remote.
- Do not publish store artifacts until OAuth, permissions, clipboard and fill behavior are audited.
- Keep `manifest.json` untracked because it contains the personal OAuth client ID.

## Local development

```bash
npm install
npm test
cp manifest.example.json manifest.json
```

Then edit `manifest.json` with a personal OAuth client ID and load the repository through `chrome://extensions` as an unpacked extension.

## Code review expectations

Review security-sensitive changes first: Gmail scope, token storage, remote endpoints, clipboard writes, content-script injection and any automatic click/submit behavior. A change is not complete until the relevant tests or smoke scenario proves the DoD.

## Onboarding tasks

Start with `README.md`, `.context/docs/project-overview.md`, `.context/plans/PROJECT.md`, `.context/workflow/prd.json` and the current story in `.context/plans/STATE.md`.
