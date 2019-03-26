import React, { Component } from "react";
import { Button, View, Text, StyleSheet } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import {
  Container,
  Content,
  Card,
  CardItem,
  List,
  ListItem,
  Thumbnail,
  Left,
  Body,
  Right,
} from "native-base";

import { SetsArray } from '../variables/SetsArray';

const styles = StyleSheet.create({
  card1:{
    top: 0,
    left: 0,
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    paddingTop: 20,
    marginTop: 0,
    marginLeft: 0,
    marginRight: 0,
  },
  card2:{
    top: 0,
    left: 0,
    bottom: 0,
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    paddingTop: 20,
    marginTop: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
  }
})

class ExercisesScreen extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Card style={styles.card1}>
            <CardItem header>
              <Text>Выбирите упражнение</Text>
            </CardItem>
          </Card>
          <List>
          {/* {for (let Set in SetsArray) { */}

            {/* }} */}
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'Image URL' }} />
              </Left>
              <Body>
                <Text>Комплекс 1</Text>
                <Text note numberOfLines={1}>Описание комплекса . . .</Text>
              </Body>
              <Right>
                <Button 
                title="начать"
                transparent 
                onPress={() => this.props.navigation.navigate('Set1')} //номер комплекса
                />
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

// class ExerciseScreen extends React.Component {
//   render() {
//     return (
//         <Card style={styles.card2}>
//           <CardItem header>
//             <Button
//             title="Go back"
//             onPress={() => this.props.navigation.goBack()}
//             />
//           </CardItem>
//         </Card>
//     );
//   }
// }

// const RootStack = createStackNavigator(
//   {
//     Exercises: {
//       screen: ExercisesScreen,
//     },
//     Exercise: {
//       screen: ExerciseScreen,
//       footerMode: "none",
//     },
//   },
//   {
//     initialRouteName: 'Exercises',
//     headerMode: "none",
//   }
// );

// const AppContainer = createAppContainer(RootStack);

export default ExercisesScreen;
