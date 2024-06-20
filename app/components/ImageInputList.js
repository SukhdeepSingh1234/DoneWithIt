 import { ScrollView, StyleSheet, Text, View } from 'react-native'
 import React, { useRef } from 'react'
import ImageInput from './ImageInput'
 
 export default function ImageInputList({images=[],onRemoveImage, onAddImage }) {
    const scrollView= useRef()
   return (
    <View>    
    <ScrollView horizontal ref={scrollView} onContentSizeChange={()=>scrollView.current.scrollToEnd()}  >
     <View style={styles.container} >
       {images.map((image)=>(
        <View style={styles.image} > 
            <ImageInput
                image={image}
                key={image}
                onChangeImage={()=> onRemoveImage(image)}
            />
        </View>
        ))}
       <ImageInput onChangeImage={uri => onAddImage(uri)} />
     </View>
     </ScrollView>
     </View>
   )
 }
 
 const styles = StyleSheet.create({
    container:{
        flexDirection:'row'
    },
    image:{
        marginRight:10
    }
 })