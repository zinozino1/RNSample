/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect, useCallback} from 'react';
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

interface TodoItem {
  id: string;
  content: string;
  checked: boolean;
}

const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const insertTodo = useCallback((newTodo: TodoItem): void => {
    setTodos(todos => todos.concat(newTodo));
  }, []);

  const updateTodo = useCallback((id: string, text: string): void => {
    setTodos(todos =>
      todos.map((item, _) =>
        item.id === id ? {...item, content: text} : item,
      ),
    );
  }, []);

  const deleteTodo = useCallback((id: string): void => {
    setTodos(todos => todos.filter((item, _) => item.id !== id));
  }, []);

  const checkTodo = useCallback((id: string): void => {
    setTodos(todos =>
      todos.map((item, _) =>
        item.id === id ? {...item, checked: !item.checked} : item,
      ),
    );
  }, []);

  useEffect(() => {
    try {
      setLoading(true);
      const loadAsyncStorage = async () => {
        const res = await AsyncStorage.getItem('task');
        setTodos(JSON.parse(res));
      };
      loadAsyncStorage();
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    try {
      setLoading(true);
      const saveAsyncStorage = async () => {
        await AsyncStorage.setItem('task', JSON.stringify(todos));
      };
      saveAsyncStorage();
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, [todos]);

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
          checkTodo={checkTodo}></TodoList>
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
