const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://buger-eats.vercel.app/',

    viewportWidth: 1280,
    viewportHeight: 720,

    video: true,
    videoCompression: 32,
    videosFolder: 'cypress/videos',

    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/screenshots',

    retries: {
      runMode: 3,
      openMode: 3,
    },

    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: true
    },

    setupNodeEvents(on, config) {
    },
  },
});
