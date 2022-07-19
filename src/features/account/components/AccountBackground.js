import { StyleSheet, ImageBackground, View } from 'react-native';
import { Button } from 'react-native-paper';
import React from 'react';
import { COLORS } from '../../../constants';

export const AccountContainer = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        icon='lock-open-outline'
        mode='contained'
        color={COLORS.ui.success}
        onPress={() => navigation.navigate('Register')}
        style={{ marginBottom: 20, padding: 8 }}
      >
        Register
      </Button>
      <Button
        icon='lock'
        mode='contained'
        color='blue'
        onPress={() => navigation.navigate('Login')}
        style={{ padding: 8 }}
      >
        Login
      </Button>
    </View>
  );
};

export const AccountBackground = ({ children }) => {
  return (
    <ImageBackground
      source={require('../../../../assets/home_bg.jpg')}
      style={styles.background}
    >
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.6,
  },
  container: {
    padding: 24,
    marginTop: 12,
    backgroundColor: 'rgba(255,255,255,0.8)',
  },
});
