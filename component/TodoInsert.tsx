import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

const TodoInsert = () => {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      {/* <View> */}
      <TextInput style={styles.input} placeholder="Write your task.." />
      <View style={styles.writeBtn}>
        <Text style={{fontSize: 30, color: '#fff'}}>+</Text>
      </View>
      {/* </View> */}
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
