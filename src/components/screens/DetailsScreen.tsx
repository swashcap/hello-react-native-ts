import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  ViewProps
} from 'react-native';
import { NavigationScreenProps } from 'react-navigation';

import { Body } from '../text/Body';
import { Card } from '../card/Card';
import { Headline } from '../text/Headline';
import { Subhead } from '../text/Subhead';

const styles = StyleSheet.create({
  body: {
    marginBottom: 10,
    paddingHorizontal: 30
  },
  card: {
    marginVertical: 20,
    marginHorizontal: 15
  },
  container: {
    flex: 1
  },
  firstGraph: {
    marginTop: 20
  },
  leadText: {
    fontWeight: 'bold'
  },
  headline: {
    marginVertical: 5,
    paddingLeft: 30,
    paddingRight: 20
  },
  subhead: {
    marginBottom: 10,
    paddingHorizontal: 30
  }
});

export const DetailsScreen: React.FC<ViewProps & NavigationScreenProps> = ({
  navigation,
  style,
  ...props
}) => (
  <SafeAreaView style={[styles.container, style]} {...props}>
    <Headline style={styles.headline}>Details</Headline>
    <ScrollView>
      <Body style={[styles.firstGraph, styles.body]}>
        <Text style={styles.leadText}>Lorem Ipsum Dolor Sit Amet</Text>{' '}
        consectetur adipiscing elit. Vivamus a luctus justo, a placerat est.
        Vestibulum a venenatis lectus.
      </Body>
      <Card
        buttonText="Go Home"
        onButtonPress={() => navigation.navigate('Home')}
        style={styles.card}
        title="An Interesting Card"
      />
      <Body style={styles.body}>
        Phasellus vehicula neque id est semper, ac congue felis commodo.
        Suspendisse potenti. Nam eget placerat erat. Nulla ultricies consequat
        eros ac vestibulum. Aliquam imperdiet massa augue, nec faucibus nisi
        semper ac.
      </Body>
      <Body style={styles.body}>
        Ut nibh nisl, iaculis id mattis sit amet, ultricies sed eros. Vivamus
        vel mi ante. Praesent commodo finibus justo, sed hendrerit urna
        convallis eget. Maecenas condimentum mi elit, eu gravida eros consequat
        at. Nulla rutrum lorem neque, ut finibus metus posuere non. Quisque
        nulla justo, scelerisque sed ornare eu, aliquet id est. Ut at ornare
        dui.
      </Body>
    </ScrollView>
  </SafeAreaView>
);
