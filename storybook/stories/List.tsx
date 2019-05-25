import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import { List, ListItem, ListItemBody } from '../../src/components/list/List';

storiesOf('List', module).add(
  'List with text items',
  () => (
    <List>
      <ListItem onPress={action('Pressed')}>
        <ListItemBody>Bananas</ListItemBody>
      </ListItem>
      <ListItem onPress={action('Pressed')}>
        <ListItemBody>Tomatos</ListItemBody>
      </ListItem>
      <ListItem onPress={action('Pressed')}>
        <ListItemBody>Hamburgers, but only the tasty kind</ListItemBody>
      </ListItem>
    </List>
  ),
  {
    notes: 'A interactive collection of items'
  }
);
