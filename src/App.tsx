import React, {Suspense} from 'react';
import {View} from 'react-native';
import Loader from './components/Common/Loader';
import AppNavigator from './components/Navigation/AppNavigator';
import AuthNavigator from './components/Navigation/AuthNavigator';
import {NavigationContainer} from '@react-navigation/native';
// import useUserAuthenticated from './hooks/useUserAuthenticated';
import useSignIn from './hooks/useSignIn';

const App: React.FC = () => {
  const {isSignedIn} = useSignIn();

  return (
    <NavigationContainer>
      <Suspense fallback={<Loader size="large" />}>
        <View style={{flex: 1}}>
          {isSignedIn ? <AppNavigator /> : <AuthNavigator />}
        </View>
      </Suspense>
    </NavigationContainer>
  );
};

export default App;
