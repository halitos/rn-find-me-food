import React, { useContext } from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Platform,
  StatusBar,
  FlatList,
  Text,
} from 'react-native';
import { Searchbar } from 'react-native-paper';
import RestInfoCard from '../components/RestInfoCard';
import { SIZES, COLORS, FONTS, SHADOWS } from '../../../constants';
import { RestaurantContext } from '../../../services/restaurants/restaurant.context';

const isAndroid = Platform.OS === 'android';

const RestScreen = () => {
  const restaurantContext = useContext(RestaurantContext);
  const { restaurants, isLoading, error } = restaurantContext;

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
      {isLoading ? (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'lime',
          }}
        >
          <Text>DATA LOADING....</Text>
        </View>
      ) : (
        <FlatList
          data={restaurants}
          renderItem={(item) => <RestInfoCard restaurant={item.item} />}
          keyExtractor={(item) => item.name}
          contentContainerStyle={styles.list}
        />
      )}
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
