# OTP Filler for Gmail

Chrome and Firefox extension that automatically extracts verification codes from Gmail and fills them into web forms.

## Features

- **Multi-account** — Add multiple Gmail accounts and switch between them
- **Auto-detect OTPs** — Scans recent emails for numeric, alphanumeric, and hyphenated verification codes
- **Auto-copy** — Copies the latest code to your clipboard when you open the popup
- **Auto-fill & submit** — Fills the code into the page's OTP field and clicks the submit button
- **Smart detection** — Finds OTP input fields using W3C standards, name/placeholder heuristics, and nearby label text
- **Automatic OTP watch** — Detects OTP fields and polls Gmail for up to three minutes while a login form is waiting
- **Manual fallback** — The popup still lets you copy a code or trigger **Fill & Submit**

## Setup

### 1. Clone the repo

```bash
git clone https://github.com/jiahongc/otp-filler-for-gmail-extension.git
```

### 2. Load the extension

1. Open Chrome and go to `chrome://extensions`
2. Enable **Developer mode** (top-right toggle)
3. Click **Load unpacked** and select the cloned folder
4. Note the **Extension ID** shown on the card (e.g. `abcdefghijklmnopqrstuvwxyzabcdef`)

### 3. Set up Google Cloud OAuth

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project (or use an existing one)
3. Enable the **Gmail API**: APIs & Services > Library > search "Gmail API" > Enable
4. Configure the **OAuth consent screen**: APIs & Services > OAuth consent screen
   - Choose "External" user type
   - Fill in app name, support email, and developer contact
   - Add scope: `https://www.googleapis.com/auth/gmail.readonly`
   - Add your Google account as a test user
5. Create credentials: APIs & Services > Credentials > Create Credentials > **OAuth client ID**
   - Application type: **Web application**
   - Under Authorized redirect URIs, add: `https://YOUR_EXTENSION_ID.chromiumapp.org/`
   - Replace `YOUR_EXTENSION_ID` with the ID from step 2
6. Copy the generated **Client ID**

### 4. Add your Client ID

Copy the example manifest and add your client ID:

```bash
cp manifest.example.json manifest.json
```

Then open `manifest.json` and replace the `client_id` value:

```json
"oauth2": {
  "client_id": "YOUR_CLIENT_ID.apps.googleusercontent.com",
  "scopes": ["https://www.googleapis.com/auth/gmail.readonly"]
}
```

> `manifest.json` is gitignored so your client ID stays local.

### 5. Reload the extension

Go to `chrome://extensions` and click the refresh icon on the extension card.

### Firefox private installation

Firefox uses `manifest-firefox-mv3.json`, the stable add-on ID
`otp-filler-gmail@luascfl.github.io`, and this Google OAuth redirect URI:

```text
https://b08a966e2cd56d5fdbe08615b80148bd4f58eaf3.extensions.allizom.org/
```

Add that URI to the same **Web application** OAuth client in Google Cloud before
signing. Then build and validate the private package:

```bash
npm run package:firefox
```

Permanent installation on regular Firefox requires Mozilla's signature. Create
JWT credentials at [addons.mozilla.org](https://addons.mozilla.org/developers/addon/api/key/),
keep them outside the repository, and sign on the unlisted channel:

```bash
AMO_API_KEY='user:...' AMO_API_SECRET='...' npm run sign:firefox
```

Install the resulting signed `.xpi` from `about:addons` using
**Install Add-on From File**. An unlisted add-on is signed for private
distribution and does not appear in AMO search.

## Usage

1. Click the extension icon in your toolbar
2. Click **+ Add Gmail Account** and sign in with Google
3. Add more accounts with the **+** button in the header
4. When a verification email arrives, click the extension icon — codes appear automatically
5. Click a code card to copy it, or click **Fill & Submit** to auto-fill the page

## How it works

| Component | Role |
|-----------|------|
| `background.js` | Chrome service worker / Firefox background script — manages multi-account OAuth, fetches recent emails via Gmail API, extracts OTP codes |
| `content.js` | Detects OTP fields, starts a bounded Gmail polling window, fills values, and auto-clicks submit buttons |
| `popup.html/js/css` | Extension popup — account management, code display, copy/fill actions |

### OTP detection

- Scans the last 10 emails from the past 10 minutes (across all added accounts)
- Filters by subject/snippet keywords: `code`, `OTP`, `verification`, `passcode`, `PIN`, `confirmation`, `sign-in`, `login`, `security`, `activation`
- Extracts 4-10 character codes (numeric, alphanumeric, hyphenated, and letter-prefixed like Google's `G-123456`) anchored to keywords
- Handles space-grouped codes (`823 815`), quoted codes (`"521992"`), and codes separated from keywords by natural language (e.g. "password. Use it to log in: 973230")

### Field detection

- Matches `autocomplete="one-time-code"` first (W3C standard)
- Falls back to `name`, `placeholder`, `aria-label` containing OTP keywords
- Also matches short inputs (maxlength 4-8) near OTP-related labels

### Auto-submit

After filling the code, the extension looks for nearby submit/verify/confirm buttons and clicks them automatically.

## Permissions

| Permission | Why |
|------------|-----|
| `identity` | OAuth sign-in via `launchWebAuthFlow` |
| `gmail.readonly` | Read emails to extract verification codes |
| `storage` | Persist the account list (emails only); access tokens stay in memory-only session storage |
| `activeTab` + `scripting` | Re-inject the filler on demand when **Fill & Submit** is clicked |
| `<all_urls>` | Detect OTP forms automatically and fill a newly received code on the page that requested it |

The extension **never sends** your emails or tokens to any external server. All processing happens locally.

## Security & Privacy

- **Local-only processing** — All email fetching, OTP extraction, and form filling happens entirely on your device. No data is sent to any external server.
- **Read-only Gmail access** — The extension requests `gmail.readonly`; it cannot send, delete, or modify email.
- **Short-lived tokens, never on disk** — OAuth2 access tokens expire after 1 hour and are refreshed silently. Tokens are held only in `chrome.storage.session` (in-memory, cleared when the browser exits) and are revoked when you remove an account. Only account emails are persisted to `chrome.storage.local`.
- **Extension isolation** — Chrome and Firefox isolate extension storage from websites and other extensions.
- **Bounded background activity** — Gmail polling starts only when an OTP field is visible and stops after three minutes.
- **Open source** — All code is in this repo. There is no minified or obfuscated code.

See the full [Privacy Policy](privacy-policy/index.html).

## Other Chromium browsers

The extension works in any Chromium-based browser (Arc, Brave, Edge, etc.). Each browser assigns a different extension ID, so you'll need to add the browser-specific redirect URI to your OAuth client's Authorized redirect URIs in Google Cloud Console.

## Icons

Icons are pre-generated in `icons/`. To regenerate:

```bash
npm install canvas
node generate-icons.js
```

## License

MIT
