import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const TodoTitle = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today's Tasks</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderColor: 'blue',
    borderWidth: 2,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
  },
});

export default TodoTitle;
