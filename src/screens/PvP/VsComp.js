import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  DIMS,
  GAME_STATES,
  PLAYER_O,
  PLAYER_X,
  DRAW,
  SQUARE_DIMS,
  GAME_MODES,
} from '../../constants/constant';
import {getRandomInt, switchPlayer} from '../../utilis/utils';
import Board from './board';
import {minimax} from '../../constants/minimax';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../colors/Colors';
import {Fonts} from '../../fonts/fonts';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/FontAwesome';
import Bg from '../../components/bg';
import Btn from '../../components/Btn';

const arr = new Array(9).fill(null);
const board = new Board();
const VsComp = () => {
  const [grid, setGrid] = React.useState(arr);
  const [players, setPlayers] = React.useState({
    human: PLAYER_X,
    computer: PLAYER_O,
  });
  const [gameState, setGameState] = React.useState(GAME_STATES.notStarted);
  const [nextMove, setNextMove] = React.useState(null);
  const [winner, setWinner] = React.useState(null);
  const [mode, setMode] = React.useState(GAME_MODES.difficult);

  const move = React.useCallback(
    (index, player) => {
      if (player && gameState === GAME_STATES.inProgress) {
        setGrid(grid => {
          const gridCopy = grid.concat();
          gridCopy[index] = player;
          return gridCopy;
        });
      }
    },
    [gameState],
  );

  const humanMove = index => {
    if (!grid[index]) {
      move(index, players.human);
      setNextMove(players.computer);
    }
  };

  const computerMove = React.useCallback(() => {
    const board = new Board(grid.concat());
    const emptyIndices = board.getEmptySquares(grid);
    let index;
    switch (mode) {
      case GAME_MODES.easy:
        index = getRandomInt(0, 8);
        while (!emptyIndices.includes(index)) {
          index = getRandomInt(0, 8);
        }
        break;
      case GAME_MODES.medium:
        // Medium level is basically ~half of the moves are minimax and the other ~half random
        const smartMove = !board.isEmpty(grid) && Math.random() < 0.5;
        if (smartMove) {
          index = minimax(board, players.computer)[1];
        } else {
          index = getRandomInt(0, 8);
          while (!emptyIndices.includes(index)) {
            index = getRandomInt(0, 8);
          }
        }
        break;
      case GAME_MODES.difficult:
      default:
        index = board.isEmpty(grid)
          ? getRandomInt(0, 8)
          : minimax(board, players.computer)[1];
    }
    if (!grid[index]) {
      move(index, players.computer);
      setNextMove(players.human);
    }
  }, [move, grid, players, mode]);

  const choosePlayer = option => {
    setPlayers({human: option, computer: switchPlayer(option)});
    setGameState(GAME_STATES.inProgress);
    setNextMove(PLAYER_X);
  };

  React.useEffect(() => {
    let timeout;
    if (
      nextMove !== null &&
      nextMove === players.computer &&
      gameState !== GAME_STATES.over
    ) {
      timeout = setTimeout(() => {
        computerMove();
      }, 300);
    }
    return () => timeout && clearTimeout(timeout);
  }, [nextMove, computerMove, players.computer, gameState]);

  const startNewGame = () => {
    setGameState(GAME_STATES.notStarted);
    setGrid(arr);
  };

  React.useEffect(() => {
    const winner = board.getWinner(grid);
    const declareWinner = winner => {
      let winnerStr;
      switch (winner) {
        case PLAYER_X:
          winnerStr = 'TEAM X Wins!';
          break;
        case PLAYER_O:
          winnerStr = 'TEAM O Wins!';
          break;
        case DRAW:
        default:
          winnerStr = 'DRAW ! \n \nBetter Luck \n \n Next Time !';
      }
      setGameState(GAME_STATES.over);
      setWinner(winnerStr);
    };
    if (winner !== null && gameState !== GAME_STATES.over) {
      declareWinner(winner);
    }
  }, [gameState, grid, nextMove]);

  switch (gameState) {
    case GAME_STATES.notStarted:
    default:
      return (
        <Bg>
          <Text style={styles.Title}>CHOOSE YOUR TEAM</Text>
          <View
            style={{
              width: '100%',
              alignItems: 'center',
              marginTop: '60%',
            }}>
            <Btn title={'TEAM X'} onPress={() => choosePlayer(PLAYER_X)} />
            <Btn title={'TEAM O'} onPress={() => choosePlayer(PLAYER_O)} />
          </View>
        </Bg>
      );
    case GAME_STATES.inProgress:
      return (
        <Bg>
          <View
            style={{
              flex: 1,
              margin: 20,
            }}>
            <Text style={styles.Headtxt}>{'First Move \n TEAM X !'} </Text>
            <Text style={styles.Mock}>{'Try your best to WIN ! \n KID !'}</Text>

            <LinearGradient
              colors={[Colors.Lgreen, Colors.Dgreen]}
              style={styles.boardContainer}>
              <View style={styles.line1}></View>
              <View style={styles.line2}></View>
              <View style={styles.line3}></View>
              <View style={styles.line4}></View>
              {grid.map((value, index) => {
                const isActive = value !== null;
                return (
                  <TouchableOpacity
                    style={styles.squares}
                    key={index}
                    onPress={() => humanMove(index)}>
                    {isActive && (
                      <Text style={[styles.Mark]}>
                        {value === PLAYER_X ? 'X' : 'O'}
                      </Text>
                    )}
                  </TouchableOpacity>
                );
              })}
            </LinearGradient>
          </View>
        </Bg>
      );
    case GAME_STATES.over:
      return (
        <Bg>
          <Text style={styles.Title}>{winner}</Text>
          <View
            style={{
              width: '100%',
              height: '36%',
              alignItems: 'center',
              marginTop: '40%',
            }}>
            <Btn title={'TRY AGAIN'} onPress={startNewGame} />
          </View>
        </Bg>
      );
  }
};

export default VsComp;
