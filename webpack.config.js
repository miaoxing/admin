const WebpackConfig = require('@miaoxing/webpack');

module.exports = WebpackConfig.build({
  name: 'admin',
  manifest: true,
  getEntries() {
    return {
      [this.name]: `${this.rootDir}/vendor/miaoxing/admin/resources/pages/index.js`
    }
  }
});
