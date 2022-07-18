import { View, Text, ScrollView, Image } from 'react-native';
import React from 'react';
import MapCallout from '../../features/map/components/MapCallout';

const FavouritesBar = ({ favourites }) => {
  return (
    <View
      style={{
        padding: 10,
      }}
    >
      <Text style={{ alignSelf: 'center', marginBottom: 8 }}>
        FavouritesBar
      </Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => (
          <View style={{ marginLeft: 10, maxWidth: 120 }}>
            <Image
              source={{ uri: restaurant.photos[0] }}
              style={{
                width: 100,
                height: 100,
                marginBottom: 4,
                borderRadius: 8,
              }}
            />
            <Text>{restaurant.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default FavouritesBar;
