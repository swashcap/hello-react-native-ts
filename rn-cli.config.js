/**
 * TypeScript config for react-native:
 * {@link https://facebook.github.io/react-native/blog/2018/05/07/using-typescript-with-react-native}
 */
module.exports = {
  getTransformModulePath() {
    return require.resolve('react-native-typescript-transformer');
  },
  getSourceExts() {
    return ['ts', 'tsx'];
  }
};
