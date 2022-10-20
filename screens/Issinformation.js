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
            <Text style={styles.titleText}> ISS </Text>
          </View>
          <Image
            source={require('../assets/iss-removebg-preview.png')}
            style={styles.image}></Image>

          <Paragraph>
           
            Here are 5 interesting facts about ISS  :
            <br />
            <br />
            1.The International Space Station is moving at a speed of 5 miles per second. It circles Earth every 90 minutes. ...
            <br />

            2.With a length of 109 metres and a pressured volume of 32,300 cubic feet, the ISS is the largest manned object mankind kind has ever put into space.

            <br />
            3. At 460 tons, it is the biggest and heaviest object ever made.

            <br />
            4. Somewhat larger than a 6-bedroom house in terms of livable space, the ISS is also the most expensive object mankind has ever made, costing more than $120 billion.

            <br />
            5.It was designed to conduct space-related research. Besides exploring the possibility of future space travel, scientists from a wide range of fields also study the effect of microgravity on the ...

          </Paragraph>

          <td>
            <a href="https://factcity.com/20-interesting-facts-about-the-international-space-station/#:~:text=ISS%20Operations%201%20The%20International%20Space%20Station%20is,study%20the%20effect%20of%20microgravity%20on%20the%20">
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
