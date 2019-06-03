/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { App } from './src/App';
import { name as appName } from './app.json';

if (process.env.STORYBOOK) {
  require('./storybook');
} else {
  AppRegistry.registerComponent(appName, () => App);
}
