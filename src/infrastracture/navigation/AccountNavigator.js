import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Account from '../../features/account/screens/Account';
import Login from '../../features/account/screens/Login';
import Register from '../../features/account/screens/Register';

const Stack = createStackNavigator();

export const AccountNavigator = () => {
  return (
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name='Main' component={Account} />
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Register' component={Register} />
    </Stack.Navigator>
  );
};
