
import React, { Component } from 'react';
import { ScrollView, TextInput, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import{ MapView } from 'expo';

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
        <TextInput
          style={styles.textInput}
          multiline={ true }
          placeholder='             Meddelande'
          placeholderTextColor="gray"        
          />

      </ScrollView>
        <MapView
          style={{ flex: 1, marginBottom: 20, borderWidth: 8, borderRadius: 17 }}
          initialRegion={{
            latitude: 59.303703899999995,
            longitude: 18.099517799999997,
            latitudeDelta: 0.0222,
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
}
})
  

