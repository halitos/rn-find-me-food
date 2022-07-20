import { StyleSheet, ImageBackground, View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import React from 'react';
import { COLORS, FONTS } from '../../../constants';

export const AccountContainer = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        icon='lock'
        mode='contained'
        color='blue'
        onPress={() => navigation.navigate('Login')}
        style={{ padding: 8 }}
      >
        Login
      </Button>
      <Button
        icon='email'
        mode='contained'
        color={COLORS.ui.success}
        onPress={() => navigation.navigate('Register')}
        style={{ marginTop: 20, padding: 8 }}
      >
        Register
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
      <Text style={styles.title}>Find me Food</Text>
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
    width: 200,
    padding: 24,
    marginTop: 12,
    backgroundColor: 'rgba(255,255,255,0.9)',
  },
  title: {
    fontSize: 24,
    fontFamily: FONTS.headingBold,
    marginBottom: 20,
    textAlign: 'center',
  },
});
