import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedbackProps,
  View
} from 'react-native';

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'darkmagenta',
    borderRadius: 40,
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  text: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '700',
    lineHeight: 20,
    textAlign: 'center'
  }
});

export interface ButtonProps extends TouchableWithoutFeedbackProps {
  children?: string;
}

export class Button extends React.Component<ButtonProps> {
  render() {
    const { children, style, ...props } = this.props;

    return (
      <TouchableOpacity activeOpacity={0.5} {...props}>
        <View style={[styles.button, style]}>
          <Text style={styles.text}>{children}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
