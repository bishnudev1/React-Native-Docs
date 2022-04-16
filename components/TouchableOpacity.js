import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Alert, Image } from 'react-native';

const TouchableOpacityDemo = () => {
    return (
        <View style = {styles.myStyle}>
            <TouchableOpacity
                onPress={() => {
                    Alert.alert("TouchableOpacity is better than Button")
                    console.log("TouchableOpacity is better than Button")
                }}
            >
                <Text style = {styles.myStyle2} >Join Now</Text>
                <Image style = {styles.imgStyle} source = {require("../assets/Image1.jpg")} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    myStyle: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height:600
    },
    myStyle2: {
      fontSize:30,
      color: "red",
      textAlign: "center"
    },
    imgStyle: {
        height: 200,
        width:200
    }
  })

export default TouchableOpacityDemo;