import React from 'react'
import { Button, Text, View, StyleSheet, Alert } from 'react-native';

const ButtonDemo = () => {
  return (
    <View style = {styles.myStyle}>
        <Text style = {styles.myStyle2} >Button in React-Native</Text>
        <br></br>
        <Button title="Join Now" onPress={()=>{
          Alert.alert("Simple Button Pressed !")
        }} />
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
    color: "red"
  }
})

export default ButtonDemo;