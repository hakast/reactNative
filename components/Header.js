import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';

export default class HeaderComp extends React.Component {

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
                text: 'TRUCK ON DEMAND', 
                style: { color: '#fff' } 
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

const styles = StyleSheet.create({
  contentContainer: {
    marginVertical: 5,
    alignItems: 'stretch',
    backgroundColor: '#EAE5E5',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    height: 200,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  login: {
    textAlign: 'center',
    color: 'gray',
    padding: 5,
    fontSize: 20,
    textTransform: 'uppercase',
  }
  });
