import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function InstructionText({ children }) {
  return <Text style={styles.instruction}>{children}</Text>;
}

const styles = StyleSheet.create({
  instruction: {
    color: '#FFF',
    fontSize: 18,
  },
});
