import React, { Component } from "react";
import { Button, View, Text } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import {
  Container,
  Content,
  List,
  ListItem,
  Thumbnail,
  Left,
  Body,
  Right,
} from "native-base";

class ExercisesScreen extends Component {
  render() {
    return (
      <Container>
        <Content>
          <List>
              <ListItem thumbnail>
                <Left>
                  <Thumbnail square source={{ uri: 'Image URL' }} />
                </Left>
                <Body>
                  <Text>Sankhadeep</Text>
                  <Text note numberOfLines={1}>Its time to build a difference . .</Text>
                </Body>
                <Right>
                  <Button 
                  title="Try"
                  transparent 
                  onPress={() => this.props.navigation.navigate('Exercise')} 
                  />
                </Right>
              </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

class ExerciseScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Exercise Screen</Text>
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Exercises: {
      screen: ExercisesScreen,
    },
    Exercise: {
      screen: ExerciseScreen,
      footerMode: "none",
    },
  },
  {
    initialRouteName: 'Exercises',
    headerMode: "none",
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return (
      <AppContainer/>
    );
  }
}
