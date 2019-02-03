
import React, { Component } from 'react';
import axios from 'axios';
import {  Image, AppRegistry, Text, View, StyleSheet, TextInput } from 'react-native';
import {Button} from 'react-native-elements';

export default class Github extends Component {


  render() {
    const getImages = () => {
      return this.http.get('https://api.github.com/users')
    }  
  
    return (
    <View>
      {/* <View> {getImages}</View> */}
        <Text>skit</Text>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  firstComp: {
    height: 400,
    marginTop: 500
  },
  });
