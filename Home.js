import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Button } from 'react-native';

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.menu} >
          <TouchableOpacity 
            
            onPress={() =>
                this.props.navigation.navigate('FirstComp')
            }
            >
            <Text style={styles.button}>FirstComp</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={() =>
                this.props.navigation.navigate('SecComp')
            }
            >
            <Text style={styles.button}>SecComp</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button} 
            onPress={() =>
                this.props.navigation.navigate('ThirdComp')
            }
            >
            <Text style={styles.button}>ThirdComp</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menu: {
    alignItems: 'baseline',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#222222',
    height: 40
  },
  button: {
    color: 'white',
    paddingHorizontal: 10,
    marginVertical: 5
  }
});
