import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Fonts} from '../fonts/fonts';
import Bg from '../components/bg';
import {Colors} from '../colors/Colors';

const About = () => {
  return (
    <Bg>
      <ScrollView style={{margin: 20}} showsVerticalScrollIndicator={false}>
        <Text style={styles.text}>
          This game is made for timepass by its owner. To spent time well with
          your besties and family you can play this game.
        </Text>
        <Text style={styles.text}>
          This game have no access to your storage so feel free to recommend
          this game to your family and friends.We working on adding ' ONLINE
          MODE ' currently. Will add ' ONLINE MODE' features soon, to make your
          long distance besties closer to you.
        </Text>
        <Text style={styles.text}>
          We are working on the betterment of UI and computer moves. Please
          provide your feedback at this email:
        </Text>
        <Text style={styles.mail}>mbasim465@gmailcom</Text>
      </ScrollView>
    </Bg>
  );
};

export default About;

const styles = StyleSheet.create({
  text: {
    fontFamily: Fonts.med,
    fontSize: 18,
    lineHeight: 50,
    letterSpacing: 1,
    textAlign: 'center',
    color: Colors.white,
  },
  mail: {
    fontFamily: Fonts.med,
    fontSize: 18,
    lineHeight: 50,
    letterSpacing: 1,
    textAlign: 'center',
    color: Colors.icon2,
    backgroundColor: Colors.white,
    borderRadius: 30,
    marginVertical: 20,
  },
});
