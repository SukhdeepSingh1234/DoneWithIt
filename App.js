
import { StyleSheet,useWindowDimensions, Text, View, SafeAreaView,StatusBar, Platform, Button, Image} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { useState } from 'react';
import Screen from './app/components/Screen';


import ImageInput from './app/components/ImageInput';
import ImageInputList from './app/components/ImageInputList';
import ListingEditScreen from './app/screens/ListingEditScreen';
export default function App() {
  

  const [images, setImages] = useState([]);

  
  
  return (
    

    <GestureHandlerRootView style={{ flex: 1 }}>

    
     <Screen>  
         <ListingEditScreen/>
     </Screen>
   
    
    


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
