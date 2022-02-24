import React, {useState, useEffect, useCallback} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';
import CalendarScreen from '../screens/CalendarScreen';

const Stack = createNativeStackNavigator();

function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen // default
          name="Splash"
          component={SplashScreen}
          options={{animationEnabled: false, header: () => null}}
        />
        <Stack.Screen // splash에서 2초 후 이동
          name="Home"
          component={HomeScreen}
          options={{animationEnabled: true, header: () => null}}
        />
        <Stack.Screen // Home에서 캘린더 버튼 누르면 이동
          name="Calendar"
          component={CalendarScreen}
          options={{animationEnabled: true, header: () => null}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigator;
