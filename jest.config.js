module.exports = {
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },
  testEnvironment: 'jsdom',
  testTimeout: 10000,
  // Allow /node_modules/ for CI testing
  "transformIgnorePatterns": [],
  // Fix TypeError: Unable to require `.d.ts` file.
  // https://github.com/kulshekhar/ts-jest/issues/950
  globals: {
    'ts-jest': {
      isolatedModules: true
    },
  },
  "testPathIgnorePatterns": [
    "/node_modules/",
    "<rootDir>/plugins/"
  ],
  "setupFilesAfterEnv": [
    "<rootDir>/tests/setup.js"
  ],
  "moduleNameMapper": {
    "\\.(css|less|scss)$": "<rootDir>/tests/mocks/styleMock.js",
    "\\.(gif|ttf|eot|svg)$": "<rootDir>/tests/mocks/fileMock.js"
  },
  "snapshotSerializers": [
    "enzyme-to-json/serializer"
  ]
};
