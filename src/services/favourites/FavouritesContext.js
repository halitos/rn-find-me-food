import React, { createContext, useState, useMemo } from 'react';

export const FavouritesContext = createContext();

const FavouritesContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const addFavourite = (restaurant) => {
    setFavourites([...favourites, restaurant]);
  };

  const removeFavourite = (restaurant) => {
    const newFavourites = setFavourites(
      favourites.filter((f) => f.place_id !== restaurant.place_id)
    );

    setFavourites(newFavourites);
  };

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
