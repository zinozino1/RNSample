/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Scene, Router, Stack} from 'react-native-router-flux';
import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';
import ErrorScreen from './screens/ErrorScreen';
import ErrorBoundary from './component/ErrorBoundary';

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Router>
        <Stack key="root">
          <Scene
            key="Splash"
            component={SplashScreen}
            initial
            title="Splash"
            hideNavBar
          />
          <Scene key="Home" component={HomeScreen} title="Home" hideNavBar />
          <Stack key="error" hideNavBar>
            <Scene
              key="Error"
              component={ErrorScreen}
              title="error"
              hideNavBar
            />
          </Stack>
        </Stack>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
