import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function TaskItem(props) {
  return (
    <Pressable
      // onPress={this.props.deleteTaskHandler.bind(this, props.index)}
      onPress={() => props.deleteTaskHandler(props.index)}
      style={styles.task}>
      <Text style={styles.taskText}>{props.item}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  task: {
    backgroundColor: '#5762B7',
    margin: 8,
    padding: 8,
    borderRadius: 4,
  },
  taskText: {
    color: '#FFF',
    textAlign: 'center',
  },
});
