import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../colors/Colors';
import {Fonts} from '../fonts/fonts';
import Icon from 'react-native-vector-icons/Entypo';
import Bg from '../components/bg';
import Btn from '../components/Btn';

const Onboard = () => {
  const navigation = useNavigation();
  return (
    <Bg>
      <Image
        source={require('../imgs/playstore-icon.png')}
        style={{
          width: '35%',
          height: '18%',
          borderRadius: 20,
          alignSelf: 'center',
          marginTop: '30%',
        }}
        resizeMode="contain"
      />
      <Text style={styles.Title}>{'TIC  TAC  TOE'}</Text>
      <View
        style={{
          width: '100%',
          alignItems: 'center',
          marginTop: '60%',
        }}>
        <Btn
          title={'Vs Ai'}
          icn={'user'}
          onPress={() => navigation.navigate('VsComp')}
        />

        <Btn
          title={'1 Vs 1'}
          icn={'users'}
          onPress={() => navigation.navigate('Main')}
        />
        <TouchableOpacity
          style={{alignSelf: 'center'}}
          onPress={() => navigation.navigate('About')}>
          <Text
            style={{color: Colors.white, fontSize: 14, fontFamily: Fonts.med}}>
            About !
          </Text>
        </TouchableOpacity>
      </View>
    </Bg>
  );
};

export default Onboard;

const styles = StyleSheet.create({
  Title: {
    fontFamily: Fonts.title,
    fontSize: 28,
    color: Colors.white,
    marginVertical: '3%',
    textAlign: 'center',
  },
});
