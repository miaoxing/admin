const path = require('path');
const WebpackConfig = require('../app/modules/webpack-config');

module.exports = WebpackConfig.build({
  getEntries() {
    const entries = {};

    // 初始化通用的模块
    entries['admin2'] = [];

    entries['admin2'].push('vendor/miaoxing/admin/resources/pages/admin2.js');

    return entries;
  }
});
