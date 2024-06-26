import { useEffect, useState } from "react";
import * as Location from "expo-location";

export default useLocation = () => {
    const [location, setLocation]= useState();
    
    const getLocation= async ()=>{
    try {
      const {granted}= await Location.requestForegroundPermissionsAsync()
      console.log(granted)
      if(!granted) return
      else{
      const {coords:{ latitude,longitude} }= await Location.getCurrentPositionAsync()
      setLocation({latitude,longitude})
      }
    }catch (error) {
        console.log(error);
    }
    }
      useEffect(()=>{
      getLocation()
      },[])

  return location; 
};
