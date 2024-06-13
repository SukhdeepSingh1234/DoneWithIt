
import { StyleSheet,useWindowDimensions, Text, View, SafeAreaView,StatusBar, Platform} from 'react-native';
import { useDeviceOrientation } from '@react-native-community/hooks';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
export default function App() {

  console.log(useDeviceOrientation());

  return (
    // <WelcomeScreen/>
    <ViewImageScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
