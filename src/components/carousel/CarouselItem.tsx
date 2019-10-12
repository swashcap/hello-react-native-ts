import React from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedbackProps,
  View,
  ViewProps
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20
  },
  image: {
    height: 200,
    width: 400
  }
});

export class CarouselItem extends React.PureComponent<
  TouchableWithoutFeedbackProps
> {
  render() {
    return (
      <TouchableOpacity {...this.props}>
        <View style={styles.container}>
          <Image
            source={{ uri: 'https://placekitten.com/400/200?image=2' }}
            style={styles.image}
          />
        </View>
      </TouchableOpacity>
    );
  }
}
