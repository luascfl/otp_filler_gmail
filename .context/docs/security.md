---
type: doc
name: security
description: OAuth, sensitive data, permissions, and private distribution controls
category: security
generated: 2026-08-23
status: filled
scaffoldVersion: "2.0.0"
---
## Security and compliance notes

## Authentication

The extension uses `chrome.identity.launchWebAuthFlow` with Google's OAuth implicit flow and scope `https://www.googleapis.com/auth/gmail.readonly`.

- The OAuth access token expires after roughly one hour.
- Silent reauthentication uses `prompt=none` when the Google session is still available.
- A failed silent refresh requires the user to remove and re-add the Gmail account.
- Removing an account attempts Google's token revocation endpoint before local deletion.

## Sensitive data lifecycle

| Data | Storage | Lifetime |
| --- | --- | --- |
| Gmail account email and display name | `chrome.storage.local` | Until account removal |
| OAuth access token and expiry | `chrome.storage.session` | Browser session or account removal |
| Email subject, snippet, and body used for extraction | Memory only | Current fetch and extraction |
| Extracted OTP and seen message IDs | Memory only | Current popup or polling session |

No email content or token is written to project storage, analytics, or a project-owned server.

## Permissions

- `identity`: Google OAuth.
- `storage`: account metadata and session-only token state.
- `activeTab` and `scripting`: manual filler injection.
- `https://www.googleapis.com/*`: Gmail, user info, and token operations.
- `<all_urls>`: automatic OTP form detection and fill across websites.

Firefox's `data_collection_permissions.required` categories describe data processed locally for the extension feature. They do not add a network destination or analytics pipeline.

## Secret handling

- OAuth client JSON files match `*client_secret*.json` in `.gitignore`.
- AMO credentials are accepted only through `AMO_API_KEY` and `AMO_API_SECRET` environment variables.
- `dist/firefox` and `web-ext-artifacts` are generated from a fixed runtime allowlist. Credential JSON, `.context`, tests, logs, and repository metadata are excluded.
- Do not paste AMO JWT secrets into issues, commits, README examples, or shell history.

## Distribution trust

Regular Firefox requires Mozilla's signature for permanent installation. The project uses AMO's `unlisted` channel so the signed XPI can be distributed privately without a public listing. The signed XPI must be retained as the installable artifact and verified before use.
