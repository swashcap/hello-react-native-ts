import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import {
  List,
  ListItem,
  ListItemBody,
  ListItemCaption
} from '../../src/components/list/List';

storiesOf('List', module)
  .add(
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
  )
  .add('List with text and subtext items', () => (
    <List>
      <ListItem onPress={action('Pressed')}>
        <ListItemBody>Proin vestibulum nunc</ListItemBody>
        <ListItemCaption>
          In metus cursus at aliquam neque mollis. Curabitur hendrerit porta
          nibh, a dignissim diam tempor eu.
        </ListItemCaption>
      </ListItem>
      <ListItem onPress={action('Pressed')}>
        <ListItemBody>
          Nam id erat dictum velit facilisis tincidunt.
        </ListItemBody>
        <ListItemCaption>
          Etiam auctor, felis et auctor blandit, eros quam aliquam orci, ac
          mollis neque dui vitae arcu. Fusce fringilla lectus ut ipsum
          condimentum a egestas odio pretium.
        </ListItemCaption>
      </ListItem>
      <ListItem onPress={action('Pressed')}>
        <ListItemBody>
          Fusce vehicula erat a eros fermentum vestibulum
        </ListItemBody>
        <ListItemCaption>
          In a nisi eu dolor adipiscing facilisis sed et est. Suspendisse
          potenti. Praesent nec nulla elit, sit amet molestie metus. Curabitur
          consectetur, ipsum sit amet fringilla imperdiet, nisi nulla pharetra
          nunc, et consectetur nulla nisl a dolor.
        </ListItemCaption>
      </ListItem>
    </List>
  ));
