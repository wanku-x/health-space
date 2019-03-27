import React from 'react';
import { View, Text, Button } from 'react-native';
import setsArray from '../variables/setsArray';

const Set = ({ route, navigation }) => (
  <View>
    <Text>{setsArray[route].name}</Text>
    <Button
      title="Go back"
      onPress={() => navigation.goBack()}
    />
    <Text>{setsArray[route].name}</Text>
  </View>
);

export default Set;