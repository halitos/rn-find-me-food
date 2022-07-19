import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Map from '../../features/restaurants/screens/Map';
import Settings from '../../features/restaurants/screens/Settings';
import { Ionicons } from '@expo/vector-icons';
import RestaurantNavigator from './RestaurantNavigator';

const Tab = createBottomTabNavigator();

const TabIcons = {
  Restaurants: 'restaurant',
  Map: 'map',
  Settings: 'settings',
};

const setScreenOptions = ({ route }) => {
  const iconName = TabIcons[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

const AppNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName='RestScreen'
      screenOptions={setScreenOptions}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name='Restaurants' component={RestaurantNavigator} />
      <Tab.Screen name='Map' component={Map} />
      <Tab.Screen name='Settings' component={Settings} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
