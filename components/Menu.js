import React from 'react';
import { ScrollView, TouchableOpacity, StyleSheet, Text, View, Image, Linking } from 'react-native';
import { SocialIcon, Header } from 'react-native-elements';

export default class Menu extends React.Component {
  render() {
    
    return (
      <View>

        {/* NAVIGATION START */}  
        <View style={styles.menu} 
        isHidden={false}
        >
          <TouchableOpacity             
            onPress={() => this.props.navigation.navigate('Github') } >
            <Text style={styles.menuButton}>Github</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={() =>
                this.props.navigation.navigate('Cars')
            }
            >
            <Text style={styles.menuButton}>Bilar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuButton} 
            onPress={() =>
                this.props.navigation.navigate('Contact')
            }
            >
            <Text style={styles.menuButton}>Kontakt</Text>
          </TouchableOpacity>
        </View>
        {/* NAVIGATION END */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#343A40',
  },
  menu: {
    alignItems: 'baseline',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#343A40',
    height: 35,
    
  },
  menuButton: {
    color: 'white',
    paddingHorizontal: 10,
    marginTop: 5,
  },
});
