import React, { useContext } from 'react';
import AppNavigator from './AppNavigator';
import { AuthenticationContext } from '../../services/authentication/AuthenticationContext';
import { NavigationContainer } from '@react-navigation/native';
import { AccountNavigator } from './AccountNavigator';

export const Navigation = () => {
  const authenticationContext = useContext(AuthenticationContext);
  const { isAuthenticated } = authenticationContext;

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};
