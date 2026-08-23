# Graph Report - otp_filler_gmail  (2026-08-23)

## Corpus Check
- 7 files · ~19,375 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 60 nodes · 107 edges · 10 communities detected
- Extraction: 90% EXTRACTED · 10% INFERRED · 0% AMBIGUOUS · INFERRED: 11 edges (avg confidence: 0.8)
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
- [[_COMMUNITY_Community 9|Community 9]]

## God Nodes (most connected - your core abstractions)
1. `FakeElement` - 6 edges
2. `doFetch()` - 6 edges
3. `addAccount()` - 6 edges
4. `findOTPField()` - 5 edges
5. `send()` - 5 edges
6. `init()` - 5 edges
7. `getAccounts()` - 5 edges
8. `removeAccount()` - 5 edges
9. `getValidToken()` - 5 edges
10. `findSubmitButton()` - 4 edges

## Surprising Connections (you probably didn't know these)
- `addAccount()` --calls--> `getAccounts()`  [EXTRACTED]
  background.js → background.js  _Bridges community 5 → community 2_

## Communities

### Community 0 - "Community 0"
Cohesion: 0.29
Nodes (11): addAccount(), autoCopy(), doFetch(), init(), refreshManageList(), renderAccountsList(), renderChips(), renderCodes() (+3 more)

### Community 1 - "Community 1"
Cohesion: 0.33
Nodes (6): extractOTP(), fetchOTPsForAccount(), gmailFetch(), looksLikeJunkNumberContext(), normalizeOTP(), scoreOTPCandidate()

### Community 2 - "Community 2"
Cohesion: 0.38
Nodes (7): addAccount(), buildAuthUrl(), getClientId(), getToken(), getValidToken(), launchAuth(), saveToken()

### Community 3 - "Community 3"
Cohesion: 0.4
Nodes (2): showToast(), FakeElement

### Community 4 - "Community 4"
Cohesion: 0.6
Nodes (4): findOTPField(), findSplitOTPFields(), findSubmitButton(), isVisible()

### Community 5 - "Community 5"
Cohesion: 0.5
Nodes (5): fetchAllOTPs(), getAccounts(), removeAccount(), removeToken(), saveAccounts()

### Community 6 - "Community 6"
Cohesion: 0.83
Nodes (3): fillSingle(), fillSplit(), simulateTyping()

### Community 7 - "Community 7"
Cohesion: 1.0
Nodes (2): makeIcon(), roundedRect()

### Community 8 - "Community 8"
Cohesion: 0.67
Nodes (3): decodeBase64(), extractTextFromPayload(), stripHtml()

### Community 9 - "Community 9"
Cohesion: 1.0
Nodes (1): getNearbyText()

## Knowledge Gaps
- **Thin community `Community 3`** (5 nodes): `showToast()`, `FakeElement`, `.appendChild()`, `.constructor()`, `popup.test.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 7`** (3 nodes): `generate-icons.js`, `makeIcon()`, `roundedRect()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 9`** (2 nodes): `getNearbyText()`, `.querySelector()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `FakeElement` connect `Community 3` to `Community 0`, `Community 9`, `Community 4`?**
  _High betweenness centrality (0.083) - this node is a cross-community bridge._
- **Why does `renderChips()` connect `Community 0` to `Community 3`?**
  _High betweenness centrality (0.062) - this node is a cross-community bridge._
- **Why does `renderAccountsList()` connect `Community 0` to `Community 3`?**
  _High betweenness centrality (0.059) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `findOTPField()` (e.g. with `.querySelector()` and `.querySelectorAll()`) actually correct?**
  _`findOTPField()` has 2 INFERRED edges - model-reasoned connections that need verification._