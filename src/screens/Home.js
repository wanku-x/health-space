import React from 'react';
import { StatusBar } from 'react-native';
import {
  Container,
  Icon,
} from 'native-base';
import Swiper from '@nart/react-native-swiper';

import HomeFirstScreen from './HomeFirstScreen';
import HomeSecondScreen from './HomeSecondScreen';
import HomeThirdScreen from './HomeThirdScreen';

const Home = (props) => (
  <Container>
    <StatusBar
      backgroundColor="rgba(0, 0, 0, 0.3)"
      barStyle="light-content"
      translucent
    />
    <Swiper
      loop={false}
      showsButtons
      nextButton={<Icon name="arrow-dropright" style={{color: "#007aff"}} />}
      prevButton={<Icon name="arrow-dropleft" style={{color: "#007aff"}} />}
    >
      <HomeFirstScreen />
      <HomeSecondScreen />
      <HomeThirdScreen />
    </Swiper>
  </Container>
);

export default Home;