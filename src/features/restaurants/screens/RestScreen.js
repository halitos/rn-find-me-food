import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  FlatList,
} from 'react-native';
import { Searchbar } from 'react-native-paper';
import RestInfoCard from '../components/RestInfoCard';
import { SIZES, COLORS, FONTS, SHADOWS } from '../../../constants';

const isAndroid = Platform.OS === 'android';

const RestScreen = () => {
  const restaurant = {
    name: 'Kebab House',
    address: '123 Main St',
    photos: ['https://picsum.photos/400/200?grayscale'],
    rating: 3.5,
    icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    isOpenNow: true,
    isClosedTemporarily: true,
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginTop: isAndroid ? StatusBar.currentHeight : 0,
        backgroundColor: COLORS.brand.primary,
      }}
    >
      <View style={styles.search}>
        <Searchbar placeholder='Search' />
      </View>
      <FlatList
        data={[{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }, { name: 5 }]}
        r
        renderItem={(item) => <RestInfoCard restaurant={restaurant} />}
        keyExtractor={(item) => item.name}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  search: {
    backgroundColor: COLORS.ui.secondary,
    padding: SIZES.small,
  },
  list: {
    padding: SIZES.font,
  },
});

export default RestScreen;
