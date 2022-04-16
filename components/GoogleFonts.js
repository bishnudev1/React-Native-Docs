
// Install two modules from https://directory.vercel.app/
// 1. expo install @expo-google-fonts/josefin-sans
// 2. expo install expo-app-loading
// 3. import fonts
// 4. import useFonts 
// 5. import AppLoading

import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { 
    JosefinSans_100Thin,
    JosefinSans_200ExtraLight,
    JosefinSans_300Light,
    JosefinSans_400Regular,
    JosefinSans_500Medium,
    JosefinSans_600SemiBold,
    JosefinSans_700Bold,
    JosefinSans_100Thin_Italic,
    JosefinSans_200ExtraLight_Italic,
    JosefinSans_300Light_Italic,
    JosefinSans_400Regular_Italic,
    JosefinSans_500Medium_Italic,
    JosefinSans_600SemiBold_Italic,
    JosefinSans_700Bold_Italic 
  } from '@expo-google-fonts/josefin-sans'

import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

const GoogleFonts = () => {

    let [ fontsLoad ] = useFonts({
        JosefinSans_100Thin,
        JosefinSans_200ExtraLight,
        JosefinSans_300Light,
        JosefinSans_400Regular,
        JosefinSans_500Medium,
        JosefinSans_600SemiBold,
        JosefinSans_700Bold,
        JosefinSans_100Thin_Italic,
        JosefinSans_200ExtraLight_Italic,
        JosefinSans_300Light_Italic,
        JosefinSans_400Regular_Italic,
        JosefinSans_500Medium_Italic,
        JosefinSans_600SemiBold_Italic,
        JosefinSans_700Bold_Italic 
    })

    if(!fontsLoad){
        return <AppLoading />
    }

  return (
    <View style={styles.myContainer} >
        <Text style = {styles.fontStyle} >JosefinSans_100Thin</Text>
        <Text style = {styles.fontStyle1} >JosefinSans_600SemiBold</Text>
        <Text style = {styles.fontStyle2} >JosefinSans_400Regular_Italic</Text>
        <Text style = {styles.fontStyle3} >JosefinSans_700Bold_Italic</Text>
        <Text style = {styles.fontStyle4} >JosefinSans_500Medium</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    fontStyle: {
        fontFamily: "JosefinSans_100Thin",
        fontSize:20,
        paddingBottom:20
    },
    fontStyle1: {
        fontFamily: "JosefinSans_600SemiBold",
        fontSize:20,
        paddingBottom:20
    },
    fontStyle2: {
        fontFamily: "JosefinSans_400Regular_Italic",
        fontSize:20,
        paddingBottom:20
    },
    fontStyle3: {
        fontFamily: "JosefinSans_700Bold_Italic",
        fontSize:20,
        paddingBottom:20
    },
    fontStyle4: {
        fontFamily: "JosefinSans_500Medium",
        fontSize:20,
        paddingBottom:20
    },
    myContainer: {
        textAlign: "center",
        margin:30,
        padding:20,
    }
})

export default GoogleFonts