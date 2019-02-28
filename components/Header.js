import React from 'react';
import { View } from 'react-native';
import { Header } from 'react-native-elements';

export default class HeaderComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [],
      isHidden: true
    }
  }

  render() {
        return (
        <View>
          <Header
              containerStyle={{
                backgroundColor: '#343A40', 
                marginTop: -40
                }}       
              leftComponent={{ 
                icon: 'menu', 
                color: '#fff',  
                onPress: () => {toggleHidden()}

              }}
              centerComponent={{ 
                text: 'LOGIN',
                style: {color: '#fff'},  
                onPress: () => this.props.navigation.navigate('Login')
              }}
              rightComponent={{ 
                icon: 'home', 
                color: '#fff', 
                onPress: () => this.props.navigation.navigate('Home')

              }}               
          />
          </View>
      );
    }
}
