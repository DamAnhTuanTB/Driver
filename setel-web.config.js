// @ts-check
require('dotenv').config(); // load .env file on root, if available
const config = require('config');
const { defineConfig } = require('@setel/web-scripts');

module.exports = defineConfig({
  env: {
    pageTitle: 'Web-driver',
    apiOpsBaseUrl: config.get('baseUrl.apiOps'),
    webcommonUrl: config.get('appUrl.webcommon'),
    webdebugUrl: config.get('appUrl.webdebug'),
  },
  remotes: ['web-common', 'web-debug'],
});
