import React, { Component } from "react";
//import { withNavigation } from 'react-navigation';
import {
  Button,
  Icon,
  Text,
  Footer,
  FooterTab
} from "native-base";

class Menu extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <Footer>
        <FooterTab>
          <Button
            vertical
            onPress={() => this.props.navigation.navigate('Home')}
          >
            <Icon name="apps" />
            <Text>Home</Text>
          </Button>
          <Button
            vertical
            onPress={() => this.props.navigation.navigate('Exercises')}
          >
            <Icon name="navigate" />
            <Text>Exercises</Text>
          </Button>
          <Button
            vertical
            onPress={() => this.props.navigation.navigate('Statistics')}
          >
            <Icon name="person" />
            <Text>Statistics</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}

export default Menu;