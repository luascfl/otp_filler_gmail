# Gmail OTP Filler Extension

## Project Intent
Create a Chrome extension that extracts OTPs (One Time Passwords) and validation codes directly from incoming Gmail emails, allowing the user to seamlessly autofill or copy them without leaving their current tab.

## Current State
The project codebase already exists (background.js, content.js, popup UI). It was mistakenly swapped out in a previous session but has now been fully restored.

## Phases
1. **Restoration & Scope Fix**: Restore the original OTP filler code and fix project constraints. (DONE)
2. **Setup & Configuration**: The extension requires an OAuth Client ID to access the Gmail API. The user needs to configure this in `manifest.json`.
3. **Execution & UI Testing**: Load the extension in Chrome and test the OAuth flow and OTP extraction.
4. **Refinement**: Bug fixes based on testing.
