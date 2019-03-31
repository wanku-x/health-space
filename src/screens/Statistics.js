import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Container, Content, Text } from 'native-base';

import { sets } from '../variables/sets';
import { readCompletedSets } from '../utils/storage';

class Statistics extends Component {
  state = {
    completedSets: []
  };

  async componentDidMount() {
    const completedSets = await readCompletedSets();

    this.setState({ completedSets });
  }

  render() {
    const { completedSets } = this.state;

    return (
      <Container>
        <StatusBar
          backgroundColor="rgba(0, 0, 0, 0.3)"
          barStyle="light-content"
          translucent
        />
        <Content>
          <Text>Statistics</Text>
          {completedSets.map((set, i) => (
            <Text key={i}>
              Set: {sets[set.id].name}, completed at: {set.completedAt}
            </Text>
          ))}
        </Content>
      </Container>
    );
  }
}

export default Statistics;
