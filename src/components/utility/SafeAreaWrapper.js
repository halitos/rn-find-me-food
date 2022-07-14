import React from 'react';
import { SafeAreaView, Platform, StatusBar } from 'react-native';
import { COLORS } from '../../constants';

const isAndroid = Platform.OS === 'android';

const SafeAreaWrapper = ({ children }) => {
  return (
    <SafeAreaView
      style={{
        marginTop: isAndroid ? StatusBar.currentHeight : 0,
        // backgroundColor: COLORS.ui.secondary,
        justifyContent: 'center',
      }}
    >
      {children}
    </SafeAreaView>
  );
};

export default SafeAreaWrapper;
