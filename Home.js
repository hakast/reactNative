import React from 'react';
import { ScrollView, TouchableOpacity, StyleSheet, Text, View, Image, Linking } from 'react-native';
import { SocialIcon } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* NAVIGATION START */}  
        <View style={styles.menu} >
          <TouchableOpacity             
            onPress={() =>
                this.props.navigation.navigate('Github')
            }
            >
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

      <ScrollView contentContainerStyle={styles.contentContainer}>
          <Image 
            source={require('./assets/images/twelve.jpg')}
            style={styles.imgTwelve}
          />
          <View style={{ height: 250, backgroundColor: '#E11312', marginTop: 10}} >
            <Text style={styles.varaTjanster}>VÅRA TJÄNSTER</Text>
            <Text style={styles.varaTjansterTextUnder}>Lorem Ipsum är en utfyllnadstext från tryck- och förlagsindustrin. Lorem ipsum har varit standard ända sedan 1500-talet, när en okänd boksättare tog att antal bokstäver och blandade dem för att göra ett provexemplar av en bok.</Text>          
            <Image 
            source={require('./assets/images/six.jpg')}
            style={styles.imgGrayTruck}
          />
            <TouchableOpacity
            onPress={() =>
                this.props.navigation.navigate('ReadMoreHomePage')
            }
            >
            <Text style={{
              marginTop: 20,
              marginLeft: 10,
              marginBottom: 40,
              paddingVertical: 6,
              paddingHorizontal: 16,
              color: 'gray',
              height: 30,
              width: 100,
              backgroundColor: 'white',
              }}>Läs mer ...
            </Text>
          </TouchableOpacity>

          <SocialIcon
            onPress={() => { Linking.openURL('https://www.linkedin.com/in/haakan-aastroem/') } } 
            title='My Linkedin'
              button
              type='linkedin'
            />

            <SocialIcon
            onPress={() => { Linking.openURL('https://github.com/hakast/') } } 
            title='My Github'
            button
            type='github'
            />

          </View>
      </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    marginVertical: 5,
    alignItems: 'stretch'
  },
  menu: {
    alignItems: 'baseline',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#343A40',
    height: 40,
    // zIndex: 1
  },
  menuButton: {
    color: 'white',
    paddingHorizontal: 10,
    marginVertical: 5
  },
  imgTwelve: {
    height: 150,
    width: null
  },
  varaTjanster: {
    color: 'white',
    fontSize: 17,
    paddingTop: 20,
    paddingLeft: 10,
  },
  varaTjansterTextUnder: {
    color: 'white',
    paddingTop: 20,
    paddingLeft: 10,
    width: 250,
  },
  imgGrayTruck: {
    height: 250,
    width: 150,
    position: 'absolute',
    top: 0,
    right: 0
  },
});
