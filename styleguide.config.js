const reactDocgenTypescript = require('react-docgen-typescript');

const pkg = require('./package.json');

module.exports = {
  components: './src/components/**/*.tsx',
  propsParser: reactDocgenTypescript.withDefaultConfig().parse,
  skipComponentsWithoutExample: false,
  title: pkg.name
};
