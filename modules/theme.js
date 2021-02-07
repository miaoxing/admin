// NOTE: 使用 module 语法，以便 webpack config 中能运行

const theme = require('@mxjs/style/theme-preset');

Object.assign(theme.colors, {
  blue: '#1890ff',
  primary: '#1890ff', // blue
  danger: '#fa5b50',
});

module.exports = theme;
