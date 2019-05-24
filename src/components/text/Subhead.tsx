import { StyleSheet } from 'react-native';

import { textWithStyle } from './textWithStyle';

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    lineHeight: 25
  }
});

export const Subhead = textWithStyle(styles.text);
