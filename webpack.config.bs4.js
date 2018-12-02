const path = require('path');
const WebpackConfig = require('../app/modules/webpack-config');

module.exports = WebpackConfig.build({
  name: 'admin-bs4',
  manifest: true,
  externals: {},
  getEntries() {
    return {
      [this.name] : `${this.rootDir}/vendor/miaoxing/admin/resources/pages/index-bs4`
    }
  }
});
