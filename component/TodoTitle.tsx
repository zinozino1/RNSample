import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const TodoTitle: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today's Tasks</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'black',
  },
});

export default TodoTitle;
