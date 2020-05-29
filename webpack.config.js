const WebpackConfig = require('@miaoxing/webpack');
const {generateAntdVars, generateBootstrapVars} = require('@miaoxing/style/utils');
const theme = require('./resources/modules/theme');

module.exports = WebpackConfig.build({
  name: 'admin',
  manifest: true,
  lessLoaderOptions: {
    lessOptions: {
      modifyVars: generateAntdVars(theme),
      javascriptEnabled: true,
    },
  },
  sassLoaderOptions: {
    prependData: function () {
      return generateBootstrapVars(theme) + '@import "plugins/admin/resources/scss/config";';
    }
  },
  getEntries() {
    return {
      [this.name]: `${this.rootDir}/plugins/admin/resources/pages/index.js`
    }
  }
});
