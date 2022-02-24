import React from 'react';
import {View, StyleSheet, Text, Button, TouchableOpacity} from 'react-native';
import CalendarNavigator from '../navigators/CalendarNavigator';

const TodoTitle: React.FC = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today's Tasks</Text>
      <TouchableOpacity
        style={{justifyContent: 'center'}}
        onPress={() => {
          navigation.navigate('Calendar');
        }}>
        <Text style={styles.calendarButton}>Calendar</Text>
      </TouchableOpacity>
    </View>
  );
};

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

export default TodoTitle;
