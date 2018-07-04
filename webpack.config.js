const path = require('path');
const WebpackConfig = require('../app/modules/webpack-config');

module.exports = WebpackConfig.build({
  manifest: true,
  getEntries() {
    const entries = {};

    // 初始化通用的模块
    entries['admin'] = [];

    entries['admin'].push('vendor/miaoxing/app/modules/admin.js');

    return entries;
  }
});
