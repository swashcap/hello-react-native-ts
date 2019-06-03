import React from 'react';
import { SafeAreaView, StyleSheet, View, ViewProps } from 'react-native';

import { Headline } from '../text/Headline';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headline: {
    marginVertical: 5,
    paddingLeft: 30,
    paddingRight: 20
  }
});

export const DetailsScreen: React.FC<ViewProps> = ({ style, ...props }) => (
  <SafeAreaView style={[styles.container, style]} {...props}>
    <Headline style={styles.headline}>Details</Headline>
  </SafeAreaView>
);
