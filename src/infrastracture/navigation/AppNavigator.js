import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Map from '../../features/restaurants/screens/Map';
import Settings from '../../features/restaurants/screens/Settings';
import { Ionicons } from '@expo/vector-icons';
import RestaurantNavigator from './RestaurantNavigator';
import RestScreen from '../../features/restaurants/screens/RestScreen';

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
    <NavigationContainer>
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
    </NavigationContainer>
  );
};

export default AppNavigator;
