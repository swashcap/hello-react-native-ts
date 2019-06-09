import React from 'react';
import { TouchableWithoutFeedbackProps } from 'react-native';

declare module './Button' {
  export interface ButtonProps extends TouchableWithoutFeedbackProps {
    children?: string;
  }

  export class Button extends React.Component<ButtonProps> {}
}
