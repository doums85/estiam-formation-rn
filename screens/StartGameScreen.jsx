import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import {
  Card,
  Heading,
  InstructionText,
  NumberInput,
  PrimaryButton,
} from '../components';

export default function StartGameScreen({
  pickedNumberHandler,
}) {
  const [chosenNumber, setChosenNumber] = useState('');
  const confirmHandler = () => {
    pickedNumberHandler(chosenNumber);
  };

  return (
    <View style={styles.container}>
      <Heading>Guess My Number</Heading>

      <Card>
        <InstructionText>Enter a Number</InstructionText>

        <NumberInput
          onChangeText={(textEntered) =>
            setChosenNumber(textEntered)
          }
        />

        <View style={styles.buttonContainer}>
          <PrimaryButton>Reset</PrimaryButton>
          <PrimaryButton onPress={confirmHandler}>
            Check !
          </PrimaryButton>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
});
