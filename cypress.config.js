const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: 'cypress/reports/raw',   // Raw JSON reports go here
    overwrite: false,
    html: false,
    json: true
  }

});
