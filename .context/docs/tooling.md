---
type: doc
name: tooling
description: Scripts, IDE settings, automation, and developer productivity tips
category: tooling
generated: 2026-07-23
status: filled
scaffoldVersion: "2.0.0"
---

# Tooling and productivity guide

This project deliberately uses a small toolchain. Prefer direct JavaScript, extension APIs and `node --test` over new build layers.

## Required tooling

- Node.js and npm: install dependencies and run tests.
- Chromium browser: load and smoke test the unpacked extension.
- Google Cloud Console: create the personal OAuth client with Gmail API enabled.
- AI Coders Context: `.context/docs` technical context.
- GSD: `.context/plans` milestones and decisions.
- Ralph-style workflow: `.context/workflow/prd.json` story state and DoD.
- Graphify: `.context/graphify-out` structural graph when code changes affect architecture or cross-module relationships.

## Recommended automation

```bash
npm test
graphify update .
```

Run Graphify after code changes when the graph tool is available. Keep generated context inside `.context`; do not create `.context/skills` or `.context/agents` for this project.

## IDE/editor setup

Use plain JavaScript syntax highlighting. There is no TypeScript, bundler or formatter configuration in the upstream project.

## Productivity tips

Keep `manifest.json` local and untracked. Use `manifest.example.json` as the reviewable template. Avoid adding scripts for one-off diagnostics unless they become part of the canonical workflow.
