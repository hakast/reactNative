
import React, { Component } from 'react';
import {  Image, AppRegistry, Text, View, StyleSheet, TextInput } from 'react-native';
import {Button} from 'react-native-elements';

export default class FirstComp extends Component {

  render() {
    return (
      <View>
          <Text style={styles.varaTjanster}>VÅRA TJÄNSTER</Text>
          <Text style={styles.bodyText}>Lorem Ipsum är en utfyllnadstext från tryck- och förlagsindustrin. Lorem ipsum har varit standard ända sedan 1500-talet, när en okänd boksättare tog att antal bokstäver och blandade dem för att göra ett provexemplar av en bok.</Text>
          <Image 
            source={require('../assets/images/10.jpg')}
            style={styles.yellowCar}
          />

      </View>
    );
  }
}

const styles = StyleSheet.create({
    varaTjanster: {
        color: '#343A40',
        fontSize: 24,
        padding: 20,
        paddingLeft: 20,
        paddingBottom: 30,
    }, 
    bodyText: {
        color: '#343A40',
        fontSize: 20,
        paddingLeft: 20,
        paddingBottom: 30,
    },
    yellowCar: {
      marginVertical: 50,
      height: 300,
      width: null  
    }
  });
