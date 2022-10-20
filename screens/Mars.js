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
            <Text style={styles.titleText}>Mars</Text>
          </View>
          <Image
            source={require('../assets/Mars.png')}
            style={styles.image}></Image>

          <Paragraph>
           
            Here are 5 interesting facts about Mars :
            <br />
            <br />
            1.  Mars Possesses Varied Names As Accorded To It By Different Cultures.
            <br />

            2. Mars is 227.9 Million Kilometers from the Sun.
            <br />
            3. Temperatures Get Very Low on Mars.
            <br />
            4. Olympus Mons, the Highest Peak in the Entire Solar System, is in Mars.
            <br />
            5.  Mars Boasts of Having Double Moons.
          </Paragraph>

          <td>
            <a href="https://thefactfile.org/mars-facts/">
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
