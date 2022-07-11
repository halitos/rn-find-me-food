import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, Platform } from 'react-native';
import RestScreen from './src/features/restaurants/screens/RestScreen';

export default function App() {
  const isAndroid = Platform.OS === 'android';
  return (
    <>
      <ExpoStatusBar style='auto' />
      <RestScreen />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  search: {
    backgroundColor: '#D3D9DC',
    padding: 12,
  },
});
