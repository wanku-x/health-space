import React from 'react';
import { Root, Icon } from 'native-base';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

import Home from './screens/Home';
import Sets from './screens/Sets'; 
import Statistics from './screens/Statistics';

import Menu from './components/Menu';
import Set from './screens/Set';

const HomeStack = createStackNavigator(
  {
    Home: Home,
  },
  {
    headerMode: 'none',
  }
);

const SetsStack = createStackNavigator(
  {
    Sets: Sets,
  },
  {
    headerMode: 'none',
  }
);

const StatisticsStack = createStackNavigator(
  {
    Statistics: Statistics,
  },
  {
    headerMode: 'none',
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
    Sets: {
      screen: SetsStack,
      navigationOptions: {
        title: 'Комплексы',
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
    initialRouteName: 'Home',
    tabBarComponent: Menu,
  }
);

const Routes = { BottomTabs, Set };

const Navigation = createStackNavigator(
  Routes,
  {
    initialRouteName: 'BottomTabs',
    headerMode: 'none',
  }
);

const AppContainer = createAppContainer(Navigation);

const App = () => (
  <Root>
    <AppContainer />
  </Root>
);

export default App;