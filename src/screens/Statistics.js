import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import {
  Container,
  Content,
  Text
} from 'native-base';

import Menu from '../components/Menu';

class Statistics extends Component {
  render() {
    return (
      <Container>
        <StatusBar
          backgroundColor="rgba(0, 0, 0, 0.3)"
          barStyle="light-content"
          translucent
        />
        <Content>
          <Text>Statistics</Text>
        </Content>
      </Container>
    );
  }
}

export default Statistics;