module.exports = {
  plugins: [
    [
      'transform-inline-environment-variables',
      {
        include: ['NODE_ENV', 'STORYBOOK']
      }
    ]
  ],
  presets: ['module:metro-react-native-babel-preset']
};
