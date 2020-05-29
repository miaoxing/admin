// NOTE: 使用 module 语法，以便 webpack config 中能运行

const theme = require('@miaoxing/style/theme-preset');

Object.assign(theme.colors, {
  blue: '#1890ff',
  primary: '#1890ff', // blue
});

module.exports = theme;
