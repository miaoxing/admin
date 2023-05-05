const path = require('path');
const WebpackConfig = require('@mxjs/webpack');
const CopyPlugin = require('copy-webpack-plugin');

const config = WebpackConfig.build({
  name: path.basename(__dirname),
  entry: 'plugins/admin/modules/app.js',
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
