import React from 'react';
import { FlatList, Image, StyleSheet, TextInput, View } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';

import { Body } from '../text/Body';
import { Button } from '../controls/Button';
import { Input } from '../controls/Input';

const styles = StyleSheet.create({
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 25
  },
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
  onButtonPress = () => {
    console.warn('Pressed');
  };

  render() {
    return (
      <FlatList
        ListHeaderComponent={
          <React.Fragment>
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
            <View style={styles.buttonWrapper}>
              <Button onPress={this.onButtonPress}>Search</Button>
            </View>
          </React.Fragment>
        }
        data={[]}
        renderItem={() => null}
      />
    );
  }
}
