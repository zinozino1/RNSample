import React, {useEffect, useState} from 'react';
import {View, SafeAreaView, Text, Button} from 'react-native';

function ErrorScreen() {
  const [num, setNum] = useState(0);

  const add = () => {
    setNum(num + 1);
  };

  useEffect(() => {
    if (num > 3) throw new Error('error type1');
  }, [num]);

  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View>
        <Text style={{fontSize: 30}}>{num}</Text>
        <Button title="+" onPress={add}></Button>
      </View>
    </SafeAreaView>
  );
}

export default ErrorScreen;
