import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import { Card } from '../../src/components/card/Card';

storiesOf('Card', module).add('Generic card', () => (
  <View style={{ padding: 10 }}>
    <Card
      buttonText="Sit Amet"
      onButtonPress={action('Pressed')}
      subtitle="Consectetur adipiscing elit, sed do eiusmod tempor incididunt"
      title="Lorem Ipsum Dolor"
    />
  </View>
));
