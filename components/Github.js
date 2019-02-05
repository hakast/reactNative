
import React, { Component } from 'react';
import axios from 'axios';
import { ScrollView, ListView, Text, Linking, Image, View, StyleSheet, TextInput } from 'react-native';
import { Card, Divider, Icon, SocialIcon, Button, } from 'react-native-elements';

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
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <Card title="INTRESSANTA GITHUBKONTON"
            titleStyle={{color: 'gray', paddingTop: 10, paddingBottom: 10,}}
          >
            {
              this.state.persons.map((person, i) => {
                return (
                  <View key={i}>
                  <Text style={styles.login}>{person.login}</Text>
                    <Image
                      style={styles.image}
                      resizeMode="cover"
                      source={{ uri: person.avatar_url }}
                    />
                    <Button
                      onPress={() => { Linking.openURL(person.html_url) } } 
                      titleStyle={{color: 'gray'}}
                      // icon={{name: 'star'}}
                      buttonStyle={{
                        marginLeft: 0, 
                        marginRight: 0, 
                        marginBottom: 25, 
                        marginTop: 15,
                        backgroundColor:'white', 
                        borderColor: '#E8E1E1', borderWidth: 2}}
                      title='Öppna Github ...' />
                  </View>
                );
              })
            }
          </Card>

          </ScrollView>

      );
    }
}

const styles = StyleSheet.create({
  contentContainer: {
    marginVertical: 5,
    alignItems: 'stretch',
    backgroundColor: '#3E3E3E'
  },
  image: {
    height: 200,
    width: 350,
    borderRadius: 10,
    // margin: 20,
  },
  login: {
    textAlign: 'center',
    color: 'gray',
    paddingBottom: 15,
    fontSize: 20,
    textTransform: 'uppercase',
  }
  });
