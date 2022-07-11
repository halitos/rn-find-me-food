import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
} from 'react-native';
import { Searchbar } from 'react-native-paper';
import RestInfo from '../components/RestInfo';

const RestScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
      <View style={styles.search}>
        <Searchbar placeholder='Search' />
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: 'blue',
          padding: 8,
        }}
      >
        <RestInfo />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  search: {
    backgroundColor: '#D3D9DC',
    padding: 12,
  },
});

export default RestScreen;
