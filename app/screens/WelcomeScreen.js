import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground 
         style={styles.background}
         source={require('../assets/background.jpg')} >
            <View style={styles.logoContainer} >
                <Image style={styles.logo} source={require('../assets/logo-red.png')} />
                <Text>Sell What You Don't Need</Text>
            </View>
            <View style={styles.loginButton}></View>
            <View style={styles.registerButton}></View>
         </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    loginButton:{
        width: '75%',
        height: 60,
        backgroundColor:'#fc5c65',
        position:"absolute",
        top: "73%",
        borderRadius: 40,

    },
    registerButton:{
        width: '75%',
        height: 60,
        backgroundColor:'#4ecdc4',
        position:"absolute",
        top: "83%",
        borderRadius: 40,
    },
    logo:{
        width:100,
        height:100,
    },
    logoContainer:{
        position:'absolute',
        top:90,
        alignItems: 'center',

    }

})

export default WelcomeScreen;