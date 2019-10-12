import React from 'react';
import { StyleSheet, ScrollView, ScrollViewProps } from 'react-native';

import { CarouselItem } from './CarouselItem';

const styles = StyleSheet.create({
  container: {}
});

export const Carousel: React.FC<ScrollViewProps> & {
  Item: typeof CarouselItem;
} = ({ style, ...rest }) => (
  <ScrollView
    canCancelContentTouches
    decelerationRate="fast"
    horizontal
    snapToOffsets={[0, 400, 800]}
    style={[styles.container, style]}
    {...rest}
  />
);

Carousel.Item = CarouselItem;
