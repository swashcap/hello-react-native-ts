import React from 'react';
import {
  StyleSheet,
  TextProps,
  TouchableOpacity,
  TouchableOpacityProps,
  ScrollView,
  ScrollViewProps,
  View
} from 'react-native';

import { Body } from '../text/Body';

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#efefef',
    flex: 1
  },
  listItem: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    marginBottom: 1,
    paddingLeft: 15,
    paddingRight: 15,
    paddingVertical: 15
  },
  listItemBody: {
    fontWeight: 'bold'
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

export const List: React.FC<ScrollViewProps> = ({ style, ...props }) => (
  <ScrollView style={[styles.list, style]} {...props} />
);

export const ListItem: React.FC<TouchableOpacityProps> = ({
  children,
  style,
  ...props
}) => (
  <TouchableOpacity style={[styles.listItem, style]} {...props}>
    <View style={styles.listItemIndicator} />
    {children}
  </TouchableOpacity>
);

export const ListItemBody: React.FC<TextProps> = ({ style, ...props }) => (
  <Body style={[styles.listItemBody, style]} {...props} />
);
