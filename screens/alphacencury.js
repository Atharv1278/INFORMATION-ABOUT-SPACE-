import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  StatusBar,
  ImageBackground,
  Image,
} from 'react-native';
import { Paragraph } from 'react-native-paper';
import { Link } from 'react-router-dom';

export default class Delhi extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <ImageBackground
        
          style={styles.backgroundImage}>
          <View style={styles.titleBar}>
            <Text style={styles.titleText}>alphacencury</Text>
          </View>
          <Image
            source={require('../assets/alphacencury.jpg')}
            style={styles.image}></Image>

          <Paragraph>
           
            Here are 5 interesting facts about Alpha Centauri:
            <br />
            <br />
            1. Sun’s Nearest Star System. Alpha Centauri is our nearest star neighbor, and is a mere 4.37 light years from the Sun.
            <br />

            2. Alpha Centauri has a planet. In 2012, researchers announced that Alpha Centauri has an Earth-size planet orbiting Alpha Centauri B.
            <br />
            3. Alpha Centauri isn't a star. Alpha Centauri isn't a star, but a star system, according to NASA.
            <br />
            4. Third Brightest Star in Sky. To the naked eye, the Alpha Centauri system appears as a single star with a visual...
            <br />
            5. Binary System Status Discovered in 1689. Alpha Centauri was first recognized as a binary system in 1689 by Jean...
          </Paragraph>

          <td>
            <a href="https://www.astronomytrek.com/10-interesting-facts-about-alpha-centauri/#:~:text=%2010%20Interesting%20Facts%20About%20Alpha%20Centauri%20,a%20single%20star%20with%20a%20visual...%20More%20">
              Click Here to get more Information!
            </a>
          </td>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  titleBar: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
    alignItems: 'center',
    marginTop: 10,
  },
  image: {
    width: 200,
    height: 300,
    alignItems: 'center',
    marginLeft: 70,
    marginTop: 20,
  },
});
