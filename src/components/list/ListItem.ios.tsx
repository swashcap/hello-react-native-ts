import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedbackProps,
  View
} from 'react-native';

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    marginBottom: 1,
    paddingLeft: 15,
    paddingRight: 25,
    paddingVertical: 15
  },
  listItemIndicator: {
    backgroundColor: '#c6c6c6',
    borderRadius: 4,
    height: 4,
    marginTop: 8,
    marginRight: 10,
    width: 4
  }
});

export const ListItem: React.FC<TouchableWithoutFeedbackProps> = ({
  children,
  style,
  ...props
}) => (
  <TouchableOpacity style={[styles.listItem, style]} {...props}>
    <View style={styles.listItemIndicator} />
    <View>{children}</View>
  </TouchableOpacity>
);
