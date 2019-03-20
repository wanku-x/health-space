import React from "react";
import { Root } from "native-base";
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
    Home: HomeStack,
    Exercises: ExercisesStack,
    Statistics: StatisticsStack,
  },
  {
    initialRouteName: "Home",
    // contentOptions: {
    //   activeTintColor: "#e91e63"
    // },
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