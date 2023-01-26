import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import React, { useContext } from 'react';
import { RootContext } from '../context';
import { PrimaryButton } from '../components';

const success = require('../assets/success.jpeg');

export default function GameOverScreen() {
  const { winner, reset } = useContext(RootContext);
  const resetHandler = () => {
    reset();
  };

  return (
    <View style={styles.root}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={success} />
      </View>

      <Text
        style={
          winner
            ? [styles.status, styles.winner]
            : [styles.status, styles.loser]
        }>
        You {winner ? 'win' : 'lose'}
      </Text>

      <PrimaryButton onPress={resetHandler}>
        Reset
      </PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    marginTop: 60,
  },
  imageContainer: {
    width: 200,
    height: 200,
    borderRadius: 200 / 2,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  status: {
    fontSize: 26,
    fontFamily: 'PressStart',
    marginTop: 12,
    marginBottom: 30,
  },
  winner: {
    color: 'green',
  },
  loser: {
    color: 'crimson',
  },
});
