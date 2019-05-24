import React from 'react';
import { Button as RNButton, ButtonProps as RNButtonProps } from 'react-native';

export interface ButtonProps
  extends Pick<RNButtonProps, Exclude<keyof RNButtonProps, 'color' | 'title'>> {
  children: string;
}

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
  <RNButton color="darkmagenta" title={children} {...props} />
);
