
import React, { Component } from 'react';
import axios from 'axios';
// import {querystring} from 'querystring';

import { 
  Text,
  TouchableOpacity, 
  Alert, 
  ScrollView, 
  TextInput, 
  View, 
  StyleSheet 
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import{ MapView } from 'expo';
import Menu from './Menu';
import HeaderComp from './Header';

export default class Contact extends Component {
  constructor(){
    super()
    this.state = {
      isHidden: true,
      fname: '',
      lname: '',
      mail: '',
      msg: '',
    }
  }

  handleSubmit = () => {
    console.log(this.state.fname)
    const { fname, lname, mail, msg } = this.state;
    Alert.alert('Dina uppgifter:', `${fname} ${lname} ${mail} ${msg}`);
    
    var data =  JSON.stringify({
      fname: this.state.fname,
      lname: this.state.lname,
      mail: this.state.mail,
      msg: this.state.msg
        });
        
    var config = { 'Content-Type': 'application/x-www-form-urlencoded' }
    
    axios.post('http://127.0.0.1:8080/myProjects/nav-app/api/index.php/?/user',
        data,
        config
        )    
        .catch(function (error) {
        console.log(error);
      });
  
    }
  
  

render() {
  toggleHidden = () => {
    this.setState({isHidden: !this.state.isHidden})
  }

  // const name = ['Namn: ' + this.state.fname + ' ' + this.state.lname];
  // const mail = ['Mailadress: ' + this.state.mail];
  // const msg = ['Meddelande: ' + this.state.msg]

  return (
    <View  style = {styles.component}>

      {/* RENDERING HEADER AND MENU COMPONENTS */}
      <HeaderComp navigation={this.props.navigation} /> 
      {!this.state.isHidden && 
      <Menu navigation={this.props.navigation} />}
      
      <ScrollView>
      <View>
        <Input
          placeholder='KONTAKT'
          placeholderTextColor='white'
          containerStyle={{borderWidth: 8, }}
        />
      </View>
        <Input
          value={this.state.fname}
          onChangeText={(fname) => this.setState({ fname })}       
          containerStyle={{borderWidth: 8, }}
          inputStyle={{color: 'white'}}
          style={styles.input}
          placeholderTextColor='gray'
          placeholder='Förnamn'
          leftIcon={
            <View style={{marginRight: 22}}>
              <Icon
                name='user'
                size={24}
                color='white'
              />
            </View>
          }
        />
        <Input
          value={this.state.lname}
          onChangeText={(lname) => this.setState({ lname })}               
          containerStyle={{borderWidth: 8, }}
          inputStyle={{color: 'white'}}
          style={styles.input}
          placeholderTextColor='gray'
          placeholder='Efternamn'
          leftIcon={
            <View style={{marginRight: 28}}>
              <Icon
                name='male'
                size={24}
                color='white'
              />
            </View>
          }
        />
        <Input
          value={this.state.mail}
          onChangeText={(mail) => this.setState({ mail })}               
          containerStyle={{borderWidth: 8, }}
          inputStyle={{color: 'white'}}
          style={styles.input}
          placeholderTextColor='gray'
          placeholder='Mailadress'
          leftIcon={
            <View style={{marginRight: 20}}>
              <Icon
                name='envelope'
                size={24}
                color='white'
              />
            </View>
          }
        />
        <TextInput
          value={this.state.msg}
          onChangeText={(msg) => this.setState({ msg })}               
          style={styles.textInput}
          multiline={ true }
          placeholder='             Meddelande'
          placeholderTextColor="gray"        
          />

        <TouchableOpacity
          style={styles.button}
          onPress={() => this.handleSubmit()}
        >
          <Text style={styles.buttonText}>SKICKA</Text>
        </TouchableOpacity>

      </ScrollView>
        <MapView
          style={{ 
            height: 300,
            marginBottom: 6, 
            borderWidth: 8, 
            borderRadius: 17 
          }}
          initialRegion={{
            latitude: 59.303703899999995,
            longitude: 18.099517799999997,
            latitudeDelta: 0.0122,
            longitudeDelta: 0.0421,
          }}
        />
      <View />    
    </View>
  )
}
}

const styles = StyleSheet.create ({
component: {
  flex: 1,
  backgroundColor: '#30343A'
},
textInput: {
  borderWidth: 8,
  height: 100,
  padding: 20,
  color: 'white',
},
button: {
  alignSelf: 'stretch',  
  margin: 8,
},
buttonText: {
  marginTop: 20,
  textAlign: 'center',
  paddingVertical: 6,
  color: 'white',
  height: 30,
  borderColor: 'white',
  backgroundColor: '#615E5E',

},

})
  

