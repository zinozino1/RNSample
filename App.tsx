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
  AsyncStorage,
} from 'react-native';

import TodoTitle from './component/TodoTitle';
import TodoList from './component/TodoList';
import TodoInsert from './component/TodoInsert';

const App: React.FC = () => {
  const [loading, setLoading] = useState<Boolean>(false);
  const [todos, setTodos] = useState<Object[]>([]);

  const insertTodo = (newTodo: Object): void => {
    setTodos([...todos, newTodo]);
  };

  const updateTodo = (id: String, text: String): void => {
    setTodos(
      todos.map((item, _) =>
        item.id === id ? {...item, content: text} : item,
      ),
    );
  };

  const deleteTodo = (id: String): void => {
    setTodos(todos.filter((item, _) => item.id !== id));
  };

  const checkTodo = (id: String): void => {
    setTodos(
      todos.map((item, _) =>
        item.id === id ? {...item, checked: !item.checked} : item,
      ),
    );
  };

  useEffect(() => {
    try {
      const fetchingAsyncStorage = async () => {
        const res = await AsyncStorage.getItem('task');
        if (res) {
          console.log(JSON.parse(res));
          setTodos(JSON.parse(res));
        }
      };
      fetchingAsyncStorage();
    } catch (error) {
      console.log(error);
    }
  }, []);

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
          setLoading={setLoading}
          todos={todos}></TodoInsert>
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
