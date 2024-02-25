import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignInScreen from '../../screens/Auth/SignInScreen/SignInScreen';
import SignUpScreen from '../../screens/Auth/SignUpScreen/SignUpScreen';

const Stack = createStackNavigator();

const AuthNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
