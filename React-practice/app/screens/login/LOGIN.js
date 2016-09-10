'use strict';

var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');

import React, {Component, PropTypes, Platform,props,TouchableNativeFeedback } from "react";
import {View, Text, StyleSheet, NavigatorIOS,TouchableHighlight, TextInput,AppRegistry,Image} from "react-native";
var styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      flex: 1,
      backgroundColor: 'transparent'
    },
    bg: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: windowSize.width,
        height: windowSize.height
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: .5,
        backgroundColor: 'transparent'
    },
    mark: {
        width: 150,
        height: 150
    },
    signin: {
        backgroundColor: '#FF3366',
        padding: 20,
        alignItems: 'center'
    },
    signup: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: .15
    },
    inputs: {
        marginTop: 10,
        marginBottom: 10,
        flex: .25
    },
    inputPassword: {
        marginLeft: 15,
        width: 20,
        height: 21
    },
    inputUsername: {
      marginLeft: 15,
      width: 20,
      height: 20
    },
    inputContainer: {
        padding: 10,
        borderWidth: 1,
        borderBottomColor: '#CCC',
        borderColor: 'transparent'
    },
    input: {
        position: 'absolute',
        left: 61,
        top: 12,
        right: 0,
        height: 20,
        fontSize: 14
    },
    forgotContainer: {
      alignItems: 'flex-end',
      padding: 15,
    },
    greyFont: {
      color: '#D8D8D8'
    },
    whiteFont: {
      color: '#FFF'
    }
});


class LOGIN extends Component {
  constructor(props) {
      super(props);
      this.state = {username:'',password:''};
    }
handleChange(event) {
      this.setState({value: event.target.value});
    }

goToMyRoute(myParameter){
        var signup =require('./signup');
        this.props.toRoute( {name: "signup", component: signup, data :myParameter})
    }


  render() {
     var TouchableElement = TouchableHighlight;

    return (
        <View style={styles.container}>
            <Image style={styles.bg} source={{uri: '/app/img/images.jpeg'}} />
            <View style={styles.header}>
                <Image style={styles.mark} source={{uri: 'http://i.imgur.com/da4G0Io.png'}} />
            </View>
            <View style={styles.inputs}>
                <View style={styles.inputContainer}>
                    <Image style={styles.inputUsername} source={{uri: 'http://i.imgur.com/iVVVMRX.png'}}/>
                    <TextInput
                        style={[styles.input, styles.whiteFont]}
                        placeholder="Username"
                        placeholderTextColor="#666666"
                        onChangeText={(username) => this.setState({username})}
                        value={this.state.value}

                    />
                </View>
                <View style={styles.inputContainer}>
                    <Image style={styles.inputPassword} source={{uri: 'http://i.imgur.com/ON58SIG.png'}}/>
                    <TextInput
                        password={true}
                        style={[styles.input, styles.whiteFont]}
                        placeholder="Pasword"
                        placeholderTextColor="#666666"
                        onChangeText={(password) => this.setState({password})}
                        value={this.state.value}
                    />
                </View>
                <TouchableElement
                style={styles.button}
                   >
                <View style={styles.forgotContainer}>
                    <button style={styles.buttonText} >Forgot Pass</button>
                </View>
                </TouchableElement>
            </View>
            <View style={styles.signin}>
                <Text style={styles.buttonText} >Sign In</Text>
            </View>
            <TouchableElement onPress={ () => {this.goToMyRoute("SomeData")} }>
            <View style={styles.signup}>
                <Text style={styles.greyFont} >Dont have an account?<Text style={styles.whiteFont}> Sign Up</Text></Text>
            </View>
            </TouchableElement>

        </View>
    );
  }
}



module.exports = LOGIN;
