import { View, Text, ScrollView, Image, Pressable } from 'react-native';
import React from 'react';
import MapCallout from '../../features/map/components/MapCallout';

const FavouritesBar = ({ favourites, onDetail }) => {
  return (
    <View
      style={{
        padding: 10,
      }}
    >
      <Text
        style={{
          alignSelf: 'center',
          marginBottom: 4,
          color: 'white',
          fontWeight: '600',
        }}
      >
        {favourites.length ? 'Favourites' : 'No Favourites Selected '}
      </Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => (
          <Pressable onPress={() => onDetail(restaurant)} key={restaurant.name}>
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
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default FavouritesBar;
