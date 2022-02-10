import React from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import TodoListItem from './TodoListItem';

const TodoList = ({todos, updateTodo, deleteTodo, checkTodo, setLoading}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {todos.map((item, _) => (
          <TodoListItem
            todosItem={item}
            key={item.id}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
            checkTodo={checkTodo}
            setLoading={setLoading}></TodoListItem>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 10,
  },
});

export default TodoList;
