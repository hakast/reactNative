import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AppContainer from './AppNavigator';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      possibleFriends: [
        'Allie',
        'Gator',
        'Lizzie'
      ],
      currentFriends: []
    }
  }

  addFriend = (index) => {
    const {
      currentFriends,
      possibleFriends
    } = this.state
  
  const addedFriend = possibleFriends.splice(index, 1)
  currentFriends.push(addedFriend)

  this.setState({
    currentFriends,
    possibleFriends
  })
  }

  render() {
    return (
      <AppContainer
      screenProps = {{
        currentFriends: this.state.currentFriends,
        possibleFriends: this.state.possibleFriends,
        addFriend: this.addFriend
      }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
