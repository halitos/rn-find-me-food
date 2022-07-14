import React from 'react';
import {
  createStackNavigator,
  // TransitionPreset,
} from '@react-navigation/stack';
import RestaurantScreen from '../../features/restaurants/screens/RestScreen';
import { Text } from 'react-native';
import RestaurantDetail from '../../features/restaurants/screens/RestaurantDetail';
const Stack = createStackNavigator();

const RestaurantNavigator = () => {
  return (
    <Stack.Navigator headerMode='none' initialRouteName='RestaurantScreen'>
      <Stack.Screen name='Restaurant' component={RestaurantScreen} />
      <Stack.Screen name='RestaurantDetail' component={RestaurantDetail} />
    </Stack.Navigator>
  );
};

export default RestaurantNavigator;
