import React from 'react';
import { Image, ScrollView, StyleSheet, TextInput, View } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';

import { Body } from '../text/Body';
import { Input } from '../controls/Input';

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 30
  },
  image: {
    height: 300,
    resizeMode: 'cover',
    width: '100%'
  },
  input: {
    marginTop: 20
  }
});

export class InputScreen extends React.Component<NavigationScreenProps> {
  render() {
    return (
      <ScrollView>
        <Image
          source={{ uri: 'https://placekitten.com/1200/800?image=4' }}
          style={styles.image}
        />
        <View style={styles.content}>
          <Input
            label="Search:"
            textInputProps={{
              placeholder: 'Find something…',
              returnKeyLabel: 'search',
              returnKeyType: 'search'
            }}
            style={styles.input}
          />
          <Input label="Filter:" style={styles.input} />
        </View>
      </ScrollView>
    );
  }
}
