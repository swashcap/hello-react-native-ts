import React from 'react';
import { StyleProp, Text, TextStyle, TextProps } from 'react-native';

export const textWithStyle = (
  rootStyle: StyleProp<TextStyle>
): React.FC<TextProps> => ({ style, ...props }) => (
  <Text style={style ? [rootStyle, style] : rootStyle} {...props} />
);
