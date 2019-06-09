import React from 'react';
import {
  ScrollView,
  ScrollViewProps,
  StyleSheet,
  TextProps,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableOpacityProps,
  View
} from 'react-native';

import { Body } from '../text/Body';
import { Caption } from '../text/Caption';

// @ts-ignore
export { ListItem } from './ListItem';

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#efefef',
    flex: 1
  },
  listItemBody: {
    fontWeight: 'bold'
  },
  listItemCaption: {
    color: '#4f4f4f',
    marginTop: 5
  }
});

export const List: React.FC<ScrollViewProps> = ({ style, ...props }) => (
  <ScrollView style={[styles.list, style]} {...props} />
);

export const ListItemBody: React.FC<TextProps> = ({ style, ...props }) => (
  <Body style={[styles.listItemBody, style]} {...props} />
);

export const ListItemCaption: React.FC<TextProps> = ({ style, ...props }) => (
  <Caption style={[styles.listItemCaption, style]} {...props} />
);
