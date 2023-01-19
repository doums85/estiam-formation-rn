import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { PrimaryButton } from './components';
import { GameScreen, StartGameScreen } from './screens';
const background = require('./assets/background.jpeg');

export default function App() {
  const [secretNumber, setSecretNumber] = useState(
    Math.trunc(Math.random() * 20 + 1)
  );
  const [userNumber, setUserNumber] = useState('');

  // Get number from children component
  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
  };

  let screen = (
    <StartGameScreen
      pickedNumberHandler={pickedNumberHandler}
    />
  );

  if (userNumber) screen = <GameScreen />;

  /*   const compare = () => {
    if (secretNumber < userNumber) {
      setMessage('Too high');
    } else if (secretNumber > userNumber) {
      setMessage('Too low');
    } else setMessage('Success');
  };
 */
  return (
    <LinearGradient
      style={styles.root}
      colors={['#F5F7FA', '#B8C6DB']}>
      <ImageBackground
        source={background}
        style={styles.root}
        imageStyle={styles.background}>
        {screen}
        <StatusBar style="auto" />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    opacity: 0.15,
  },
});
