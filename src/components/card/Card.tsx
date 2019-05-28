import React from 'react';
import {
  NativeSyntheticEvent,
  NativeTouchEvent,
  StyleSheet,
  View,
  ViewProps
} from 'react-native';

import { Body } from '../text/Body';
import { Button } from '../controls/Button';
import { Subhead } from '../text/Subhead';

const styles = StyleSheet.create({
  buttonWrapper: {
    flexDirection: 'row'
  },
  container: {
    borderColor: '#efefef',
    borderRadius: 2,
    borderWidth: 1,
    paddingHorizontal: 7,
    paddingVertical: 10
  },
  contentWrapper: {
    marginBottom: 4,
    paddingHorizontal: 8
  },
  subtitle: {
    color: '#4f4f4f',
    marginBottom: 4,
    marginTop: 4
  }
});

export interface CardProps
  extends Pick<ViewProps, Exclude<keyof ViewProps, 'children'>> {
  buttonText: string;
  onButtonPress: (event: NativeSyntheticEvent<NativeTouchEvent>) => void;
  subtitle?: string;
  title: string;
}

export const Card: React.FC<CardProps> = ({
  buttonText,
  onButtonPress,
  subtitle,
  style,
  title,
  ...props
}) => (
  <View style={[styles.container, style]} {...props}>
    <View style={styles.contentWrapper}>
      <Subhead>{title}</Subhead>
      {!!subtitle && (
        <Body numberOfLines={1} style={styles.subtitle}>
          {subtitle}
        </Body>
      )}
    </View>
    <View style={styles.buttonWrapper}>
      <Button onPress={onButtonPress}>{buttonText}</Button>
    </View>
  </View>
);
