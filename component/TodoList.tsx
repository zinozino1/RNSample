import React from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import TodoListItem from './TodoListItem';

const TodoList = ({todos}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {todos.map((item, _) => (
          <TodoListItem todosItem={item} key={item.id}></TodoListItem>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 10,
    borderColor: 'red',
    borderWidth: 2,
  },
});

export default TodoList;
