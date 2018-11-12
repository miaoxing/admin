const path = require('path');
const WebpackConfig = require('../app/modules/webpack-config');

module.exports = WebpackConfig.build({
  name: 'admin-v1',
  manifest: true,
  getEntries() {
    return {
      [this.name] : `${this.rootDir}/vendor/miaoxing/admin/resources/admin-v1`
    }
  }
});
