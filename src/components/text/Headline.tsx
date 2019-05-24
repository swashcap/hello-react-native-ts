import { StyleSheet } from 'react-native';

import { textWithStyle } from './textWithStyle';

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    lineHeight: 30
  }
});

export const Headline = textWithStyle(styles.text);
