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
} from 'react-native';

const TodoInsert = ({insertTodo}) => {
  const [inputText, setInputText] = useState('');
  const [isActiveKeyboard, setIsActiveKeyboard] = useState(true);

  const onChangeInput = val => {
    setInputText(val);
  };

  const onSubmit = () => {
    insertTodo({
      id: Math.random.toString(),
      checked: false,
      content: inputText,
    });
    setInputText('');
    Keyboard.dismiss();
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
    borderColor: 'green',
    borderWidth: 2,
    //position: 'absolute',
    //bottom: 40,
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
    // width: 250,
    flex: 4,
    margin: 10,
  },
  writeBtn: {
    // width: 50,
    // height: 50,
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
