import React from 'react';
import { Image, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default class Friends extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Add friends here!</Text>
        {
          this.props.screenProps.possibleFriends.map((friend, index) => (
            <Button
            style={styles.button}
              key={ friend }
              title={ `Add ${ friend }` }
              onPress={() =>
                this.props.screenProps.addFriend(index)
              }
            />
          )
        )
        }
        <View style={styles.homeButton}>
        <Button
        color= 'white'
        title="Back to home"
        onPress={() =>
        this.props.navigation.navigate('Home')
          }
        />

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'gray',
    padding: 10,
    width: 150,
    marginTop: 20,
    color: 'red',
  },
  homeButton: {
      backgroundColor: 'gray',
      color: 'white',
      padding: 10

  }
});