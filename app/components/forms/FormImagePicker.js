import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useFormikContext } from "formik";

import ImageInputList from '../ImageInputList'
import ErrorMessage from './ErrorMessage'

const FormImagePicker = ({name}) => {
    const { errors, setFieldValue, touched, values } = useFormikContext();
    const images= values[name];
    const handleAdd= (uri)=>{
        setFieldValue(name,[...images, uri]);
    
      }
      const handleRemove= (uri)=>{
        setFieldValue(name,images.filter(image => image!== uri))
      }
  return (
        <>
        <ImageInputList
            images={images}
            onAddImage={handleAdd} 
            onRemoveImage={handleRemove}
        />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
      </>
  )
}

export default FormImagePicker

const styles = StyleSheet.create({})