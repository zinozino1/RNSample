import React from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import TodoListItem from './TodoListItem';

const TodoList = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {
          <>
            <TodoListItem></TodoListItem>
            <TodoListItem></TodoListItem>
          </>
        }
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderColor: 'red',
    borderWidth: 2,
  },
});

export default TodoList;
