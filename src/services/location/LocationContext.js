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
    } catch (err) {
      setError(err);
      setIsLoading(false);
    }
  };

  const onLocationFound = async (searchKeyword) => {
    try {
      if (searchKeyword.length > 0) {
        const res = await getLocationData(searchKeyword.toLowerCase());
        setLocation(res);
        setIsLoading(false);
      }
    } catch (err) {
      setError(err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    onLocationFound(keyword);
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
