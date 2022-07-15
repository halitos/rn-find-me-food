import { View, StyleSheet, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import React, { useContext } from 'react';
import MapSearch from '../../map/components/MapSearch';
import { LocationContext } from '../../../services/location/LocationContext';
import { RestaurantContext } from '../../../services/restaurants/restaurant.context';
import MapCallout from '../../map/components/MapCallout';

const Map = ({ navigation }) => {
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantContext);
  return (
    <View>
      <MapSearch />
      <MapView
        style={styles.map}
        region={{
          latitude: location?.lat,
          longitude: location?.lng,
          latitudeDelta: location.northeast.lat - location.southwest.lat,
          longitudeDelta: location.northeast.lng - location.southwest.lng,
        }}
      >
        {restaurants.map((restaurant) => (
          <MapView.Marker
            key={restaurant.name}
            title={restaurant.name}
            description={restaurant.vicinity}
            coordinate={{
              latitude: restaurant.geometry.location.lat,
              longitude: restaurant.geometry.location.lng,
            }}
          >
            <MapView.Callout
              onPress={() =>
                navigation.navigate('RestaurantDetail', { restaurant })
              }
            >
              <MapCallout restaurant={restaurant} />
            </MapView.Callout>
          </MapView.Marker>
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  search: {
    position: 'absolute',
    top: 20,
    zIndex: 10,
  },
});

export default Map;
