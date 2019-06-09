import React from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  ViewProps
} from 'react-native';
import { NavigationScreenProps } from 'react-navigation';

import { Headline } from '../text/Headline';
import { List, ListItem, ListItemBody, ListItemCaption } from '../list/List';

const data = [
  {
    id: 'c9301e10-9058-4b2f-927d-e98a91f1f36c',
    body: 'Ameliorated 5th generation emulation',
    caption:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.'
  },
  {
    id: 'bbfe9674-a25f-4579-8fa0-54fc00bff8a2',
    body: 'Switchable regional archive',
    caption:
      'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.'
  },
  {
    id: 'd1a9e438-ede8-403a-9422-22f19a21a408',
    body: 'Customer-focused homogeneous toolset',
    caption:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.'
  },
  {
    id: '6cab9544-4c77-4946-8de3-5e0d242940a1',
    body: 'Self-enabling 3rd generation encoding',
    caption:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.'
  },
  {
    id: '878f203c-6bf5-4b31-af92-5e5ea090cb54',
    body: 'Operative zero tolerance archive',
    caption:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.'
  },
  {
    id: '4c433e15-01e0-476f-b2e4-e5347f4f8c0d',
    body: 'Business-focused client-driven complexity',
    caption:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.'
  },
  {
    id: '7825e128-b313-4c00-bc78-4d0eaf964c8f',
    body: 'Inverse attitude-oriented initiative',
    caption:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.'
  },
  {
    id: '0eaa59b7-616d-4bf2-8504-b8773cae701f',
    body: 'Total next generation database',
    caption:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.'
  },
  {
    id: 'b435012c-998e-4106-8081-bb1de381053b',
    body: 'Organized uniform methodology',
    caption:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.'
  },
  {
    id: '5289f23d-88b3-47df-b8b2-999c20cd6d1f',
    body: 'Adaptive next generation project',
    caption:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.'
  }
];

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headline: {
    marginVertical: 5,
    paddingLeft: 30,
    paddingRight: 20
  }
});

export class HomeScreen extends React.Component<
  ViewProps & NavigationScreenProps
> {
  render() {
    const { navigation, style, ...props } = this.props;

    return (
      <SafeAreaView style={[styles.container, style]} {...props}>
        <Headline style={styles.headline}>Home</Headline>
        <ScrollView>
          <List>
            {data.map(({ body, caption, id }) => (
              <ListItem
                key={id}
                onPress={() => {
                  const navigate = () => navigation.navigate('Details');
                  Platform.OS === 'android'
                    ? setTimeout(navigate, 60)
                    : navigate();
                }}
              >
                <ListItemBody>{body}</ListItemBody>
                <ListItemCaption numberOfLines={2}>{caption}</ListItemCaption>
              </ListItem>
            ))}
          </List>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
