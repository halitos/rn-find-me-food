import React from 'react';
import { SafeAreaView, Platform, StatusBar } from 'react-native';
import { COLORS } from '../../constants';

const isAndroid = Platform.OS === 'android';

const SafeAreaWrapper = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginTop: isAndroid ? StatusBar.currentHeight : 0,
        backgroundColor: COLORS.brand.primary,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    ></SafeAreaView>
  );
};

export default SafeAreaWrapper;
