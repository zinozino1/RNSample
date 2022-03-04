import React, {useEffect} from 'react';
import {View, StyleSheet, Text, Button, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default function TodoTitle() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today's Tasks</Text>
      <TouchableOpacity
        style={{justifyContent: 'center'}}
        onPress={() => {
          console.log(11);
          Actions.push('error');
        }}>
        <Text style={styles.calendarButton}>Error Trigger</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'black',
  },
  calendarButton: {
    fontSize: 14,
  },
});
