const { defineConfig } = require("cypress");

module.exports = defineConfig({
  baseUrl: 'http://localhost:3002/people',
  
  e2e: {
     setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});


