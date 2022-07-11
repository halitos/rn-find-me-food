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
import RestInfoCard from '../components/RestInfoCard';

const RestScreen = () => {
  const restaurant = {
    name: 'Kebab House',
    address: '123 Main St',
    photos: ['https://picsum.photos/200/300?grayscale'],
    rating: 4.5,
    icon: 'https://picsum.photos/200/300?grayscale',
    openingHours: true,
    isClosedTemporarily: false,
  };
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
        <RestInfoCard restaurant={restaurant} />
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
