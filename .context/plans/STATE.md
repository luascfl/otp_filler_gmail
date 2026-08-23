# Project state

## Current phase: Firefox private distribution completed

- Chrome 1.2.1 remains the published baseline.
- Firefox MV3 source uses `manifest-firefox-mv3.json` with stable add-on ID `otp-filler-gmail@luascfl.github.io`.
- Firefox OAuth redirect `https://b08a966e2cd56d5fdbe08615b80148bd4f58eaf3.extensions.allizom.org/` is registered on the Web application client.
- `npm test`: 25 tests passed on 2026-08-23.
- `web-ext lint`: zero errors, notices, and warnings.
- AMO approved version 1.2.1 on the `unlisted` channel and returned a signed XPI.
- The signed XPI has SHA-256 `dc4b3d98e742d5a13f5234c623dcffce696b5469131b4a1b8f06bfb05e67ad2c`.
- LibreWolf profile `ygo17afv.default-default` registered the add-on as active, enabled, and Mozilla-signed (`signedState: 2`).
- The owner confirmed Gmail OAuth and OTP behavior work in LibreWolf.
- A private GitHub release retains the signed XPI for authenticated installation.
