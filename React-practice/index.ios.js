
'use strict';

import React, {Component, PropTypes, Platform,TouchableNativeFeedback} from "react";
import {View, Text, StyleSheet, TouchableHighlight,NavigatorIOS, TextInput,AppRegistry,Image} from "react-native";


var LoginScreen = require('./app/screens/login/LOGIN');


class Chowmill extends React.Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Chowmill',
          component: LoginScreen,
        }}
      />
    );
  }
}
var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
AppRegistry.registerComponent('Chowmill', () => Chowmill);
