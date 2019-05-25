import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';

import { Body } from '../../src/components/text/Body';
import { Caption } from '../../src/components/text/Caption';
import { Headline } from '../../src/components/text/Headline';
import { Subhead } from '../../src/components/text/Subhead';

storiesOf('Text', module)
  .add(
    'Body',
    () => (
      <View>
        <Body>Sample body text</Body>
        <Body>
          Morbi est tellus, dapibus at imperdiet non, ultricies ut risus. Nunc
          faucibus leo in augue sodales eget rhoncus dolor lobortis. Fusce
          pulvinar ipsum eu augue pharetra at congue arcu aliquam. Cras in sem
          dui. Nam a elit purus. Fusce fermentum condimentum nunc vel pulvinar.
          Donec quis leo non nisl egestas aliquam id eget elit.
        </Body>
      </View>
    ),
    {
      notes: 'Component for regular user interface text'
    }
  )
  .add('Caption', () => <Caption>Sample caption text</Caption>, {
    notes: 'Component for fine print user interface text'
  })
  .add('Subhead', () => <Subhead>Sample subhead text</Subhead>, {
    notes: 'Component for sub-headline user interface text'
  })
  .add('Headline', () => <Headline>Sample headline text</Headline>, {
    notes: 'Component for headline user interface text'
  });
