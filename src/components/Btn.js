import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import {Fonts} from '../fonts/fonts';
import {Colors} from '../colors/Colors';
import LinearGradient from 'react-native-linear-gradient';

const Btn = ({onPress, title, icn}) => {
  return (
    <LinearGradient colors={[Colors.Lgreen, Colors.black]} style={styles.btn}>
      <TouchableOpacity onPress={onPress}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}>
          {icn ? <Icon name={icn} size={20} color={Colors.white} /> : <></>}
          <Text style={styles.txt}>{title}</Text>
        </View>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default Btn;

const styles = StyleSheet.create({
  btn: {
    width: '80%',
    height: '18%',
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginVertical: '6%',
  },
  txt: {
    fontSize: 20,
    fontFamily: Fonts.regular,
    color: Colors.white,
  },
});
