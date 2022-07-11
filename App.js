import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import { Platform } from 'react-native';
import RestScreen from './src/features/restaurants/screens/RestScreen';
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
      <RestScreen />
    </>
  );
}
