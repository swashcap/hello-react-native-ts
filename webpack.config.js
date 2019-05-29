module.exports = {
  devtool: 'source-map',
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
    ]
  },
  resolve: {
    alias: {
      'react-native$': 'react-native-web/dist/cjs'
    },
    extensions: ['.ts', '.tsx', '.js', '.json']
  }
};
