import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Actions} from 'react-native-router-flux';

function SplashScreen({path}) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1500);
  }, []);

  useEffect(() => {
    if (loaded) {
      Actions.replace('Home', {id: 1});
    }
  }, [loaded]);

  return (
    <View style={style.container}>
      <Text style={style.title}>TodoList Sample App</Text>
      <Text>Loading...</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default SplashScreen;
