
import React, { Component } from 'react';
import axios from 'axios';
import { ScrollView, Text, Linking, Image, View, StyleSheet } from 'react-native';
import { Card, Button, Header } from 'react-native-elements';
import Menu from './Menu';
import HeaderComp from './Header';

export default class Github extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: []
    }
  }

    componentDidMount() {
      axios.get('https://api.github.com/users')
        .then(res => {
          const persons = res.data;
          this.setState({ persons });
        })
        .catch(error => {
          (error)
        })
      }
  
  render() {
        return (
        <View>
          <HeaderComp navigation={this.props.navigation} />      
          <Menu navigation={this.props.navigation} />

          {/* <Header
              containerStyle={{
                backgroundColor: '#343A40', 
                marginTop: -40
                }}       
              leftComponent={{ 
                icon: 'menu', 
                color: '#fff',  
                onPress: () => this.props.navigation.navigate('Cars')

              }}
              centerComponent={{ 
                text: 'MOBILE APP', 
                style: { color: '#fff' } 
              }}
              rightComponent={{ 
                icon: 'home', 
                color: '#fff', 
                onPress: () => this.props.navigation.navigate('Home')

              }}
                
          /> */}

        <ScrollView contentContainerStyle={styles.contentContainer}>

          <Card title="INTRESSANTA GITHUBKONTON"
            titleStyle={{
              color: 'gray', 
              paddingTop: 10, 
              paddingBottom: 10,
            }}
          >
            {
              this.state.persons.map((person, i) => {
                return (
                  <View key={i}>

                  {/* LINE ABOVE LOGIN NAME */}
                    <View
                        style={{
                          borderBottomColor: '#E8E1E1',
                          borderBottomWidth: 1,
                          marginBottom: 3,
                        }}
                      >   
                    </View> 

                    {/* LOGIN NAME */}
                  <Text style={styles.login}>{person.login}</Text>
                    
                    {/* LINE BELOW LOGIN NAME */}                 
                  <View
                        style={{
                          borderBottomColor: '#E8E1E1',
                          borderBottomWidth: 1,
                          marginBottom: 20,
                        }}
                      >   
                    </View>  

                    <Image
                      style={styles.image}
                      resizeMode="cover"
                      source={{ uri: person.avatar_url }}
                    />
                    <Button
                      onPress={() => { Linking.openURL(person.html_url) } } 
                      titleStyle={{color: 'gray'}}
                      buttonStyle={{
                        marginLeft: 0, 
                        marginRight: 0, 
                        marginBottom: 25, 
                        marginTop: 15,
                        backgroundColor:'white', 
                        borderColor: '#E8E1E1', borderWidth: 2}}
                      title='Se Githubkonto!' />
                  </View>
                );
              })
            }
          </Card>
          </ScrollView>
          </View>
      );
    }
}

const styles = StyleSheet.create({
  contentContainer: {
    marginVertical: 35,
    alignItems: 'stretch',
    backgroundColor: '#EAE5E5',
    // flex: 1,
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
