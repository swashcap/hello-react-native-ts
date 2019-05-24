import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View, ViewProps, ViewStyle, Text } from 'react-native';

const style: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F5FCFF'
};

const CenteredView: React.FC<ViewProps> = ({ children }) => (
  <View style={style}>{children}</View>
);

storiesOf('CenteredView', module).add('default view', () => (
  <CenteredView>
    <Text>Hello Storybook</Text>
  </CenteredView>
));
