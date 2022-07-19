import React, { useContext } from 'react';
import AppNavigator from './AppNavigator';
import { AuthenticationContext } from '../../services/authentication/AuthenticationContext';
import { NavigationContainer } from '@react-navigation/native';
import { AccountNavigator } from './AccountNavigator';

export const Navigation = () => {
  const authenticationContext = useContext(AuthenticationContext);
  const { user, isAuthLoading, error, onLogin } = authenticationContext;

  return (
    <NavigationContainer>
      {user ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};
