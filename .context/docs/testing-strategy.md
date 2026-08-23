---
type: doc
name: testing-strategy
description: Test and validation gates for Chrome and Firefox builds
category: testing
generated: 2026-08-23
status: filled
scaffoldVersion: "2.0.0"
---
## Testing strategy

Tests use Node's built-in `node:test` runner and remain co-located as `*.test.js` files.

## Automated contracts

- `background.test.js` covers OTP extraction, normalization, keyword prefiltering, and false-positive rejection.
- `popup.test.js` covers asynchronous clipboard behavior and stable success feedback.
- `firefox-manifest.test.js` covers the Firefox manifest runtime contract, permissions, stable add-on ID, OAuth client, and deterministic redirect URI.

Run all tests:

```bash
npm test
```

## Firefox quality gates

```bash
npm run build:firefox
npm run package:firefox
```

`build:firefox` stages the exact extension payload and runs `web-ext lint --warnings-as-errors`. A releasable source build requires zero errors, zero notices, and zero warnings.

`package:firefox` creates `web-ext-artifacts/otp-filler-gmail-firefox-1.2.1.zip`. This archive proves packaging and supports AMO submission, but it is not a permanent-install artifact.

## Release verification

1. Add the Firefox OAuth redirect URI to the Google Cloud Web application client.
2. Sign with `npm run sign:firefox` and AMO JWT credentials.
3. Install the signed XPI through `about:addons`.
4. Add a Gmail account and complete OAuth.
5. Open a page with a single OTP field and verify automatic fill.
6. Repeat with six one-character split fields.
7. Verify popup copy and manual `Fill & Submit` fallback.
8. Remove the account and confirm its token is revoked or expires naturally.

The signed-XPI smoke is the final browser gate. `web-ext lint` cannot prove OAuth or form interaction behavior by itself.
