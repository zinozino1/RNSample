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
  return (
    <SafeAreaView style={styles.container}>
      <TodoTitle></TodoTitle>
      <TodoList></TodoList>
      <TodoInsert></TodoInsert>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
});

export default App;
