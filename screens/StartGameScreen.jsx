import { StyleSheet, View } from 'react-native';
import React, { useContext, useState } from 'react';
import {
  Card,
  Heading,
  InstructionText,
  NumberInput,
  PrimaryButton,
} from '../components';
import { RootContext } from '../context';

export default function StartGameScreen({ navigation }) {
  const { updateUserNumber, addOpponentNumber } =
    useContext(RootContext);

  return (
    <View style={styles.container}>
      <Heading>Guess My Number</Heading>

      <Card>
        <InstructionText>Enter a Number</InstructionText>

        <NumberInput
          onChangeText={(textEntered) =>
            updateUserNumber(textEntered)
          }
        />

        <View style={styles.buttonContainer}>
          <PrimaryButton>Reset</PrimaryButton>
          <PrimaryButton
            onPress={() => {
              addOpponentNumber();
              navigation.navigate('Game', {
                name: 'Mamadou',
              });
            }}>
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
    marginTop: 50,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
});
