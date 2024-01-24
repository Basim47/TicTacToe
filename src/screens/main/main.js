import {Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import Board from '../../components/board';
import {Colors} from '../../colors/Colors';
import Bg from '../../components/bg';

const Main = () => {
  const [winner, setWinner] = React.useState(null);

  return (
    <Bg>
      <Text style={styles.title}>X Vs O</Text>
      <Text style={styles.titledes}>{'Team X makes First Move !'}</Text>
      <Board winner={winner} onSquarePress={setWinner} />
      <Text style={styles.winnerText}>Winner : {winner}</Text>
    </Bg>
  );
};

export default Main;
