// background.js

// Example Rule Structure in storage:
// {
//   "rules": [
//     { "domain": "github.com", "extensionIds": ["abc123def456"] }
//   ],
//   "previouslyEnabled": [] // IDs of extensions we enabled so we can turn them off later
// }

let currentDomain = "";
let activeExtensionsForContext = new Set();

// Function to extract domain from URL
function getDomain(url) {
  try {
    const urlObj = new URL(url);
    return urlObj.hostname;
  } catch (e) {
    return "";
  }
}

// Evaluate rules and toggle extensions
async function evaluateContext(domain) {
  if (!domain || domain === currentDomain) return;
  currentDomain = domain;

  const data = await chrome.storage.local.get(["rules", "managedExtensions"]);
  const rules = data.rules || [];
  const managedExtensions = data.managedExtensions || {}; 
  // managedExtensions maps extId to its default state (e.g., false)

  let extensionsToEnable = new Set();

  for (const rule of rules) {
    if (domain.includes(rule.domain)) {
      rule.extensionIds.forEach(id => extensionsToEnable.add(id));
    }
  }

  // Get all currently installed extensions
  const allExtensions = await chrome.management.getAll();

  for (const ext of allExtensions) {
    // Don't manage ourselves
    if (ext.id === chrome.runtime.id) continue;

    const shouldBeEnabled = extensionsToEnable.has(ext.id);
    const isManaged = ext.id in managedExtensions;

    // If it's a managed extension, toggle its state based on the current context
    if (isManaged && ext.enabled !== shouldBeEnabled) {
      console.log(`Toggling extension ${ext.name} (${ext.id}) to ${shouldBeEnabled}`);
      await chrome.management.setEnabled(ext.id, shouldBeEnabled);
    }
  }
}

// Listen for tab activation (switching tabs)
chrome.tabs.onActivated.addListener(async (activeInfo) => {
  const tab = await chrome.tabs.get(activeInfo.tabId);
  if (tab.url) {
    evaluateContext(getDomain(tab.url));
  }
});

// Listen for URL changes within a tab
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.url && tab.active) {
    evaluateContext(getDomain(changeInfo.url));
  }
});

// Listen for window focus changes
chrome.windows.onFocusChanged.addListener(async (windowId) => {
  if (windowId === chrome.windows.WINDOW_ID_NONE) return;
  const tabs = await chrome.tabs.query({ active: true, windowId: windowId });
  if (tabs.length > 0 && tabs[0].url) {
    evaluateContext(getDomain(tabs[0].url));
  }
});
