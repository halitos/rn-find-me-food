import React, { useState, useEffect, useMemo, createContext } from 'react';
import { getLocationData } from './location.service';

export const LocationContext = createContext();

const LocationContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState('san francisco');
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const onSearch = async (searchKeyword) => {
    try {
      if (!searchKeyword) {
        throw new Error('No search keyword provided');
      }
      setIsLoading(true);
      setKeyword(searchKeyword);
      const res = await getLocationData(searchKeyword.toLowerCase());
      setLocation(res);
      console.log(res);
      setIsLoading(false);
    } catch (err) {
      setError(err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    onSearch(keyword);
  }, [keyword]);

  const value = useMemo(
    () => ({ isLoading, error, keyword, location, search: onSearch }),
    [isLoading, error, keyword, location, onSearch]
  );

  return (
    <LocationContext.Provider value={value}>
      {children}
    </LocationContext.Provider>
  );
};

export default LocationContextProvider;
