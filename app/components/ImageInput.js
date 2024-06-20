import { View, Text,StyleSheet, Image, Alert } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';

export default function ImageInput({image, onChangeImage}) {

  const handlePress= ()=>{
    if(!image){
      selectImage()
    }else{
      Alert.alert('Delete','Are you sure you want to delete',[
        {text: 'Yes', onPress: ()=> onChangeImage(null)},
        {text: 'No'}
      ])
    }
  }

  const selectImage = async () => {
    
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.5, // 0 is lower quality, 1 is higher and 0.5 is medium
    });

    console.log(result);

    if (!result.canceled) {
      onChangeImage(result.assets[0].uri);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress} >
    <View style={styles.container}>
      {!image && <MaterialCommunityIcons color={colors.medium} name='camera' size={40} />}
      {image && <Image source={{uri:image}} style={styles.image} />}
    </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
    container:{
      justifyContent: 'center',
      alignItems: 'center',
      width : 100,
      height : 100,
      backgroundColor: colors.lightgrey,
      borderRadius :15,
      overflow: 'hidden',
    },
    image: {
  
      width : '100%',
      height : '100%',
    }
})