import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Colors} from '../colors/Colors';
import LinearGradient from 'react-native-linear-gradient';
import {Fonts} from '../fonts/fonts';

const Board = ({winner, onSquarePress}) => {
  const [squares, setSquares] = React.useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = React.useState(true);

  const handleSquarePress = i => {
    if (winner || squares[i]) {
      return;
    }

    const newSquares = [...squares];
    newSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setXIsNext(!xIsNext);

    const winner = checkWinner(newSquares);
    if (winner) {
      onSquarePress(winner);
      setSquares(Array(9).fill(null));
    } else if (!newSquares.includes(null)) {
      onSquarePress('Draw');
      setSquares(Array(9).fill(null));
    }
  };

  const checkWinner = squares => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  return (
    <LinearGradient
      colors={[Colors.Lblue, Colors.Dblue]}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={styles.Board}>
      <View style={styles.line1}></View>
      <View style={styles.line2}></View>
      <View style={styles.line3}></View>
      <View style={styles.line4}></View>
      {squares.map((square, i) => (
        <TouchableOpacity
          key={i}
          style={styles.square}
          onPress={() => handleSquarePress(i)}>
          <Text style={styles.squareText}>{square}</Text>
        </TouchableOpacity>
      ))}
    </LinearGradient>
  );
};

export default Board;

const styles = StyleSheet.create({
  Board: {
    width: '100%',
    height: '50%',
    borderRadius: 20,
    alignSelf: 'center',
    backgroundColor: Colors.Dblue,
    elevation: 8,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  square: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '33%',
    height: '33%',
    borderRadius: 20,
  },
  squareText: {
    color: '#fff',
    fontSize: 60,
    fontFamily: Fonts.Ebold,
  },
  line1: {
    width: '80%',
    height: 1,
    backgroundColor: Colors.Dblue,
    position: 'absolute',
    alignSelf: 'center',
    top: '33%',
    elevation: 7,
  },
  line2: {
    width: '80%',
    height: 1,
    backgroundColor: Colors.Dblue,
    position: 'absolute',
    alignSelf: 'center',
    bottom: '33%',
    elevation: 7,
  },
  line3: {
    width: 1,
    height: '70%',
    backgroundColor: Colors.Dblue,
    position: 'absolute',
    alignSelf: 'center',
    top: '16%',
    left: '33%',
    elevation: 7,
  },
  line4: {
    width: 1,
    height: '70%',
    backgroundColor: Colors.Dblue,
    position: 'absolute',
    alignSelf: 'center',
    right: '33%',
    top: '16%',
    elevation: 7,
  },
});
