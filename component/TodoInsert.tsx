import React from 'react';
import {View, StyleSheet} from 'react-native';

const TodoInsert = () => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderColor: 'green',
    borderWidth: 2,
    position: 'absolute',
    bottom: 50,
    width: '100%',
  },
});

export default TodoInsert;
