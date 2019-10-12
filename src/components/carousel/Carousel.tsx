import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedbackProps,
  ScrollView,
  ScrollViewProps
} from 'react-native';

import { CarouselItem } from './CarouselItem';

const styles = StyleSheet.create({
  container: {}
});

export class Carousel extends React.Component<ScrollViewProps> {
  static Item = CarouselItem;

  render() {
    const { style, ...rest } = this.props;
    return (
      <ScrollView
        canCancelContentTouches
        decelerationRate="fast"
        horizontal
        snapToOffsets={[0, 400, 800]}
        style={[styles.container, style]}
        {...rest}
      />
    );
  }
}
