import React from 'react';
import { Button as RNButton, ButtonProps as RNButtonProps } from 'react-native';

export interface ButtonProps
  extends Pick<RNButtonProps, Exclude<keyof RNButtonProps, 'color' | 'title'>> {
  children: string;
}

export class Button extends React.Component<ButtonProps> {
  render() {
    const { children, ...props } = this.props;

    return <RNButton color="darkmagenta" title={children} {...props} />;
  }
}
