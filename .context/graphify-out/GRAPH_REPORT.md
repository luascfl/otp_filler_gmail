# Graph Report - extension_manager  (2026-07-23)

## Corpus Check
- 7 files · ~16,923 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 63 nodes · 112 edges · 12 communities detected
- Extraction: 89% EXTRACTED · 11% INFERRED · 0% AMBIGUOUS · INFERRED: 12 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 12|Community 12]]

## God Nodes (most connected - your core abstractions)
1. `FakeElement` - 6 edges
2. `renderAccountsList()` - 6 edges
3. `doFetch()` - 6 edges
4. `addAccount()` - 6 edges
5. `findOTPField()` - 5 edges
6. `send()` - 5 edges
7. `init()` - 5 edges
8. `getAccounts()` - 5 edges
9. `removeAccount()` - 5 edges
10. `getValidToken()` - 5 edges

## Surprising Connections (you probably didn't know these)
- `doFetch()` --calls--> `setStatus()`  [EXTRACTED]
  _legacy_otp_filler/popup.js → _legacy_otp_filler/popup.js  _Bridges community 1 → community 5_
- `init()` --calls--> `renderChips()`  [EXTRACTED]
  _legacy_otp_filler/popup.js → _legacy_otp_filler/popup.js  _Bridges community 8 → community 5_
- `getValidToken()` --calls--> `getToken()`  [EXTRACTED]
  _legacy_otp_filler/background.js → _legacy_otp_filler/background.js  _Bridges community 2 → community 6_

## Communities

### Community 0 - "Community 0"
Cohesion: 0.33
Nodes (6): extractOTP(), fetchOTPsForAccount(), gmailFetch(), looksLikeJunkNumberContext(), normalizeOTP(), scoreOTPCandidate()

### Community 1 - "Community 1"
Cohesion: 0.43
Nodes (4): addAccount(), autoCopy(), renderCodes(), setStatus()

### Community 2 - "Community 2"
Cohesion: 0.38
Nodes (7): addAccount(), fetchAllOTPs(), getAccounts(), getToken(), removeAccount(), removeToken(), saveAccounts()

### Community 3 - "Community 3"
Cohesion: 0.6
Nodes (4): findOTPField(), findSplitOTPFields(), findSubmitButton(), isVisible()

### Community 4 - "Community 4"
Cohesion: 0.4
Nodes (2): showToast(), FakeElement

### Community 5 - "Community 5"
Cohesion: 0.7
Nodes (5): doFetch(), init(), refreshManageList(), send(), showSection()

### Community 6 - "Community 6"
Cohesion: 0.4
Nodes (5): buildAuthUrl(), getClientId(), getValidToken(), launchAuth(), saveToken()

### Community 7 - "Community 7"
Cohesion: 0.83
Nodes (3): fillSingle(), fillSplit(), simulateTyping()

### Community 8 - "Community 8"
Cohesion: 0.5
Nodes (3): escHtml(), renderAccountsList(), renderChips()

### Community 10 - "Community 10"
Cohesion: 1.0
Nodes (2): makeIcon(), roundedRect()

### Community 11 - "Community 11"
Cohesion: 0.67
Nodes (3): decodeBase64(), extractTextFromPayload(), stripHtml()

### Community 12 - "Community 12"
Cohesion: 1.0
Nodes (1): getNearbyText()

## Knowledge Gaps
- **Thin community `Community 4`** (5 nodes): `showToast()`, `popup.test.js`, `FakeElement`, `.appendChild()`, `.constructor()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 10`** (3 nodes): `makeIcon()`, `roundedRect()`, `generate-icons.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 12`** (2 nodes): `getNearbyText()`, `.querySelector()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `renderAccountsList()` connect `Community 8` to `Community 1`, `Community 4`, `Community 12`, `Community 5`?**
  _High betweenness centrality (0.094) - this node is a cross-community bridge._
- **Why does `FakeElement` connect `Community 4` to `Community 8`, `Community 3`, `Community 12`?**
  _High betweenness centrality (0.045) - this node is a cross-community bridge._
- **Why does `renderChips()` connect `Community 8` to `Community 1`, `Community 4`, `Community 5`?**
  _High betweenness centrality (0.028) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `renderAccountsList()` (e.g. with `.addEventListener()` and `.querySelector()`) actually correct?**
  _`renderAccountsList()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Are the 2 inferred relationships involving `findOTPField()` (e.g. with `.querySelector()` and `.querySelectorAll()`) actually correct?**
  _`findOTPField()` has 2 INFERRED edges - model-reasoned connections that need verification._