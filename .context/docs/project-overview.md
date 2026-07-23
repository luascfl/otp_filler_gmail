---
type: doc
name: project-overview
description: High-level overview of the project, its purpose, and key components
category: overview
generated: 2026-07-23
status: filled
scaffoldVersion: "2.0.0"
---

# Project overview

This repository is a personal security-first fork of `jiahongc/otp-filler-for-gmail-extension`. It is a Chromium extension that reads recent Gmail messages through the Gmail API, extracts one-time login codes, and fills OTP inputs only when the user explicitly asks.

> Detailed analysis: for symbol counts, entry points and code structure, see [`codebase-map.json`](./codebase-map.json).

## Quick facts

- Root: `/home/lucas/Downloads/extension_manager`
- Primary language: JavaScript
- Runtime targets: Chromium Manifest V3 service worker, popup UI and injected content script
- Package manager: npm
- Test runner: Node.js built-in `node --test`
- Full analysis: [`codebase-map.json`](./codebase-map.json)

## Entry points

- [`background.js`](../../background.js) handles OAuth, Gmail API calls, OTP extraction and extension messages.
- [`popup.js`](../../popup.js) renders the popup, account controls, code list and fill/copy actions.
- [`content.js`](../../content.js) is injected on demand into the active tab to detect and fill OTP fields.
- [`manifest.example.json`](../../manifest.example.json) declares Manifest V3 permissions, OAuth client configuration and extension metadata.

## Key exports

The only CommonJS exports are test-facing helpers from `background.js`: `extractOTP`, `looksLikeOTPEmail`, `normalizeOTP`, `scoreOTPCandidate` and `stripHtml`. See [`codebase-map.json`](./codebase-map.json) for the complete symbol map.

## File structure and code organization

- `background.js` contains Gmail/OAuth logic and message dispatch.
- `content.js` contains page-level field detection and OTP filling.
- `popup.html`, `popup.css`, `popup.js` define the browser action UI.
- `background.test.js` and `popup.test.js` cover extraction and popup behavior.
- `icons/` contains generated extension icons.
- `privacy-policy/` and `STORE_LISTING.md` are store/privacy artifacts from upstream.
- `.context/docs/` is the AI Coders Context technical documentation.
- `.context/plans/` is the GSD macro plan.
- `.context/workflow/` is the Ralph-style story, DoD and validation state.

## Technology stack summary

The project is plain JavaScript with no build step. It uses Chrome extension APIs, Gmail API OAuth scope `https://www.googleapis.com/auth/gmail.readonly`, and Node's built-in test runner. The security model depends on local-only processing, short-lived tokens in `chrome.storage.session`, and avoiding automatic sensitive actions unless explicitly approved.

## Getting started checklist

1. Install dependencies with `npm install`.
2. Copy `manifest.example.json` to `manifest.json` and add a personal Google OAuth client ID.
3. Run `npm test` before loading the extension.
4. Load the repository as an unpacked extension in `chrome://extensions`.
5. Validate security-sensitive changes against `.context/workflow/prd.json` and `.context/plans/STATE.md`.
