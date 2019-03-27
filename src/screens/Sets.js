import React from 'react';
import { Text, Button } from 'react-native';
import {
  Container,
  Content,
} from 'native-base';

import setsArray from '../variables/setsArray';

const Sets = ({ navigation }) => (
  <Container>
    <Content>
      <Text>ХУЙ!!!</Text>
      <Button
        title="Set1"
        onPress={() => navigation.navigate('Set1')}
      />
      <Button
        title="Set2"
        onPress={() => navigation.navigate('Set2')}
      />
    </Content>
  </Container>
);

export default Sets;
