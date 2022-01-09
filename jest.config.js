const preset = require('jest-preset-miaoxing/jest-preset');

module.exports = {
  ...preset,
  moduleNameMapper: {
    ...preset.moduleNameMapper,
    '@miaoxing/admin': '<rootDir>',
    '@miaoxing/admin/(.*)': '<rootDir>/$1',
  },
};
