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
            <Text style={styles.titleText}>Solar System</Text>
          </View>
          <Image
            source={require('../assets/solarSystem.jpg')}
            style={styles.image}></Image>

          <Paragraph>
           
            Here are 5 interesting facts about Solar System :
            <br />
            <br />
            1. The solar system consists of the Sun, planets, dwarf planets, moons, and numerous smaller objects such as comets and asteroids.
            <br />

            2. 194 moons, 3,583 comets and 796,289 asteroids have been found in the solar system.
            <br />
            3. 99.86% of the solar system’s mass is found in the Sun. The majority of the remaining 0.14% is contained within the eight planets.
            <br />
            4. The four smaller inner planets, also known as the “terrestrial planets”, are primarily composed of rock and metal.
            <br />
            5. The four outer planets, also known as the “gas giants”, are substantially larger and more massive than the inner planets.
          </Paragraph>

          <td>
            <a href="https://space-facts.com/solar-system/#:~:text=Solar%20System%20Facts%201%20The%20solar%20system%20consists,the%20Asteroid%20Belt%2C%20Kuiper%20Belt%20and%20Oort%20Cloud.">
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
