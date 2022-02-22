import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Keyboard,
  AsyncStorage,
} from 'react-native';
import {sleep} from '../lib/util';
import shortId from 'shortid';
import useInput from '../hooks/useInput';

interface Props {
  insertTodo: (newTodo: object) => void;
  setLoading: (loading: boolean) => void;
  todos: object[];
}

const TodoInsert: React.FC<Props> = ({insertTodo, setLoading, todos}) => {
  const [inputText, setInputText, onChangeInput] = useInput<string>('');

  const onSubmit = async (): Promise<void> => {
    try {
      setLoading(true);

      const newTodo = {
        id: shortId.generate(),
        checked: false,
        content: inputText,
      };

      insertTodo({...newTodo});
      setInputText('');
      Keyboard.dismiss();
      setLoading(false);

      await AsyncStorage.setItem(
        'task',
        JSON.stringify([...todos, {...newTodo}]),
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TextInput
        style={styles.input}
        placeholder="Write your task.."
        onChangeText={onChangeInput}
        value={inputText}
      />

      <TouchableOpacity onPress={onSubmit} style={styles.writeBtn}>
        <Text style={{fontSize: 30, color: '#fff'}}>+</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#E8EAED',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 10,
    borderColor: '#fff',
    borderWidth: 1,
    flex: 4,
    margin: 10,
  },
  writeBtn: {
    backgroundColor: '#548CFF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#fff',
    borderWidth: 1,
    flex: 1,
    margin: 10,
  },
});

export default TodoInsert;
