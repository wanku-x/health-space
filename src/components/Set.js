import React from 'react';
import { View, Text, Button, StatusBar, Platform, StyleSheet } from 'react-native';
import setsArray from '../variables/setsArray';
import {
  Container,
  Content,
} from 'native-base';


const styles = StyleSheet.create({
  content: {
    paddingTop: Platform.OS === 'ios' ? 15 : StatusBar.currentHeight + 15
  },
});

const Set = ({ route, navigation }) => (
  <Container>
    <Content style={styles.content}>
      <View>
        <Text>{setsArray[route].name}</Text>
        <Button
          title="Go back"
          onPress={() => navigation.goBack()}
        />
        <Text>{setsArray[route].name}</Text>
      </View>
    </Content>
</Container>
);

export default Set;