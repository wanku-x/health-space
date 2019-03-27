import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import {
  Text,
} from 'native-base';

const background = require('../../assets/images/bg3.png');

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#f00',
    fontSize: 30,
    fontWeight: 'bold',
  }
});

const HomeThirdScreen = (props) => (
  <ImageBackground
    source={background}
    style={styles.slide}
  >
    <Text style={styles.text}>And simple</Text>
  </ImageBackground>
);

export default HomeThirdScreen;