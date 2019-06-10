import React from 'react';
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewProps
} from 'react-native';

import { Body } from '../text/Body';

const styles = StyleSheet.create({
  body: {
    marginBottom: 2
  },
  textInput: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    color: '#000',
    fontSize: 16,
    lineHeight: 20,
    paddingHorizontal: 10,
    paddingVertical: 8
  }
});

export interface InputProps extends ViewProps {
  label?: string;
  textInputProps?: TextInputProps;
}

export class Input extends React.Component<InputProps> {
  render() {
    const { label, textInputProps = {}, ...props } = this.props;
    const { style: textInputStyle, ...textInputRest } = textInputProps;

    return (
      <View {...props}>
        {!!label && <Body style={styles.body}>{label}</Body>}
        <TextInput
          placeholderTextColor="#666"
          style={[styles.textInput, textInputStyle]}
          {...textInputRest}
        />
      </View>
    );
  }
}
