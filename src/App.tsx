import React, {Suspense} from 'react';
import {View} from 'react-native';
import Loader from './components/Common/Loader';
import AppNavigator from './components/Navigation/AppNavigator';
import AuthNavigator from './components/Navigation/AuthNavigator';
import {NavigationContainer} from '@react-navigation/native';

const App: React.FC = () => {
  const isAuthenticated = false;

  return (
    <NavigationContainer>
      <Suspense fallback={<Loader size="large" />}>
        <View style={{flex: 1}}>
          {isAuthenticated ? <AppNavigator /> : <AuthNavigator />}
        </View>
      </Suspense>
    </NavigationContainer>
  );
};

export default App;
