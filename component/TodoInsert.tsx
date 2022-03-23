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
import shortId from 'shortid';
import useInput from '../hooks/useInput';

interface TodoItem {
  id: string;
  content: string;
  checked: boolean;
}

interface Props {
  insertTodo: (newTodo: TodoItem) => void;
  setLoading: (loading: boolean) => void;
  todos: TodoItem[];
}

export default function TodoInsert({insertTodo}: Props) {
  const [inputText, setInputText, onChangeInput] = useInput<string>('');

  const onSubmit = async (): Promise<void> => {
    const newTodo = {
      id: shortId.generate(),
      checked: false,
      content: inputText,
    };

    insertTodo({...newTodo});
    setInputText('');
    Keyboard.dismiss();
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.select({ios: 'padding', android: undefined})}>
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
}

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
