import { View, StyleSheet, Text } from 'react-native';
import {
  Button,
  TextInput,
  ActivityIndicator,
  Colors,
} from 'react-native-paper';
import React, { useState, useContext } from 'react';
import { AccountBackground } from '../components/AccountBackground';
import { AuthenticationContext } from '../../../services/authentication/AuthenticationContext';
import { COLORS } from '../../../constants';

const Register = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const authenticationContext = useContext(AuthenticationContext);
  const { onRegister, error, isAuthLoading } = authenticationContext;

  return (
    <AccountBackground>
      <View style={styles.container}>
        <TextInput
          label='Email'
          value={email}
          textContentType='emailAddress'
          keyboardType='email-address'
          autoCapitalize='none'
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />

        <TextInput
          label='Password'
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry={true}
          value={password}
          textContentType='password'
          autoCapitalize='none'
        />
        <TextInput
          label='Confim Password'
          onChangeText={(text) => setConfirmPassword(text)}
          style={styles.input}
          secureTextEntry={true}
          value={confirmPassword}
          textContentType='password'
          autoCapitalize='none'
        />
        {error && (
          <View>
            <Text style={{ color: COLORS.ui.error, fontWeight: '700' }}>
              {error}
            </Text>
          </View>
        )}
        {!isAuthLoading ? (
          <Button
            icon='email'
            mode='contained'
            color={COLORS.ui.success}
            onPress={() => {
              onRegister(email, password, confirmPassword);
              setEmail('');
              setPassword('');
              setConfirmPassword('');
            }}
            style={{ marginTop: 20, padding: 4 }}
          >
            Register
          </Button>
        ) : (
          <ActivityIndicator size='large' color={Colors.blue} />
        )}
      </View>
      <Button
        // icon='back'
        mode='contained'
        color='blue'
        onPress={() => navigation.goBack()}
        style={{ marginTop: 20, padding: 4 }}
      >
        Back
      </Button>
    </AccountBackground>
  );
};

export default Register;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: '#D6DBDF',
    marginVertical: 8,
    paddingHorizontal: 8,
  },
  container: {
    justifyContent: 'center',
    width: 280,
    backgroundColor: 'rgba(255,255,255,0.9)',
    padding: 24,
  },
});
