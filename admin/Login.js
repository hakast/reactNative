import React, { Component } from 'react';
import {  Alert, 
          Button, 
          TextInput, 
          View, 
          StyleSheet, 
          Linking
        } 
          from 'react-native';
import axios from 'axios';
import qs from 'qs';
import Menu from '../components/Menu';
import HeaderComp from '../components/Header';

export default class Login extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
    };
  }
  
  onLogin = () => {
    const { username, password } = this.state;
    Alert.alert('Du skrev in dessa uppgifter:', `${username} ${password} `);
    
    var data =  qs.stringify({
      username: this.state.username,
      password: this.state.password,
        });
        
    var config = { 'Content-Type': 'application/x-www-form-urlencoded' }
    
    axios.post('http://127.0.0.1:8080/myProjects/nav-app/api/index.php/?/user',
        data,
        config
        )    
        .catch(function (error) {
        console.log(error);
      });

      if(this.state.username === 'Admin' && this.state.password === 'admin') {
        this.props.navigation.navigate('AfterLogin')
      }
    }

  render() {  
    return (
      <View style={styles.container}>

        <TextInput
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
          placeholder={'Användarnamn'}
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Lösenord'}
          secureTextEntry={true}
          style={styles.input}
        />
        
        <Button
          title={'Logga in'}
          style={styles.input}
          onPress={this.onLogin.bind(this) }                   
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  component: {
    backgroundColor: '#EAE5E5',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
});
