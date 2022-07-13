import React, {
  useState,
  useEffect,
  createContext,
  useMemo,
  useContext,
} from 'react';
import { LocationContext } from '../location/LocationContext';
import { getRestaurantsData } from './restaurant.service';

export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);

  const fetchData = async (loc) => {
    setRestaurants([]);
    try {
      const data = await getRestaurantsData(loc);
      setRestaurants(data);
      setIsLoading(false);
    } catch (err) {
      setError(err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (location) {
      const locationToString = `${location?.lat},${location?.lng}`;
      console.log(locationToString);
      fetchData(locationToString);
    }
  }, [location]);

  const value = useMemo(
    () => ({ restaurants, isLoading, error }),
    [restaurants, isLoading, error]
  );

  return (
    <RestaurantContext.Provider value={value}>
      {children}
    </RestaurantContext.Provider>
  );
};
