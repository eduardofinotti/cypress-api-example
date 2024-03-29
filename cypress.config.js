const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'pii8qr',
  e2e: {
    baseUrl: 'https://api.restful-api.dev',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      snapshotOnly: true
    }
  },
});
