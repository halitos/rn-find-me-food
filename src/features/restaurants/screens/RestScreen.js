import React, { useContext, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Platform,
  StatusBar,
  FlatList,
  Text,
  Pressable,
} from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import RestInfoCard from '../components/RestInfoCard';
import { SIZES, COLORS } from '../../../constants';
import { RestaurantContext } from '../../../services/restaurants/restaurant.context';
import Search from '../components/Search';
import FavouritesBar from '../../../components/favourites/FavouritesBar';
import { FavouritesContext } from '../../../services/favourites/FavouritesContext';

const isAndroid = Platform.OS === 'android';

const RestScreen = ({ navigation }) => {
  const restaurantContext = useContext(RestaurantContext);
  const { restaurants, isLoading, error } = restaurantContext;
  const favouritesContext = useContext(FavouritesContext);
  const { favourites } = favouritesContext;
  const [isToggled, setIsToggled] = useState(false);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginTop: isAndroid ? StatusBar.currentHeight : 0,
        backgroundColor: COLORS.brand.secondary,
      }}
    >
      <Search
        onFavouritesToggle={() => setIsToggled(!isToggled)}
        isToggled={isToggled}
      />
      {isToggled && <FavouritesBar favourites={favourites} />}
      {!isLoading && !error && (
        <FlatList
          data={restaurants}
          renderItem={({ item }) => (
            <Pressable
              onPress={() =>
                navigation.navigate('RestaurantDetail', { restaurant: item })
              }
            >
              {({ pressed }) => (
                <RestInfoCard restaurant={item} pressed={pressed} />
              )}
            </Pressable>
          )}
          keyExtractor={(item) => item.name}
          contentContainerStyle={styles.list}
        />
      )}
      {isLoading && !error && (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: COLORS.brand.secondary,
          }}
        >
          <Text
            style={{ color: 'white', fontSize: SIZES.large, marginBottom: 8 }}
          >
            DATA LOADING....
          </Text>
          <ActivityIndicator
            size='large'
            animating={true}
            color={COLORS.ui.error}
          />
        </View>
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
