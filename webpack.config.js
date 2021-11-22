const path = require('path');
const WebpackConfig = require('@mxjs/webpack');
const {generateAntdVars} = require('@mxjs/style/utils');

const theme = require('./modules/theme');
const name = path.basename(__dirname);

module.exports = WebpackConfig.build({
  name,
  manifest: true,
  lessLoaderOptions: {
    lessOptions: {
      modifyVars: generateAntdVars(theme),
      javascriptEnabled: true,
    },
  },
  getEntries() {
    return {
      [name]: `${this.rootDir}/plugins/${name}/modules/app.js`,
    };
  },
});
