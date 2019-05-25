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
import { Caption } from '../text/Caption';

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
    paddingRight: 25,
    paddingVertical: 15
  },
  listItemBody: {
    fontWeight: 'bold'
  },
  listItemCaption: {
    color: '#4f4f4f',
    marginTop: 5
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
    <View>{children}</View>
  </TouchableOpacity>
);

export const ListItemBody: React.FC<TextProps> = ({ style, ...props }) => (
  <Body style={[styles.listItemBody, style]} {...props} />
);

export const ListItemCaption: React.FC<TextProps> = ({ style, ...props }) => (
  <Caption style={[styles.listItemCaption, style]} {...props} />
);
