import { View, Text } from 'react-native';
import React from 'react';
import {
  AccountBackground,
  AccountContainer,
} from '../components/AccountBackground';

const Account = ({ navigation }) => (
  <AccountBackground>
    <AccountContainer navigation={navigation} />
  </AccountBackground>
);

export default Account;
