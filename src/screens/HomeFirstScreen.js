import React from 'react';
import { StyleSheet, Image, ImageBackground } from 'react-native';
import {
  Text,
  Button,
} from 'native-base';

const background = require('../../assets/images/bg1.png');

const smilePerson = require('../../assets/images/person/smile.png');
const sadPerson = require('../../assets/images/person/sad.png');
const normalPerson = require('../../assets/images/person/normal.png');

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingTop: 35,
    paddingBottom: 46,
  },
  personAdvice: {
    alignSelf: 'center',
    backgroundColor: '#f00',
  },
  person: {
    height: '40%',
    width: '50%',
  },
  button: {
    width: '50%',
    alignSelf: 'center',
    marginBottom: 30
  },
});

const HomeFirstScreen = (props) => (
  <ImageBackground
    source={background}
    style={styles.slide}
  >
    <Text style={styles.personAdvice}>ХУЙ!!!</Text>
    <Button
      block
      rounded
      style={styles.button}
    >
      <Text>Primary</Text>
    </Button>
    <Image
      source={smilePerson}
      resizeMode={'contain'}
      style={styles.person}
    />
  </ImageBackground>
);

export default HomeFirstScreen;