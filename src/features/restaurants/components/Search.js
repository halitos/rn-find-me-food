import { View, StyleSheet } from 'react-native';
import React, { useContext, useState, useEffect } from 'react';
import { Searchbar } from 'react-native-paper';
import { COLORS, SIZES } from '../../../constants';
import { LocationContext } from '../../../services/location/LocationContext';

const Search = ({ isToggled, onFavouritesToggle }) => {
  console.log('isToggled', isToggled);
  const locationContext = useContext(LocationContext);
  const { search, keyword } = locationContext;
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <View style={styles.search}>
      <Searchbar
        icon={isToggled ? 'heart' : 'heart-outline'}
        onIconPress={onFavouritesToggle}
        placeholder='Search for a location'
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
    backgroundColor: COLORS.ui.secondary,
    padding: SIZES.small,
  },
});

export default Search;
