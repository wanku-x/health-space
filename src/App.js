import React from "react";
import { Root, Icon } from "native-base";
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from "react-navigation";

import Home from "./screens/Home";
import Exercises from "./screens/Exercises"; 
import Statistics from "./screens/Statistics";

import Menu from "./components/Menu";

const HomeStack = createStackNavigator(
  {
    Home: Home,
  },
  {
    headerMode: "none",
  }
);

const ExercisesStack = createStackNavigator(
  {
    Exercises: Exercises,
  },
  {
    headerMode: "none",
  }
);

const StatisticsStack = createStackNavigator(
  {
    Statistics: Statistics,
  },
  {
    headerMode: "none",
  }
);

const BottomTabs = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        title: 'Главная',
        tabBarIcon: () => <Icon name="home" />
      }
    },
    Exercises: {
      screen: ExercisesStack,
      navigationOptions: {
        title: 'Упражнения',
        tabBarIcon: () => <Icon name="walk" />
      }
    },
    Statistics: {
      screen: StatisticsStack,
      navigationOptions: {
        title: 'Статистика',
        tabBarIcon: () => <Icon name="stats" />
      }
    },
  },
  {
    initialRouteName: "Home",
    tabBarComponent: props => <Menu {...props} />
  }
);

const AppContainer = createAppContainer(BottomTabs);

const App = () => (
  <Root>
    <AppContainer />
  </Root>
);

export default App;