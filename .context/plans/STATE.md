# Project state

## Current phase: Firefox private distribution

- Chrome 1.2.1 remains the published baseline.
- Firefox MV3 source uses `manifest-firefox-mv3.json` with stable add-on ID `otp-filler-gmail@luascfl.github.io`.
- Firefox OAuth redirect: `https://b08a966e2cd56d5fdbe08615b80148bd4f58eaf3.extensions.allizom.org/`.
- `npm test`: 25 tests passed on 2026-08-23.
- `npm run package:firefox`: web-ext lint returned zero errors, notices, and warnings, then created `web-ext-artifacts/otp-filler-gmail-firefox-1.2.1.zip`.
- Local Firefox launched and exposed its DevTools port, but RDP did not respond and the temporary add-on was not confirmed in the profile registry.

## Blocking prerequisites

1. Add the Firefox redirect URI to the Google Cloud Web application OAuth client in project `probable-life-428216-k8`.
2. Provide `AMO_API_KEY` and `AMO_API_SECRET` from the add-on owner's AMO account.
3. Run `npm run sign:firefox`, install the returned signed XPI, and complete the Gmail/form smoke test.
