module.exports = {
  cacheDirectory: '.jest/cache',
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  transform: {
    '^.+\\.(js)$': '<rootDir>/node_modules/babel-jest',
    '\\.(ts|tsx)$': 'ts-jest'
  },
  transformIgnorePatterns: [
    // react-navigation@^2 isn't transpiled
    '/node_modules/(!react-navigation*)/'
  ],
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx)$'
};
