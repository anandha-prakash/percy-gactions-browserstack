const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1680,
  viewportHeight: 1280,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
