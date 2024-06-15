
import { StyleSheet,useWindowDimensions, Text, View, SafeAreaView,StatusBar, Platform} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AccountScreen from './app/screens/AccountScreen';
import MessagesScreen from './app/screens/ListingsScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
export default function App() {


  return (
    <GestureHandlerRootView style={{ flex: 1 }}>

    {/* <AccountScreen/> */}
    {/* <MessagesScreen/> */}
     <WelcomeScreen/>


  </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
