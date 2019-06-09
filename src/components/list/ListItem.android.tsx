import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableWithoutFeedbackProps,
  View,
  ViewStyle
} from 'react-native';

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 15
  }
});

export const ListItem: React.FC<
  TouchableWithoutFeedbackProps & {
    style?: StyleProp<ViewStyle>;
  }
> = ({ children, style, ...props }) => (
  <TouchableNativeFeedback
    background={TouchableNativeFeedback.SelectableBackground()}
    {...props}
  >
    <View style={[styles.listItem, style]}>{children}</View>
  </TouchableNativeFeedback>
);
