import { StyleSheet, Text } from 'react-native';

export default function Heading({ children }) {
  return <Text style={styles.heading}>{children}</Text>;
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: '#222',
    padding: 12,
  },
});
