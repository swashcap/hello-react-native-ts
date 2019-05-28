import React from 'react';
import TestRenderer from 'react-test-renderer';

import { List, ListItem, ListItemBody } from '../List';

test('it renders', () => {
  const items = [
    'Excepteur sint occaecat cupidatat non proident',
    'sunt in culpa qui officia',
    'deserunt mollit anim id est laborum'
  ];

  const testRenderer = TestRenderer.create(
    <List>
      {items.map(item => (
        <ListItem key={item}>
          <ListItemBody>{item}</ListItemBody>
        </ListItem>
      ))}
    </List>
  );

  const itemBodies = testRenderer.root.findAllByType(ListItemBody);

  expect(itemBodies.map(({ props: { children } }) => children)).toEqual(items);
});
