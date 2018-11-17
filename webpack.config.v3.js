const path = require('path');
const WebpackConfig = require('../app/modules/webpack-config');

module.exports = WebpackConfig.build({
  name: 'admin-v3',
  externals: {},
  getEntries() {
    return {
      [this.name] : `${this.rootDir}/vendor/miaoxing/admin/resources/admin-v3`
    }
  }
});
