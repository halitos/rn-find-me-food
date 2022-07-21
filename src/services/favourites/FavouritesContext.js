import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthenticationContext } from '../authentication/AuthenticationContext';

export const FavouritesContext = createContext();

const FavouritesContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);
  const authContext = useContext(AuthenticationContext);
  const { user } = authContext;

  const addFavourite = (restaurant) => {
    setFavourites([...favourites, restaurant]);
  };

  const removeFavourite = (restaurant) => {
    if (favourites.length > 0) {
      const newFavourites = favourites.filter(
        (f) => f.place_id !== restaurant.place_id
      );
      setFavourites(newFavourites);
    }
  };

  const storeFavourites = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('@favourites', jsonValue);
    } catch (err) {
      console.log('Store Fav Error:', err);
    }
  };

  const getFavourites = async (userId) => {
    try {
      const value = await AsyncStorage.getItem(`@favourites-${userId}`);
      if (value) {
        setFavourites(JSON.parse(value));
      }
    } catch (err) {
      console.log('Get Fav Error', err);
    }
  };

  useEffect(() => {
    if (user) {
      getFavourites(user.uid);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      storeFavourites(favourites);
    }
  }, [favourites, user]);

  // const value = useMemo(
  //   () => ({ favourites, addFavourite, removeFavourite }),
  //   [favourites, addFavourite, removeFavourite]
  // );

  return (
    <FavouritesContext.Provider
      value={{ favourites, addFavourite, removeFavourite }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};

export default FavouritesContextProvider;
