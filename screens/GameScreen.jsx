import {
  View,
  Alert,
  StyleSheet,
  FlatList,
  Text,
} from 'react-native';
import React, {
  useContext,
  useEffect,
  useState,
} from 'react';
import { AntDesign } from '@expo/vector-icons';
import GameOverScreen from './GameOverScreen';
import { RootContext } from '../context';
import {
  Card,
  Heading,
  NumberInput,
  PrimaryButton,
} from '../components';

export default function GameScreen({ navigation, route }) {
  const {
    secretNumber,
    userNumber,
    opponentsNumber,
    addOpponentNumber,
    updateUserNumber,
    updateResult,
    updateHighScore,
    highScore,
  } = useContext(RootContext);
  const [score, setScore] = useState(20);
  const [indicatorMessage, setIndicatorMessage] =
    useState('');
  useEffect(() => {
    if (userNumber > 20)
      Alert.alert(
        'Ooups error 💥',
        'user number must be between 0 and 20',
        [{ text: 'Sorry', style: 'destructive' }]
      );

    compareNumber();
  }, []);

  const compareNumber = () => {
    if (secretNumber !== userNumber) {
      setScore((currentScore) =>
        Math.max(0, currentScore - 1)
      );
    }

    if (secretNumber > userNumber) {
      setIndicatorMessage('Too low 📉');
    } else if (secretNumber < userNumber) {
      setIndicatorMessage('Too high 📈');
    } else {
      if (highScore < score) updateHighScore(score);
      updateResult(true);
      navigation.navigate('GameOver');
    }
  };

  const checkNumberHandler = () => {
    compareNumber();
    addOpponentNumber();
  };

  if (score === 0) return navigation.navigate('GameOver');

  return (
    <View style={styles.container}>
      <Heading>Opponents Number</Heading>

      <Text
        style={
          indicatorMessage.includes('low')
            ? [styles.indicatorText, styles.low]
            : [styles.indicatorText, styles.high]
        }>
        {indicatorMessage}
      </Text>

      <Card>
        <View style={styles.inputContainer}>
          <AntDesign
            onPress={() =>
              updateUserNumber(
                Math.max(
                  1,
                  Number(userNumber) - 1
                ).toString()
              )
            }
            style={styles.icon}
            name="minussquare"
            size={48}
            color="white"
          />
          <NumberInput
            onChangeText={(textEntered) =>
              updateUserNumber(textEntered)
            }
            value={userNumber}
          />
          <AntDesign
            onPress={() =>
              updateUserNumber(
                Math.min(
                  Number(userNumber) + 1,
                  20
                ).toString()
              )
            }
            style={styles.icon}
            name="plussquare"
            size={48}
            color="white"
          />
        </View>
        <PrimaryButton onPress={checkNumberHandler}>
          Check !
        </PrimaryButton>
      </Card>

      <View style={styles.infoContainer}>
        <View style={styles.score}>
          <AntDesign
            name="heart"
            size={24}
            color="crimson"
          />
          <Text style={styles.textInfo}> {score} </Text>
        </View>

        <View>
          <Text style={[styles.textInfo, styles.highScore]}>
            High Score: {highScore}
          </Text>
        </View>
      </View>

      <FlatList
        style={{ marginTop: 16 }}
        data={opponentsNumber}
        renderItem={(item) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>
              #{item.index}
            </Text>
            <Text style={styles.itemText}>{item.item}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'baseline',
    paddingVertical: 28,
  },
  icon: {
    marginHorizontal: 12,
  },
  infoContainer: {
    width: 250,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  score: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  textInfo: { color: '#222', fontSize: 18 },
  highScore: { fontWeight: '900' },
  itemContainer: {
    width: 350,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#222',
    padding: 12,
    marginBottom: 8,
    borderRadius: 4,
  },
  itemText: {
    color: 'white',
  },
  indicatorText: {
    fontSize: 24,
    fontWeight: '600',
    marginTop: 12,
  },
  low: {
    color: 'blue',
  },
  high: {
    color: 'crimson',
  },
});
