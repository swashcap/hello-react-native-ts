import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableWithoutFeedbackProps,
  View
} from 'react-native';

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'darkmagenta',
    borderRadius: 2,
    paddingVertical: 10,
    paddingHorizontal: 18,
    elevation: 2
  },
  text: {
    color: '#fff',
    fontSize: 14,
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
    const { children = '', ...props } = this.props;

    return (
      <TouchableNativeFeedback>
        <View style={styles.button}>
          <Text style={styles.text}>{children.toUpperCase()}</Text>
        </View>
      </TouchableNativeFeedback>
    );
  }
}
