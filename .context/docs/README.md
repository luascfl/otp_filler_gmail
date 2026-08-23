# Documentation Index

Welcome to the repository knowledge base. Start with the project overview, then dive into specific guides as needed.

## Core guides

- [Project overview](./project-overview.md)
- [Architecture notes](./architecture.md)
- [Development workflow](./development-workflow.md)
- [Testing strategy](./testing-strategy.md)
- [Security notes](./security.md)
- [Tooling guide](./tooling.md)

## Repository snapshot

- `background.js`, OAuth, Gmail API, OTP extraction, and polling
- `content.js`, OTP field detection and form interaction
- `popup.html`, `popup.js`, `popup.css`, user interface
- `manifest.json`, Chrome manifest
- `manifest-firefox-mv3.json`, Firefox manifest and AMO identity
- `*.test.js`, Node contract tests
- `privacy-policy/`, published privacy policy

Credential JSON files, generated packages, and context exports are intentionally excluded from this index.

## Document map

| Guide | File | Primary inputs |
| --- | --- | --- |
| Project overview | `project-overview.md` | README, manifests, release status |
| Architecture notes | `architecture.md` | Runtime files, manifests, Graphify |
| Development workflow | `development-workflow.md` | npm scripts and release flow |
| Testing strategy | `testing-strategy.md` | Node tests and web-ext gates |
| Security notes | `security.md` | OAuth, permissions, storage, signing |
| Tooling guide | `tooling.md` | npm, web-ext, Graphify |
