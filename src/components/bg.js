import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Bg = ({children}) => {
  return (
    <ImageBackground
      source={require('../imgs/bg3.jpg')}
      resizeMode="cover"
      style={styles.bground}>
      <View style={styles.trans}>{children}</View>
    </ImageBackground>
  );
};

export default Bg;

const styles = StyleSheet.create({
  bground: {
    flex: 1,
  },
  trans: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});
