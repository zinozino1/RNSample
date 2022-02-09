/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
//import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  FlatList,
  TextInput,
} from 'react-native';

import TodoTitle from './component/TodoTitle';
import TodoList from './component/TodoList';
import TodoInsert from './component/TodoInsert';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [todos, setTodos] = useState([
    {id: '1', checked: false, content: 'test1'},
    {id: '2', checked: true, content: 'test1'},
    {id: '3', checked: false, content: 'test1'},
    {id: '4', checked: true, content: 'test1'},
  ]);

  const insertTodo = newTodo => {
    setTodos([...todos, newTodo]);
  };

  const updateTodo = (id, text) => {
    setTodos(
      todos.map((item, _) =>
        item.id === id ? {...item, content: text} : item,
      ),
    );
  };

  const deleteTodo = id => {
    setTodos(todos.filter((item, _) => item.id !== id));
  };

  const checkTodo = id => {
    setTodos(
      todos.map((item, _) =>
        item.id === id ? {...item, checked: !item.checked} : item,
      ),
    );
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        {loading && (
          <View style={styles.loading}>
            <Text>loading...</Text>
          </View>
        )}
        <TodoTitle></TodoTitle>
        <TodoList
          todos={todos}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
          checkTodo={checkTodo}
          setLoading={setLoading}></TodoList>
        <TodoInsert
          insertTodo={insertTodo}
          setLoading={setLoading}></TodoInsert>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  loading: {
    position: 'absolute',
    marginTop: 20,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#E8EAED',
    opacity: 0.5,
    zIndex: 1000,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
