import React, { Component } from "react";
import { StatusBar, StyleSheet, Image, ImageBackground } from "react-native";
import {
  Container,
  Text,
  Icon,
  Button,
} from "native-base";
import Swiper from '@nart/react-native-swiper';

const firstBg = require('../../assets/images/bg1.png');
const secondBg = require('../../assets/images/bg2.png');
const thirdBg = require('../../assets/images/bg3.png');

const smilePerson = require('../../assets/images/person/smile.png');
const sadPerson = require('../../assets/images/person/sad.png');
const normalPerson = require('../../assets/images/person/normal.png');

const styles = StyleSheet.create({
  wrapper: {
  },
  buttons: {
    backgroundColor: 'transparent',
    flexDirection: 'column',
    position: 'absolute',
    top: 0,
    left: 0,
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    paddingTop: 40,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  slide1: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingTop: 35,
    paddingBottom: 46,
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  personAdvice: {
    alignSelf: 'center',
    backgroundColor: '#f00',
  },
  person: {
    height: '40%',
    width: '50%',
  },
  text: {
    color: '#f00',
    fontSize: 30,
    fontWeight: 'bold',
  }
})

class Home extends Component {
  render() {
    return (
      <Container>
        <StatusBar backgroundColor="rgba(0, 0, 0, 0.3)" barStyle="light-content" translucent/>
        <Swiper
          // horizontal={false}
          loop={false}
          showsButtons
          // buttonWrapperStyle={styles.buttons}
          nextButton={<Icon name="arrow-dropright" />}
          prevButton={<Icon name="arrow-dropleft" />}
        >
          <ImageBackground
            source={firstBg}
            style={styles.slide1}
          >
            <Text style={styles.personAdvice}>ХУЙ!!!</Text>
            <Button block rounded style={{width: '50%', alignSelf: 'center', marginBottom: 30}}>
              <Text>Primary</Text>
            </Button>
            <Image
              source={smilePerson}
              style={styles.person}
              resizeMode={'contain'}
            />
          </ImageBackground>
          <ImageBackground
            source={secondBg}
            style={styles.slide2}
          >
            <Text style={styles.text}>Beautiful</Text>
          </ImageBackground>
          <ImageBackground
            source={thirdBg}
            style={styles.slide3}
          >
            <Text style={styles.text}>And simple</Text>
          </ImageBackground>
        </Swiper>
      </Container>
    );
  }
}

export default Home;