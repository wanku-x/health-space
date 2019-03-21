import React, { Component } from "react";
import { StatusBar, StyleSheet, View, ImageBackground } from "react-native";
import {
  Container,
  Text,
  Icon,
} from "native-base";
import Swiper from '@nart/react-native-swiper';

const firstBg = require('../../assets/images/bg1.png');
const secondBg = require('../../assets/images/bg2.png');
const thirdBg = require('../../assets/images/bg3.png');

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
    justifyContent: 'center',
    alignItems: 'center',
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
  text: {
    color: '#fff',
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
            <Text style={styles.text}>Hello Swiper</Text>
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