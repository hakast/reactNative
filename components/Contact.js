
import React, { Component } from 'react';
import { AppRegistry, ScrollView, Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
export default class ThirdComp extends Component {

render() {
  return (
    <View  style = {styles.component}>
      <ScrollView>
      <View style={{}}>
        <Input
          placeholder='KONTAKT'
          placeholderTextColor='white'
          containerStyle={{borderWidth: 8, }}
        />
      </View>
        <Input       
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
      </ScrollView>
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
})
  

AppRegistry.registerComponent('AwesomeProject', () => ThirdComp);
