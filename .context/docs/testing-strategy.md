---
type: doc
name: testing-strategy
description: Test frameworks, patterns, coverage requirements, and quality gates
category: testing
generated: 2026-07-23
status: filled
scaffoldVersion: "2.0.0"
---

# Testing strategy

Quality is maintained with focused Node tests plus manual Chrome smoke tests for extension behavior that depends on browser APIs. Security stories must validate the exact sensitive path they change.

## Test types

- Unit: `node --test`, files named `*.test.js`.
- Popup behavior: `popup.test.js` runs `popup.js` in a VM with fake DOM and Chrome APIs.
- OTP extraction: `background.test.js` covers parsing, filtering and false-positive cases.
- Manual smoke: load unpacked extension, authenticate with personal OAuth, fetch a recent OTP and fill a test page.

## Running tests

```bash
npm test
node --test background.test.js
node --test popup.test.js
```

No watch or coverage command is defined in `package.json`.

## Quality gates

- `npm test` must pass before a story is closed.
- Manifest permissions must stay limited to `identity`, `storage`, `activeTab`, `scripting` and Google API host permissions unless a story explicitly changes that contract.
- No new remote endpoint is allowed without updating privacy docs and PRD risk notes.
- No auto-submit or implicit clipboard behavior should be introduced in the hardened fork.

## Troubleshooting

If browser behavior cannot be covered by Node tests, record the manual smoke path in `.context/plans/STATE.md` with the tested browser, page and result.
