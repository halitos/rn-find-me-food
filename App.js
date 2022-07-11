import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import RestScreen from './src/features/restaurants/screens/RestScreen';
import Map from './src/features/restaurants/screens/Map';
import Settings from './src/features/restaurants/screens/Settings';
import { COLORS, SIZES } from './src/constants';
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

export default function App() {
  const isAndroid = Platform.OS === 'android';
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
    return <Text style={{ padding: 50 }}>LOADING</Text>;
  }
  return (
    <>
      <ExpoStatusBar style='auto' />
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName='RestScreen'
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Restaurants') {
                iconName = 'restaurant';
              } else if (route.name === 'Map') {
                iconName = 'map';
              } else if (route.name === 'Settings') {
                iconName = 'settings';
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
            // style: {
            //   backgroundColor: COLORS.ui.secondary,
            //   borderTopColor: COLORS.ui.secondary,
            //   borderTopWidth: 1,
            //   height: isAndroid
            //     ? SIZES.tabBarHeight
            //     : SIZES.tabBarHeight + StatusBar.currentHeight,
            // },
          }}
        >
          <Tab.Screen name='Restaurants' component={RestScreen} />
          <Tab.Screen name='Map' component={Map} />
          <Tab.Screen name='Settings' component={Settings} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
