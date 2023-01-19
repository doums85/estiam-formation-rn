import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { TaskInput, TaskItem } from './components';

export default function App() {
  const [textEntered, setTextEntered] = useState('');
  const [tasks, setTasks] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const onchangeHandler = (text) => setTextEntered(text);

  const addTaskHandler = () => setTasks((currentTasks) => [...currentTasks, textEntered]);

  const deleteTaskHandler = (id) =>
    setTasks((currentTasks) => currentTasks.filter((_, index) => index !== id));

  const modalVisibilityHandler = () => setModalVisible(!modalVisible);

  return (
    <View style={styles.container}>
      {/* INPUT + BUTTON  */}

      <Button title="Add Task !" onPress={modalVisibilityHandler} />

      {/* LIST TASKS */}
      <View style={styles.listContainer}>
        <FlatList
          data={tasks}
          renderItem={({ item, index }) => (
            <TaskItem deleteTaskHandler={deleteTaskHandler} item={item} index={index} />
          )}
          keyExtractor={(_, index) => index}
          ListEmptyComponent={<Text>You don't have any task</Text>}
        />
      </View>
      <TaskInput
        textEntered={textEntered}
        onchangeHandler={onchangeHandler}
        addTaskHandler={addTaskHandler}
        modalVisible={modalVisible}
        modalVisibilityHandler={modalVisibilityHandler}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 18,
    paddingTop: 50,
  },

  listContainer: {
    flex: 4,
    width: '100%',
  },
});
