import { Platform, StyleSheet } from 'react-native';

import { textWithStyle } from './textWithStyle';

const styles = StyleSheet.create({
  code: {
    color: '#4f4f4f',
    fontFamily: Platform.select({
      android: 'Roboto Mono',
      ios: 'Menlo'
    }),
    fontSize: 13,
    lineHeight: 15
  }
});

export const Code = textWithStyle(styles.code);
