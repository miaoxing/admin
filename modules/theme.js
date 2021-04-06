// NOTE: 使用 module 语法，以便 webpack config 中能运行

const merge = require('lodash.merge');
const theme = require('@mxjs/style/theme-preset');

merge(theme.colors, {
  blue: {
    500: '#1890ff',
  },
  primary: '#1890ff', // blue
  danger: '#fa5b50',
});

module.exports = theme;
