/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {Navigator} from 'react-native-deprecated-custom-components';

import LoginView from './loginView'
import SecureView from './SecureView'

export default class AppiumTestFramework extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{screen: 'LoginView'}}
        renderScene={(route, nav) => {return this.renderScene(route, nav)}}
      />
    )
  }
  renderScene(route,nav) {
    switch (route.screen) {
      case "LoginView":
        return <LoginView navigator={nav} username={route.username} password={route.password}/>
      case "SecureView":
        return <SecureView navigator={nav} username={route.username} password={route.password}/>
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AppiumTestFramework', () => AppiumTestFramework);
