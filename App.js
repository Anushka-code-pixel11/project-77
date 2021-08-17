import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignupLoginScreen from './screens/SignupLoginScreen';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    ) 
  }
}

const SwitchNavigator = createSwitchNavigator({
  SignupLoginScreen: {
    screen: SignupLoginScreen
  },
});

const AppContainer = createAppContainer(SwitchNavigator);