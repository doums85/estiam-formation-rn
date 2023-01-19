import { Button, Image, Modal, StyleSheet, TextInput, View } from 'react-native';
import React from 'react';
const taskImage = require('../assets/task.png');

export default function TaskInput(props) {
  return (
    <Modal animationType="fade" visible={props.modalVisible}>
      <View style={styles.taskContainer}>
        <Image source={taskImage} style={styles.image} />
        <TextInput
          value={props.textEntered}
          onChangeText={props.onchangeHandler}
          style={styles.input}
          placeholder="Add tasks..."
        />
        <View style={styles.buttonWrap}>
          <Button title="Add" onPress={props.addTaskHandler} />
          <View style={{ marginRight: 18 }} />
          <Button title="Cancel" onPress={props.modalVisibilityHandler} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    marginRight: 16,
  },
  buttonWrap: {
    flexDirection: 'row',
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 20,
  },
});
