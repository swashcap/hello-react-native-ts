import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import { Carousel } from '../../src/components/carousel/Carousel';

storiesOf('Carousel', module).add('Standard carousel', () => (
  <Carousel>
    <Carousel.Item onPress={action('Pressed')} />
    <Carousel.Item onPress={action('Pressed')} />
    <Carousel.Item onPress={action('Pressed')} />
  </Carousel>
));
