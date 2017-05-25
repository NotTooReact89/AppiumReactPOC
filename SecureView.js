"use strict";

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
  Button
} from 'react-native';

var LoginView = require("./loginView");

class SecureView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: this.props.username,
            password: this.props.password
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.heading} accessibilityLabel="textViewUsername">
                    Welcome {this.props.username}!
                </Text>
                <Text style={styles.subheading} accessibilityLabel="textViewPassword">
                    Your password is {this.props.password}
                </Text>
                <Button
                  accessibilityLabel="buttonLogout"
                  onPress={(this.onLogOffButtonPressed.bind(this))}
                  style={styles.button}
                  title="Log out" />
            </View>
        );
    }

    onLogOffButtonPressed() {
      this.props.navigator.popToTop();
    }
};

var styles = StyleSheet.create({
    container: {
        padding: 30,
        marginTop: 65,
        alignItems: "center"
    },
    heading: {
        marginBottom: 20,
        fontSize: 18,
        textAlign: "center",
        color: "#656565"
    },
    subheading: {
        color: "#cccccc"
    },
    button: {
        height: 50,
        flex: 1,
        backgroundColor: "#555555",
        borderColor: "#555555",
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 10,
        justifyContent: "center"
    },
    buttonText: {
        fontSize: 18,
        color: "#ffffff",
        alignSelf: "center"
    },
});

module.exports = SecureView;
