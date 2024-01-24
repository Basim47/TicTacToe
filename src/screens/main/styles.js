import {StyleSheet} from 'react-native';
import {Colors} from '../../colors/Colors';
import {Fonts} from '../../fonts/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    color: Colors.white,
    fontFamily: Fonts.title,
    fontSize: 40,
    alignSelf: 'center',
    marginVertical: 30,
  },
  winnerText: {
    fontSize: 30,
    fontFamily: Fonts.regular,
    alignSelf: 'center',
    textAlign: 'center',
    color: Colors.white,
    marginTop: '10%',
  },
  resetText: {
    fontSize: 18,
    color: 'blue',
  },
  titledes: {
    color: Colors.white,
    fontFamily: Fonts.regular,
    fontSize: 20,
    textAlign: 'center',
    alignSelf: 'center',
    marginVertical: 16,
  },
});
