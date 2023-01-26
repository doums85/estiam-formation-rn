import { StyleSheet, TextInput } from 'react-native';

export default function NumberInput({ onChangeText, value }) {

  return (
    <TextInput
      placeholder="Enter a number"
      keyboardType="decimal-pad"
      maxLength={2}
      onChangeText={onChangeText}
      style={styles.input}
      value={value}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: 80,
    fontSize: 32,
    fontWeight: 'bold',
    fontFamily: 'PressStart',
    textAlign: 'center',
    color: '#FFF',
    marginVertical: 8,
    borderBottomColor: '#FFF',
    borderBottomWidth: 2,
  },
});
