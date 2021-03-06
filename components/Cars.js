
import React, { Component } from 'react';
import { ScrollView, Text, View, StyleSheet, Linking } from 'react-native';
import { Card, Button } from 'react-native-elements'
import Menu from './Menu';
import HeaderComp from './Header';

export default class Cars extends Component {
  constructor(){
    super()
    this.state = {
      isHidden: true
    }
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
      <View  style = {styles.component}>

      {/* RENDERING HEADER AND MENU COMPONENTS */}
      <HeaderComp navigation={this.props.navigation} /> 
      {!this.state.isHidden && 
      <Menu navigation={this.props.navigation} />}

      <ScrollView>
        <Card
          titleStyle={{color: 'gray'}}
          imageStyle={{ 
            marginLeft: 10,  
            marginRight: 10,
            height: 200 }}
          title='LASTBIL #1'
          image={require('../assets/images/10.jpg')}>
          <Text style={{marginBottom: 10}}>
          Poängen med Lorem Ipsum är att det ger ett normalt ordflöde. Poängen med Lorem Ipsum är att det ger ett normalt ordflöde.
          </Text>
          <Button
          onPress={() => { Linking.openURL('https://www.123rf.com/photo_28092706_large-yellow-truck-isolated-on-white-background.html') } } 
          titleStyle={{color: 'black'}}
          icon={{name: 'star'}}
          backgroundColor='#FFFFFF'
          buttonStyle={{marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor:'#FFFFFF', borderColor: '#E8E1E1', borderWidth: 1}}
          title='Läs mer ...' />
            
        </Card>

        <Card
          titleStyle={{color: 'gray'}}
          imageStyle={{ 
            marginLeft: 10,  
            marginRight: 10,
            height: 200 }}
          title='LASTBIL #2'
          image={require('../assets/images/7.jpg')}>
          <Text style={{marginBottom: 10}}>
          Poängen med Lorem Ipsum är att det ger ett normalt ordflöde. Poängen med Lorem Ipsum är att det ger ett normalt ordflöde.
          </Text>
          <Button
          onPress={() => { Linking.openURL('https://www.youtube.com/watch?v=Dxv7KRPBUcg') } } 
          titleStyle={{color: 'black'}}
          icon={{name: 'star'}}
          buttonStyle={{marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor:'#FFFFFF', borderColor: '#E8E1E1', borderWidth: 1}}
          title='Läs mer ...' />
        </Card>

        <Card  
          titleStyle={{color: 'gray'}}
          imageStyle={{ 
            marginLeft: 10,  
            marginRight: 10,
            height: 200 }}
          title='LASTBIL #3'
          image={require('../assets/images/5.jpg')}>
          <Text style={{marginBottom: 10}}>
          Poängen med Lorem Ipsum är att det ger ett normalt ordflöde. Poängen med Lorem Ipsum är att det ger ett normalt ordflöde.
          </Text>
          <Button
          onPress={() => { Linking.openURL('https://www.videoblocks.com/video/convoy-of-white-trucks-semi-trailer-on-the-road-highway-transports-logistics-concept-4k-realistic-animation-rvrc3brlfjdjegbnb') } } 
          titleStyle={{color: 'black'}}
          icon={{name: 'star'}}
          buttonStyle={{marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor:'#FFFFFF', borderColor: '#E8E1E1', borderWidth: 1}}
          title='Läs mer ...' />
        </Card>

        <Card
          titleStyle={{color: 'gray'}}
          imageStyle={{ 
            marginLeft: 10,  
            marginRight: 10,
            height: 200 }}
          title='LASTBIL #4'
          image={require('../assets/images/9.jpg')}>
          <Text style={{marginBottom: 10}}>
          Poängen med Lorem Ipsum är att det ger ett normalt ordflöde. Poängen med Lorem Ipsum är att det ger ett normalt ordflöde.
          </Text>
          <Button
          onPress={() => { Linking.openURL('http://www.redtrucktahoe.com/') } } 
          titleStyle={{color: 'black'}}
          icon={{name: 'star'}}
          buttonStyle={{marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor:'#FFFFFF', borderColor: '#E8E1E1', borderWidth: 1}}
          title='Läs mer ...' />
        </Card>

      </ScrollView>
        <View />    
      </View>

    )
}
}

const styles = StyleSheet.create ({
  component: {
    backgroundColor: '#EAE5E5',
  }
  })
  

