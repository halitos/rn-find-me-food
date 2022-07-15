import { View, Text, Pressable } from 'react-native';
import React, { useContext } from 'react';
import { IconButton } from 'react-native-paper';
import { FavouritesContext } from '../../services/favourites/FavouritesContext';

const FavouriteButton = ({ restaurant }) => {
  const favouritesContext = useContext(FavouritesContext);
  const { favourites, addFavourite, removeFavourite } = favouritesContext;
  console.log(favourites);
  const isFavourite = favourites?.length
    ? favourites.find((f) => f?.place_id === restaurant?.place_id)
    : false;

  console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', favourites[0]?.place_id);

  console.log('isFavourite', isFavourite);
  return (
    <Pressable
      onPress={() => {
        !isFavourite ? addFavourite(restaurant) : removeFavourite(restaurant);
      }}
      style={{ zIndex: 11 }}
    >
      <IconButton
        icon={isFavourite ? 'heart' : 'heart-outline'}
        color={isFavourite ? '#f44336' : '#fff'}
        style={{
          position: 'absolute',
          top: 4,
          right: 4,
        }}
      />
    </Pressable>
  );
};

export default FavouriteButton;
