
import React, { Component } from 'react';
import axios from 'axios';
import { ScrollView, Text, Linking, Image, View, StyleSheet, TextInput } from 'react-native';
import { Card, List, Button, Icon, ListItem, FlatList, withTheme } from 'react-native-elements';

export default class Github extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: []
    }
  }

    componentDidMount() {
      console.log('nisse')
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
        <View style={styles.container}> 
          <Card title="DYNAMISKT GENERERADE GITHUBANVÄNDARE">
            {
              this.state.persons.map((person, i) => {
                return (
                  <View key={i} style={styles.user}>
                  <ScrollView>
                  <Text style={styles.login}>{person.login}</Text>

                    <Image
                      // imageStyle={{ alignItems: 'stretch', }}
                      style={styles.image}
                      resizeMode="cover"
                      source={{ uri: person.avatar_url }}
                    />
                    <Button
                      onPress={() => { Linking.openURL(person.html_url) } } 
                      titleStyle={{color: 'white'}}
                      // icon={{name: 'star'}}
                      buttonStyle={{
                        marginLeft: 0, 
                        marginRight: 0, 
                        marginBottom: 20, 
                        marginTop: 20,
                        backgroundColor:'#343A40', 
                        borderColor: '#E8E1E1', borderWidth: 1}}
                      title='Öppna Github ...' />


                    </ScrollView>
                  </View>
                );
              })
            }
          </Card>

          </View>    
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#E8E1E1',
  },
  image: {
    height: 200,
    width: 350,
    borderRadius: 10,
    // margin: 20,
  },
  login: {
    alignItems: 'center',
  }
  });
