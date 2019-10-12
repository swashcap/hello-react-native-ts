import React from 'react';
import { AppRegistry, SafeAreaView } from 'react-native';
import {
  addDecorator,
  getStorybookUI,
  configure
} from '@storybook/react-native';

import { name as appName } from '../app.json';
import './rn-addons';

// import stories
configure(() => {
  require('./stories/Button');
  require('./stories/Card');
  require('./stories/Carousel');
  require('./stories/List');
  require('./stories/Text');
}, module);

// Wrap all stories with `SafeAreaView`
// https://storybook.js.org/docs/addons/introduction/#storybook-decorators
addDecorator((storyFn: Function) => <SafeAreaView>{storyFn()}</SafeAreaView>);

// Refer to https://github.com/storybooks/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({});

AppRegistry.registerComponent(appName, () => StorybookUIRoot);

export default StorybookUIRoot;
