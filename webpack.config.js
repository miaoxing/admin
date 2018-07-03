const path = require('path');
const WebpackConfig = require('../app/modules/webpack-config');

// const admin = WebpackConfig.build({
//   getEntries() {
//     const entries = {};
//
//     // 初始化通用的模块
//     entries['admin'] = [];
//
//     entries['admin'].push('vendor/miaoxing/app/modules/admin.js');
//
//     return entries;
//   }
// });

const admin2 = WebpackConfig.build({
  manifest: true,
  getEntries() {
    const entries = {};

    // 初始化通用的模块
    entries['admin'] = [];

    entries['admin'].push('vendor/miaoxing/admin/resources/pages/admin.js');

    return entries;
  }
});

module.exports = admin2;
