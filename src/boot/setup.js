import React, { Component } from 'react';
import { Font, AppLoading } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { StyleProvider } from 'native-base';

import App from '../App';
import getTheme from '../theme/components';
import variables from '../theme/variables/commonColor';

export default class Setup extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }

  componentWillMount() {
    this.loadFonts();
  }

  async loadFonts() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
      // Ionicons: require('@expo/vector-icons/fonts/Ionicons.ttf'),
      // Entypo: require('native-base/Fonts/Entypo.ttf'),
      // Feather: require('native-base/Fonts/Feather.ttf'),
      // FontAwesome: require('native-base/Fonts/FontAwesome.ttf'),
      // MaterialIcons: require('native-base/Fonts/MaterialIcons.ttf'),
      // MaterialCommunityIcons: require('native-base/Fonts/MaterialCommunityIcons.ttf'),
      // Octicons: require('native-base/Fonts/Octicons.ttf'),
      // Zocial: require('@expo/vector-icons/fonts/Zocial.šttf'),
      // SimpleLineIcons: require('native-base/Fonts/SimpleLineIcons.ttf'),
      // EvilIcons: require('native-base/Fonts/EvilIcons.ttf'),
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return (
      <StyleProvider style={getTheme(variables)}>
        <App />
      </StyleProvider>
    );
  }
}