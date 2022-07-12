import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import RestScreen from './src/features/restaurants/screens/RestScreen';
import Map from './src/features/restaurants/screens/Map';
import Settings from './src/features/restaurants/screens/Settings';
import { RestaurantContextProvider } from './src/services/restaurants/restaurant.context';

import {
  useFonts as useOswaldFont,
  Oswald_400Regular,
  Oswald_300Light,
  Oswald_600SemiBold,
  Oswald_700Bold,
} from '@expo-google-fonts/oswald';
import {
  useFonts as useLatoFont,
  Lato_400Regular,
  Lato_700Bold,
} from '@expo-google-fonts/lato';

const Tab = createBottomTabNavigator();

const TabIcons = {
  Restaurants: 'restaurant',
  Map: 'map',
  Settings: 'settings',
};

// *** More functional approach - function returning function ***
// const tabBarIcon =
//   (iconName) =>
//   ({ size, color }) => {
//     return <Ionicons name={iconName} size={size} color={color} />;
//   };

const setScreenOptions = ({ route }) => {
  const iconName = TabIcons[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

export default function App() {
  const [OswaldFontLoaded] = useOswaldFont({
    Oswald_400Regular,
    Oswald_600SemiBold,
    Oswald_700Bold,
    Oswald_300Light,
  });
  const [LatoFontLoaded] = useLatoFont({
    Lato_400Regular,
    Lato_700Bold,
  });
  if (!OswaldFontLoaded || !LatoFontLoaded) {
    return <Text style={{ padding: 50 }}>FONTS LOADING...</Text>;
  }
  return (
    <>
      <ExpoStatusBar style='auto' />
      <RestaurantContextProvider>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName='RestScreen'
            screenOptions={setScreenOptions}
            // ****** Claimed to be Simplified ??? ******
            // screenOptions={({ route }) => ({
            //   tabBarIcon: ({ color, size }) => {
            //     let iconName;
            //     if (route.name === 'Restaurants') {
            //       iconName = 'restaurant';
            //     } else if (route.name === 'Map') {
            //       iconName = 'map';
            //     } else if (route.name === 'Settings') {
            //       iconName = 'settings';
            //     }
            //     return <Ionicons name={iconName} size={size} color={color} />;
            //   },
            // })}
            tabBarOptions={{
              activeTintColor: 'tomato',
              inactiveTintColor: 'gray',
              // Can Add style here
              // style: {},
            }}
          >
            <Tab.Screen name='Restaurants' component={RestScreen} />
            <Tab.Screen name='Map' component={Map} />
            <Tab.Screen name='Settings' component={Settings} />
          </Tab.Navigator>
        </NavigationContainer>
      </RestaurantContextProvider>
    </>
  );
}
