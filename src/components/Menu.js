import React, { Component } from 'react';
import {
  Button,
  Text,
  Footer,
  FooterTab
} from 'native-base';

class Menu extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const {
      renderIcon,
      getLabelText,
      onTabPress,
      navigation
    } = this.props;

    const { routes, index: activeRouteIndex } = navigation.state;

    return (
      <Footer>
        <FooterTab>
          {routes.map((route, routeIndex) => {
            const isRouteActive = routeIndex === activeRouteIndex;
            return (
              <Button
                vertical
                key={routeIndex}
                active={isRouteActive}
                onPress={() => { onTabPress({ route }) }}
              >
                {renderIcon({ route })}
                <Text style={{ fontWeight: '500' }}>{getLabelText({ route })}</Text>
              </Button>
            );
          })}
        </FooterTab>
      </Footer>
    );
  }
}

export default Menu;