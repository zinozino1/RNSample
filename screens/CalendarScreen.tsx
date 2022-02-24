import React from 'react';
import {View, Text, Button, SafeAreaView, StyleSheet} from 'react-native';

function CalendarScreen({navigation, route}) {
  const back = () => {
    navigation.pop();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Button title="뒤로가기" onPress={back} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
  },
  backBtn: {},
});

export default CalendarScreen;
