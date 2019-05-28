import React from 'react';
import TestRenderer from 'react-test-renderer';

import { Body } from '../../text/Body';
import { Button } from '../../controls/Button';
import { Card } from '../Card';
import { Subhead } from '../../text/Subhead';

test('it renders', () => {
  const buttonText = 'Sample button text';
  const onButtonPress = jest.fn();
  const subtitle = 'Sample subtitle';
  const title = 'Sample title';
  const testRenderer = TestRenderer.create(
    <Card
      buttonText={buttonText}
      onButtonPress={onButtonPress}
      subtitle={subtitle}
      title={title}
    />
  );

  const button = testRenderer.root.findByType(Button);

  expect(button.props.onPress).toBe(onButtonPress);
  expect(button.props.children).toBe(buttonText);

  expect(testRenderer.root.findByType(Subhead).props.children).toBe(title);

  expect(testRenderer.root.findByType(Body).props.children).toBe(subtitle);
});
