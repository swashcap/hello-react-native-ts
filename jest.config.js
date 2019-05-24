module.exports = {
  cacheDirectory: '.jest/cache',
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  transform: {
    '^.+\\.(js)$': '<rootDir>/node_modules/babel-jest',
    '\\.(ts|tsx)$': '<rootDir>/node_modules/ts-jest/preprocessor.js'
  },
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$'
}
