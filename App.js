import { initializeApp } from 'firebase/app';
import React, { useEffect } from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import { RestaurantContextProvider } from './src/services/restaurants/restaurant.context';
import LocationContextProvider from './src/services/location/LocationContext';
import { AuthenticationContextProvider } from './src/services/authentication/AuthenticationContext';
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
import FavouritesContextProvider from './src/services/favourites/FavouritesContext';
import { getAuth } from 'firebase/auth';

// Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAgBhU6sGfDhx6aiDeVvS2W-bduKhRhkvQ',
  authDomain: 'find-me-food-a6d53.firebaseapp.com',
  projectId: 'find-me-food-a6d53',
  storageBucket: 'find-me-food-a6d53.appspot.com',
  messagingSenderId: '144523191153',
  appId: '1:144523191153:web:4ed609cb1686d10f760cd0',
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

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

  const checkLogin = async () => {
    const auth = getAuth();
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log('user is logged');
      }
    });
  };

  useEffect(() => {
    checkLogin();
  }, []);

  if (!OswaldFontLoaded || !LatoFontLoaded) {
    return <Text style={{ padding: 50 }}>FONTS LOADING...</Text>;
  }
  return (
    <>
      <ExpoStatusBar style='auto' />
      <AuthenticationContextProvider>
        <FavouritesContextProvider>
          <LocationContextProvider>
            <RestaurantContextProvider>
              <Navigation />
            </RestaurantContextProvider>
          </LocationContextProvider>
        </FavouritesContextProvider>
      </AuthenticationContextProvider>
    </>
  );
}
