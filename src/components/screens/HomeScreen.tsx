import React from 'react';
import {
  Animated,
  Platform,
  SafeAreaView,
  StyleSheet,
  View
} from 'react-native';
import { NavigationScreenProps } from 'react-navigation';

import { Button } from '../controls/Button';
import { Body } from '../text/Body';
import { Code } from '../text/Code';
import { Headline } from '../text/Headline';

const styles = StyleSheet.create({
  body: {
    marginBottom: 10
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: 10
  },
  container: {
    flex: 1
  },
  content: {
    backgroundColor: '#fff',
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
            <Body style={styles.body}>
              This tests the pull-to-refresh-style{' '}
              <Code>&lt;Image&nbsp;/&gt;</Code> element.
            </Body>
            <View style={styles.buttonWrapper}>
              <Button>Toggle</Button>
            </View>
            <Body style={styles.body}>
              Praesent laoreet gravida fermentum. Maecenas consectetur, odio at
              elementum vehicula, elit ante imperdiet enim, vel luctus leo metus
              quis tortor. Suspendisse potenti.
            </Body>
            <Body style={styles.body}>
              Nam eget purus mi. Maecenas eleifend tempus erat, eget fringilla
              lorem venenatis et.
            </Body>
            <Body style={styles.body}>
              Curabitur dui nisi, mattis non ultrices at, adipiscing eget
              libero. Integer consequat quam vitae diam lacinia tristique. Donec
              malesuada blandit feugiat. Class aptent taciti sociosqu ad litora
              torquent per conubia nostra, per inceptos himenaeos. Praesent in
              semper lacus. Vestibulum ut nulla non massa imperdiet condimentum.
              Sed nulla tortor, tristique aliquam elementum id, ullamcorper sit
              amet turpis. Donec volutpat viverra turpis, nec tristique dui
              aliquet non. Maecenas justo lorem, vestibulum eu feugiat vitae,
              ultrices nec ipsum.
            </Body>
          </View>
        </Animated.ScrollView>
      </SafeAreaView>
    );
  }
}
