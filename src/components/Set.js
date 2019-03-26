import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { SetsArray } from '../variables/SetsArray';

class Set extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const { route, navigation } = this.props;

    return (
      <View>
        <Text>{SetsArray[route].name}</Text>
        <Button
          title="Go back"
          onPress={() => navigation.goBack()}
        />
        <Text>{SetsArray[route].name}</Text>
      </View>
    );
  }
}

export default Set;