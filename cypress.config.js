const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here if needed
    },
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}"
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports/raw',
    overwrite: false,
    html: false,
    json: true
  }
});
