import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import { Button } from '../../src/components/controls/Button';

storiesOf('Button', module).add(
  'With text',
  () => <Button onPress={action('Pressed')}>Button text</Button>,
  {
    notes: 'This is the base button component'
  }
);
