
import React, { Component } from 'react';
import { Image, AppRegistry, ScrollView, Text, View, StyleSheet } from 'react-native';

export default class Cars extends Component {

  render() {
    return (
      <View  style = {styles.secBox}>
      <ScrollView>
      <Image 
        source={require('../assets/images/bat1.jpg')}
        style={styles.img}

        />

        <Text style={styles.text}>
          Komponent 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est 

        </Text>
      </ScrollView>
        <View />    
      </View>

    )
}
}

const styles = StyleSheet.create ({
  secBox: {
  height: 1000,
//   backgroundColor: '#EFF0F1',
  marginBottom: 10,
  borderRadius: 10
  },
  text: {
    padding: 10,
  },
  img: {
    alignItems: 'stretch',
    width: 400,
    height: 200
  }
  })
  

AppRegistry.registerComponent('AwesomeProject', () => SecComp);
