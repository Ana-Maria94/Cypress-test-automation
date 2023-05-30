const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "1enrup",
  video: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
