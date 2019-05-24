import { StyleSheet } from 'react-native';

import { textWithStyle } from './textWithStyle';

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    lineHeight: 15
  }
});

export const Caption = textWithStyle(styles.text);
