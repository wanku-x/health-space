import React from 'react';
import { StyleSheet, Image, ImageBackground, View, StatusBar, Platform } from 'react-native';
import { Text } from 'native-base';
import { withNavigation } from 'react-navigation';
import RountButton from '../components/RoundButton';

const background = require('../../assets/images/bg1.png');

const smilePerson = require('../../assets/images/person/smile.png');
const sadPerson = require('../../assets/images/person/sad.png');
const normalPerson = require('../../assets/images/person/normal.png');

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 10 : StatusBar.currentHeight + 10,
    paddingBottom: 36 + 10,
  },
  advice: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '50%',
    alignSelf: 'center',
    backgroundColor: '#0082c8',
    marginTop: 15,
    marginBottom: 30,
    shadowRadius: 0 
  },
  person: {
    flex: 1,
    width: '50%',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#756f62',
  },
});

const HomeFirstScreen = ({ navigation }) => (
  <ImageBackground
    source={background}
    style={styles.slide}
  >
    <View style={styles.advice}>
      {/* <Text style={styles.text}>Привет!</Text>
      <Text style={styles.text}>Еще не занимался?</Text>
      <Text style={styles.text}>Скорее нажми</Text> */}
      <Text style={styles.text}>Я скучал :(</Text>
      <Text style={styles.text}>Давай приступим</Text>
      <Text style={styles.text}>к тренировке?</Text>
      {/* <Icon style={styles.text} name="arrow-round-down" /> */}
    </View>
    <RountButton onPress={() => navigation.navigate('Sets')}>Начать</RountButton>
    <Image
      source={sadPerson}
      resizeMode={'contain'}
      style={styles.person}
    />
  </ImageBackground>
);

export default withNavigation(HomeFirstScreen);