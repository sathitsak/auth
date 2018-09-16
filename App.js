import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Header} from './src/components/common'
import * as firebase from 'firebase';
import LoginForm from './src/components/LoginForm'

export default class App extends React.Component {
  componentWillMount(){
    firebase.initializeApp(firebaseConfig);

  }

  render() {
    return (

      <View >
        <Header headerText = "Auth"/>
        <LoginForm/>
       
      </View>
    );
  }
}



const firebaseConfig = {
  apiKey: "AIzaSyCTtbMUYIaDpJGMx6wBztoL2ErVZgPIRrw",
  authDomain: "authentication-22c94.firebaseapp.com",
  databaseURL: "https://authentication-22c94.firebaseio.com",
  storageBucket: "authentication-22c94.appspot.com"
};
