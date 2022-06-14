const path = require('path');
const WebpackConfig = require('@mxjs/webpack');
const {generateAntdVars} = require('@mxjs/style/utils');
const CopyPlugin = require('copy-webpack-plugin');
const theme = require('./modules/theme');

const config = WebpackConfig.build({
  name: path.basename(__dirname),
  entry: 'plugins/admin/modules/app.js',
});

config.module.rules.map(rule => {
  rule.use && rule.use.map(use => {
    if (use.loader === 'less-loader') {
      use.options = {
        lessOptions: {
          modifyVars: generateAntdVars(theme),
          javascriptEnabled: true,
        },
      };
    }
  });
});

config.plugins.push(new CopyPlugin({
  patterns: [
    {
      // 将插件的 plugins/*/public 目录复制到 web 的 plugins/* 目录，以便通过浏览器直接访问
      from: 'plugins/*/public/**',
      to({context, absoluteFilename}) {
        return path.relative(context, absoluteFilename).replace('/public', '');
      },
      noErrorOnMissing: true,
    },
  ],
}));

module.exports = config;
