import React from 'react';
import {
  Animated,
  Easing,
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
  },
  imageWrapper: {
    height: 0
  }
});

export interface HomeScreenProps {}

interface HomeScreenState {
  isToggled: boolean;
  isToggling: boolean;
  scrollY: Animated.Value;
  toggle: Animated.Value;
}

export class HomeScreen extends React.Component<
  HomeScreenProps,
  HomeScreenState
> {
  state = {
    isToggled: false,
    isToggling: false,
    scrollY: new Animated.Value(0),
    toggle: new Animated.Value(0)
  };

  onTogglePress = () => {
    const { isToggled, toggle } = this.state;

    Animated.timing(toggle, {
      duration: 250,
      easing: isToggled ? Easing.in(Easing.ease) : Easing.out(Easing.ease),
      toValue: isToggled ? 0 : 1,
      useNativeDriver: true
    }).start(() => this.setState({ isToggling: false }));

    this.setState({ isToggled: !isToggled, isToggling: true });
  };

  render() {
    const { scrollY, isToggled, isToggling, toggle } = this.state;

    const blurRadius =
      Platform.OS === 'ios'
        ? scrollY.interpolate({
            inputRange: [-80, 0],
            outputRange: [10, 0]
          })
        : undefined;

    const imageScrollTransforms =
      Platform.OS === 'ios'
        ? [
            {
              scale: scrollY.interpolate({
                inputRange: [-100, 0, 1],
                outputRange: [2, 1, 1]
              })
            },
            {
              translateY: scrollY.interpolate({
                inputRange: [-100, 0, 1],
                outputRange: [-50, 0, 0]
              })
            }
          ]
        : [];

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
          <View style={styles.imageWrapper}>
            <Animated.Image
              blurRadius={blurRadius}
              source={{
                uri: 'https://placekitten.com/1200/800?image=2'
              }}
              style={[
                styles.image,
                {
                  transform: [
                    ...imageScrollTransforms,
                    {
                      translateY: toggle.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -40]
                      })
                    }
                  ]
                },
                {
                  opacity: toggle.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 0]
                  })
                }
              ]}
            />
          </View>
          <Animated.View
            style={[
              styles.content,
              {
                transform: [
                  {
                    translateY: toggle.interpolate({
                      inputRange: [0, 1],
                      outputRange: [200, 0]
                    })
                  }
                ]
              }
            ]}
          >
            <Headline style={styles.headline}>Home</Headline>
            <Body style={styles.body}>
              This tests the pull-to-refresh-style{' '}
              <Code>&lt;Image&nbsp;/&gt;</Code> element.
            </Body>
            <View style={styles.buttonWrapper}>
              <Button onPress={this.onTogglePress}>Toggle</Button>
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
            <Body style={styles.body}>
              Fusce eu leo sit amet enim tincidunt adipiscing id sed felis. Cras
              augue dolor, accumsan id blandit vel, blandit a nulla. Aenean
              Fusce eu leo sit amet enim tincidunt adipiscing id sed felis. Cras
              augue dolor, accumsan id blandit vel, blandit a nulla.
            </Body>
            <Body style={styles.body}>
              Aenean condimentum urna id urna varius accumsan. Vivamus
              consectetur pharetra purus id vulputate. Nunc volutpat tincidunt
              consequat. Proin nec adipiscing libero. Proin nunc felis, sagittis
              non tristique fermentum, vehicula elementum dolor. Suspendisse
              velit lectus, ornare eget feugiat non, tincidunt nec purus.
              Curabitur venenatis dolor id lorem tincidunt non faucibus mi
              imperdiet. Suspendisse posuere leo nunc. Morbi sodales sapien vel
              sem scelerisque faucibus. Suspendisse pellentesque tempor est, ac
              vulputate neque molestie ac.
            </Body>
            <Body style={styles.body}>
              {' '}
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Quisque eget diam purus, laoreet
              facilisis elit.
            </Body>
            <Body style={styles.body}>
              {' '}
              Integer a nulla velit. Donec justo lacus, elementum sit amet
              congue et, viverra quis risus. Suspendisse venenatis tincidunt
              purus. In lectus augue, cursus in egestas id, ornare a purus.
              Morbi vitae tortor nisl, blandit vulputate diam.
            </Body>
            <Body style={styles.body}>
              Proin imperdiet, mi vel adipiscing imperdiet, ipsum sem pharetra
              justo, et ultricies purus velit in urna. Nulla vitae nisi nisi.
              Morbi eleifend iaculis purus, id porta tortor condimentum eget.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Sed risus leo, bibendum
              accumsan adipiscing tincidunt, viverra vel nibh. Phasellus justo
              libero, viverra eu sagittis vel, rhoncus vitae justo. Curabitur in
              fringilla risus. Morbi ornare velit eu nisl porta feugiat.
            </Body>
            <Body style={styles.body}>
              Integer a nulla velit. Donec justo lacus, elementum sit amet
              congue et, viverra quis risus. Suspendisse venenatis tincidunt
              purus. In lectus augue, cursus in egestas id, ornare a purus.
              Morbi vitae tortor nisl, blandit vulputate diam. Proin imperdiet,
              mi vel adipiscing imperdiet, ipsum sem pharetra justo, et
              ultricies purus velit in urna. Nulla vitae nisi nisi. Morbi
              eleifend iaculis purus, id porta tortor condimentum eget.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Sed risus leo, bibendum
              accumsan adipiscing tincidunt, viverra vel nibh. Phasellus justo
              libero, viverra eu sagittis vel, rhoncus vitae justo. Curabitur in
              fringilla risus. Morbi ornare velit eu nisl porta feugiat.
            </Body>
          </Animated.View>
          <View style={{ height: !isToggled && !isToggling ? 200 : 0 }} />
        </Animated.ScrollView>
      </SafeAreaView>
    );
  }
}
