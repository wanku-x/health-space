import React from 'react';
import {
  View,
  Text,
  StatusBar,
  Platform,
  StyleSheet
} from 'react-native';
import { Container, Content } from 'native-base';

import RountButton from '../components/RoundButton';

const styles = StyleSheet.create({
  content: {
    paddingTop: Platform.OS === 'ios' ? 15 : StatusBar.currentHeight + 15
  }
});

const Set = ({ navigation }) => {
  const set = navigation.getParam('set');

  return (
    <Container>
      <Content style={styles.content} bounces={false}>
        <View  bounces={false}>
          <Text>{set.name}</Text>
          <Text>Давай начнём упражнение!</Text>
          <RountButton onPress={() => navigation.goBack()}>Начать</RountButton>
        </View>
      </Content>
    </Container>
  );
};

export default Set;
