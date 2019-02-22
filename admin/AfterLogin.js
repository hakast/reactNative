
import React, { Component } from 'react';
import {    ScrollView, 
            Text, 
            View, 
            StyleSheet, 
            Linking,
            Image,
            TouchableOpacity,
        } from 'react-native';
import { Card, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import Menu from '../components/Menu';
import HeaderComp from '../components/Header';

export default class AfterLogin extends Component {
  constructor(){
    super()
    this.state = {
      isHidden: true
    }
  }

  onLogout( ) {
    this.props.navigation.navigate('Home')
  }

  render() {
    toggleHidden = () => {
      this.setState({isHidden: !this.state.isHidden})
      if(this.state.isHidden) {
        console.log('true')
      }
      else {console.log('false')}
    }

    return (
    <View  style = {styles.container} >

      {/* RENDERING HEADER AND MENU COMPONENTS */}
      {/* <HeaderComp navigation={this.props.navigation} /> 
      {!this.state.isHidden && 
      <Menu navigation={this.props.navigation} />} */}

        <ScrollView contentContainerStyle={styles.contentContainer}>
            <Text style={styles.firstText}>DU ÄR NU INLOGGAD!</Text>
            <Image 
            source={require('../assets/images/redTruck.gif')}
            style={styles.imgTwelve}
          />

        <TouchableOpacity style={styles.buttonStyling}>
        <Button
        
              onPress={this.onLogout.bind(this) } 
                title="  TILLBAKA TILL FÖRSTA SIDAN"
                type='clear'
                titleStyle={{color: 'white'}}
                icon={
                  <Icon
                    name="arrow-right"
                    size={15}
                    color="white"
                  />
                }
              />
        </TouchableOpacity>

        </ScrollView>
    <View />    
      </View>

    )
}
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#30343A'  
  },
  contentContainer: {
    marginVertical: 5,
    alignItems: 'stretch',

  },
  firstText:{
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    borderWidth: 1,
    padding: 25,
    borderColor: 'black',
    backgroundColor: 'black',
    fontWeight: '300',
    letterSpacing: 2,
  },
  buttonStyling: {
    borderWidth: 1,
    padding: 25,
    borderColor: 'black',
    backgroundColor: 'black',
    marginTop: 20,
  },
}
)
  

