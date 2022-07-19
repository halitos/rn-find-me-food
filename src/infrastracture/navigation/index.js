import React, { useContext } from 'react';
import AppNavigator from './AppNavigator';
import { AuthenticationContext } from '../../services/authentication/AuthenticationContext';
import { View, Text } from 'react-native';

export const Navigation = () => {
  const authenticationContext = useContext(AuthenticationContext);
  const { user, isAuthLoading, error, onLogin } = authenticationContext;

  return user ? <AppNavigator /> : <Text>Not Auth</Text>;
};
