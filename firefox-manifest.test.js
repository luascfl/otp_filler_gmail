const test = require("node:test");
const assert = require("node:assert/strict");
const crypto = require("node:crypto");
const manifest = require("./manifest-firefox-mv3.json");

test("Firefox manifest preserves the OTP extension runtime contract", () => {
  assert.equal(manifest.manifest_version, 3);
  assert.deepEqual(manifest.background.scripts, ["background.js"]);
  assert.equal(manifest.browser_specific_settings.gecko.id, "otp-filler-gmail@luascfl.github.io");
  assert.equal(manifest.browser_specific_settings.gecko.strict_min_version, "142.0");
  assert.deepEqual(
    manifest.permissions,
    ["identity", "storage", "activeTab", "scripting"]
  );
  assert.deepEqual(
    manifest.host_permissions,
    ["https://www.googleapis.com/*", "<all_urls>"]
  );
  assert.deepEqual(manifest.content_scripts, [
    {
      matches: ["<all_urls>"],
      js: ["content.js"],
      run_at: "document_idle",
    },
  ]);
});

test("Firefox OAuth redirect is stable for the declared add-on ID", () => {
  const addOnId = manifest.browser_specific_settings.gecko.id;
  const idHash = crypto.createHash("sha1").update(addOnId).digest("hex");

  assert.equal(
    `https://${idHash}.extensions.allizom.org/`,
    "https://b08a966e2cd56d5fdbe08615b80148bd4f58eaf3.extensions.allizom.org/"
  );
  assert.equal(
    manifest.oauth2.client_id,
    "431363687179-cco5m4kdvds1hfiohitp4u4n3laobfos.apps.googleusercontent.com"
  );
});
