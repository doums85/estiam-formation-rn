import React, {
  useContext,
  useEffect,
  useState,
} from 'react';
import { RootContext } from '../context';
import StartGameScreen from './StartGameScreen';
import GameScreen from './GameScreen';
import { SafeAreaView } from 'react-native';
import GameOverScreen from './GameOverScreen';

export default function RootScreen() {
  const { secretNumber, opponentsNumber } =
    useContext(RootContext);

  let screen = <StartGameScreen />;
  const secretNumberFound =
    secretNumber === Number(opponentsNumber.at(-1));

  useEffect(() => {
    if (secretNumberFound) {
      screen = <GameOverScreen />;
    }
  }, []);

  if (opponentsNumber.length > 0 && !secretNumberFound) {
    screen = <GameScreen />;
  }

  if (secretNumberFound) {
    screen = <GameOverScreen />;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {screen}
    </SafeAreaView>
  );
}
