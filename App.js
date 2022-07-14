import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import { RestaurantContextProvider } from './src/services/restaurants/restaurant.context';
import LocationContextProvider from './src/services/location/LocationContext';
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
import { Navigation } from './src/infrastracture/navigation';

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
      <LocationContextProvider>
        <RestaurantContextProvider>
          <Navigation />
        </RestaurantContextProvider>
      </LocationContextProvider>
    </>
  );
}
