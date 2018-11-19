const path = require('path');
const WebpackConfig = require('../app/modules/webpack-config');

module.exports = WebpackConfig.build({
  name: 'admin-bs4',
  externals: {},
  getEntries() {
    return {
      [this.name] : `${this.rootDir}/vendor/miaoxing/admin/resources/admin-bs4`
    }
  }
});
