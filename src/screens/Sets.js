import React from 'react';
import { StatusBar, Platform, StyleSheet } from 'react-native';
import {
  Body,
  Container,
  Content,
  Icon,
  Separator,
  Right,
  Text,
  ListItem
} from 'native-base';

import sets from '../variables/sets';

const styles = StyleSheet.create({
  content: {
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
  }
});

const Sets = ({ navigation }) => (
  <Container>
    <Content style={styles.content}>
      {sets.map((setGroup, i) => (
        <React.Fragment key={i}>
          <Separator bordered>
            <Text>{setGroup.name.toUpperCase()}</Text>
          </Separator>
          {setGroup.items.map((set, setIndex) => (
            <ListItem
              onPress={() => navigation.navigate('Set', { set })}
              key={setIndex}
            >
              <Body>
                <Text>
                  {set.name} ({set.calories} ккал)
                </Text>
                <Text note numberOfLines={1}>
                  {set.discription}
                </Text>
              </Body>
              <Right>
                <Icon
                  active
                  name="md-arrow-round-forward"
                  style={{ fontSize: 30, color: '#007aff' }}
                />
              </Right>
            </ListItem>
          ))}
        </React.Fragment>
      ))}
    </Content>
  </Container>
);

export default Sets;
