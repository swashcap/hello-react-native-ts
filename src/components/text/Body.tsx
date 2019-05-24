import { StyleSheet } from 'react-native';

import { textWithStyle } from './textWithStyle';

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    lineHeight: 20
  }
});

export const Body = textWithStyle(styles.text);
