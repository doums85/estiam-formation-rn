import { StyleSheet, TextInput } from 'react-native';

export default function NumberInput({ onChangeText }) {
  return (
    <TextInput
      placeholder="Enter a number"
      keyboardType="decimal-pad"
      maxLength={2}
      onChangeText={onChangeText}
      style={styles.input}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: 80,
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFF',
    marginVertical: 8,
    borderBottomColor: '#FFF',
    borderBottomWidth: 2,
  },
});
