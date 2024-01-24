import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../colors/Colors';
import {Fonts} from '../fonts/fonts';

const Onboard = () => {
  const navigation = useNavigation();
  return (
    <LinearGradient
      colors={[Colors.Dblue, Colors.Lblue]}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={styles.Board}>
      <Text style={styles.Title}>-SELECT MODE-</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Main')}>
        <LinearGradient
          colors={[Colors.Lblue, Colors.Dblue]}
          style={styles.btn}>
          <Text style={styles.player}>1 V 1</Text>
        </LinearGradient>
      </TouchableOpacity>
      <Text style={styles.sepertText}>OR</Text>
      <TouchableOpacity onPress={() => navigation.navigate('VsComp')}>
        <LinearGradient
          colors={[Colors.Lblue, Colors.Dblue]}
          style={styles.btn}>
          <Text style={styles.player}>VS AI</Text>
        </LinearGradient>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default Onboard;

const styles = StyleSheet.create({
  Board: {
    flex: 1,
    backgroundColor: Colors.Dblue,
    padding: 20,
    alignItems: 'center',
  },
  Title: {
    fontFamily: Fonts.bold,
    fontSize: 30,
    color: Colors.white,
    marginVertical: '26%',
    textAlign: 'center',
    letterSpacing: 1,
    lineHeight: 50,
  },
  player: {
    fontSize: 26,
    fontFamily: Fonts.Ebold,
    color: Colors.white,
    marginVertical: 4,
  },

  sepertText: {
    fontSize: 20,
    fontFamily: Fonts.Ebold,
    color: Colors.white,
    marginVertical: '10%',
  },

  btn: {
    width: 190,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 90,
    elevation: 7,
  },
});
