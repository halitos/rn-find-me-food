import { View, Text, Button } from 'react-native';
import React, { useContext } from 'react';
import { AuthenticationContext } from '../../../services/authentication/AuthenticationContext';

const Settings = () => {
  const authenticationContext = useContext(AuthenticationContext);
  const { onLogout } = authenticationContext;
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings</Text>
      <Button onPress={onLogout} title='Logout' />
    </View>
  );
};

export default Settings;
