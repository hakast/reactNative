
import React, { Component } from 'react';
import { Image, AppRegistry, Text, View, StyleSheet, TextInput } from 'react-native';
import {Button} from 'react-native-elements';

export default class FirstComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      isModalVisible: true
    }
  }

  toggleShow = () => {
    console.log('knapp nedtryckt');
    this.setState({isModalVisible: false})
  }

  render() {
    return (
      <View style={styles.firstComp}  >

        <View style={styles.image}>
          <Image source={require('./images/0.jpg')}
          />
        </View>
          <Text style={styles.textView}>
            <Text style={styles.baseText}>Välkommen att skriva!</Text>
          </Text>

            <TextInput
              style={styles.input}
              placeholder="Nisse"
              onChangeText={(text) => this.setState({input: text})}
            >
          </TextInput>

          <Text style={styles.youWrote}>{'Du skrev: ' + this.state.input}</Text>
          <Button 
              style={styles.button}
              onPress={this.toggleShow}
              title="Klicka"
          />
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  firstComp: {
    height: 400,
    marginTop: 500
  },
  image: {
    // marginTop: 50,
  },
  baseText: {
    color: 'gray' ,
    fontFamily: 'Arial',
    fontSize: 24
  },
  textView: {
    marginTop: 50,
  },
  youWrote: {
    color: 'white',
    padding: 10
  },
  input: {
    height: 40, 
    borderColor: 'gray', 
    color: 'white',
    borderWidth: 1,
    // alignItems: 'stretch',
  },
  button: {
    // marginBottom: 500
  }
  });
AppRegistry.registerComponent('AwesomeProject', () => FirstComp);
