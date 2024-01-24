import {Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import Board from '../../components/board';
import {Colors} from '../../colors/Colors';

const Main = () => {
  const [winner, setWinner] = React.useState(null);

  return (
    <LinearGradient
      colors={[Colors.Dblue, Colors.Lblue]}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={styles.container}>
      <Text style={styles.title}>PvP</Text>
      <Text style={styles.titledes}>{'First Move ! \n TEAM X !'}</Text>
      <Board winner={winner} onSquarePress={setWinner} />
      {winner && <Text style={styles.winnerText}>{winner}</Text>}
    </LinearGradient>
  );
};

export default Main;
