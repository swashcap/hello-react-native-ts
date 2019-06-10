import React from 'react';
import {
  Animated,
  Platform,
  SafeAreaView,
  StyleSheet,
  View
} from 'react-native';
import { NavigationScreenProps } from 'react-navigation';

import { Body } from '../text/Body';
import { Code } from '../text/Code';
import { Headline } from '../text/Headline';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    backgroundColor: 'white',
    paddingHorizontal: 30,
    paddingVertical: 15
  },
  headline: {
    marginBottom: 10
  },
  image: {
    height: 200,
    resizeMode: 'cover',
    width: '100%'
  }
});

export interface HomeScreenProps {}

interface HomeScreenState {
  scrollY: Animated.Value;
}

export class HomeScreen extends React.Component<
  HomeScreenProps,
  HomeScreenState
> {
  state = {
    scrollY: new Animated.Value(0)
  };

  render() {
    const { scrollY } = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <Animated.ScrollView
          onScroll={Animated.event([
            {
              nativeEvent: {
                contentOffset: {
                  y: scrollY
                }
              }
            }
          ])}
        >
          <Animated.Image
            blurRadius={scrollY.interpolate({
              inputRange: [-50, 0],
              outputRange: [15, 0]
            })}
            source={{
              uri: 'https://placekitten.com/1200/800?image=2'
            }}
            style={[
              styles.image,
              {
                transform: [
                  {
                    scale: scrollY.interpolate({
                      inputRange: [-100, 0],
                      outputRange: [2, 1]
                    })
                  }
                ]
              }
            ]}
          />
          <View style={styles.content}>
            <Headline style={styles.headline}>Home</Headline>
            <Body>
              This tests the pull-to-refresh-style{' '}
              <Code>&lt;Image&nbsp;/&gt;</Code> element.
            </Body>
          </View>
        </Animated.ScrollView>
      </SafeAreaView>
    );
  }
}
