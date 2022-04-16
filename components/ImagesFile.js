import React from 'react'
import { Image,View,Text,StyleSheet } from 'react-native';

const ImagesFile = () => {
  return (
    <View style = {styles.SonGoku} >
        <Text style = {styles.SonGohan} >This is an Image file</Text>
        <Image
        style = {styles.PrinceVegeta}
        source={require("../assets/Image1.jpg")} />
        <br></br>
        <Image
        style = {styles.PrinceVegeta}
        source={require("../assets/Image1.jpg")} />
        <br></br>
        <Image
        style = {styles.PrinceVegeta}
        source={require("../assets/Image1.jpg")} />
        <br></br>
        <Image
        style = {styles.PrinceVegeta}
        source={require("../assets/Image1.jpg")} />
        <br></br>
        <Image
        style = {styles.PrinceVegeta}
        source={require("../assets/Image1.jpg")} />
        <br></br>
        <Image
        style = {styles.PrinceVegeta}
        source={require("../assets/Image1.jpg")} />
    </View>
  )
}

const styles = StyleSheet.create({
    SonGoku: {
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    SonGohan:{
        fontSize:30
    },
    PrinceVegeta: {
      height:300,
      width: 300
    }
})

export default ImagesFile