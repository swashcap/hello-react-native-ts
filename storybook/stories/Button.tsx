import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

import { Button } from '../../src/components/controls/Button';

const story = storiesOf('Button', module);

story.addDecorator(withKnobs);

story.add(
  'With text',
  () => (
    <Button
      children={text('Children', 'Button text')}
      disabled={boolean('Disabled', false)}
      onPress={action('Pressed')}
    />
  ),
  {
    notes: 'This is the base button component'
  }
);
