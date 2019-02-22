const path = require('path');
const WebpackConfig = require('../app/resources/modules/webpack-config');

module.exports = WebpackConfig.build({
  name: 'admin',
  manifest: true,
  getEntries() {
    return {
      [this.name]: `${this.rootDir}/vendor/miaoxing/admin/resources/pages/index.js`
    }
  }
});
