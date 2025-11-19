const { defineConfig } = require("cypress");
const fs = require('fs');
const path = require('path');

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:5550",
    trashAssetsBeforeRuns: true,
  }
});
