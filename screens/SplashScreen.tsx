import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

function SplashScreen({navigation}) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 2000);
  }, []);

  useEffect(() => {
    if (loaded) {
      navigation.replace('Home');
    }
  }, [loaded, navigation]);

  return (
    <View style={style.container}>
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
});

export default SplashScreen;
