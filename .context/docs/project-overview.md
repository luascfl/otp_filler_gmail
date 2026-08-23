---
type: doc
name: project-overview
description: High-level overview of the Gmail OTP browser extension
category: overview
generated: 2026-08-23
status: filled
scaffoldVersion: "2.0.0"
---
## Project overview

OTP Filler for Gmail is a Manifest V3 browser extension for Chrome and Firefox. It reads recent Gmail messages with the read-only Gmail API scope, extracts likely verification codes, detects OTP forms, and fills or submits them locally.

## Supported browsers and distribution

- Chrome uses `manifest.json` and the Chrome Web Store OAuth redirect.
- Firefox uses `manifest-firefox-mv3.json`, fixed add-on ID `otp-filler-gmail@luascfl.github.io`, and an AMO-signed unlisted XPI for private installation.
- The Firefox OAuth redirect is `https://b08a966e2cd56d5fdbe08615b80148bd4f58eaf3.extensions.allizom.org/`.

## Main components

- `background.js`: OAuth, token lifecycle, Gmail API access, OTP extraction, account management, and bounded polling.
- `content.js`: OTP field detection, polling trigger, code filling, and submit behavior.
- `popup.html`, `popup.js`, `popup.css`: account and code user interface.
- `manifest.json`: Chrome runtime contract.
- `manifest-firefox-mv3.json`: Firefox runtime, permissions, add-on identity, and Mozilla data declarations.

## Development commands

```bash
npm test
npm run build:firefox
npm run package:firefox
AMO_API_KEY='user:...' AMO_API_SECRET='...' npm run sign:firefox
```

`npm run package:firefox` creates an unsigned validation archive. Permanent Firefox installation requires the signed XPI returned by `npm run sign:firefox`.

## Current state

Firefox 1.2.1 is approved on AMO's `unlisted` channel. Its signed XPI is installed and active in the owner's default LibreWolf profile, Gmail OAuth and OTP behavior were confirmed by the owner, and the installable artifact is retained in a private GitHub release.
