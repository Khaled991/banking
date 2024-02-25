import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <></>
    // <Stack.Navigator>
    //   <Stack.Screen name="Dashboard" component={DashboardScreen} />
    //   <Stack.Screen name="AccountSettings" component={AccountSettingsScreen} />
    //   <Stack.Screen name="ManageAccounts" component={ManageAccountsScreen} />
    // </Stack.Navigator>
  );
};

export default AppNavigator;
