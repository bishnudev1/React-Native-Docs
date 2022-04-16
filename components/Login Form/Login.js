import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert  } from 'react-native';
import CheckBox from "expo-checkbox";

const Login = ({navigation}) => {

  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [isChecked, setIsChecked] = useState(false)

  const getData = () => {
    if(name === "Bishnudev" && password === "12345"){
      console.log(`Welcome ${name} to our App`)
      Alert.alert(`Welcome ${name} to our App`)
      navigation.navigate('Home',{myName:`${name}`})
    }
    else{
      console.log("Wrong username or password entered")
      Alert.alert(`Wrong creditionals`)
    }
  }

  return (
    <View style={styles.mainContainer} >
      <View style={styles.headContainer} >
        <Text style={[{ fontSize: 25 },{marginBottom:10}]} >Login Form</Text>
        <Text style={[{ fontSize: 17 }]} >You can contact us via any@bishnudev.com anytime</Text>
      </View>
      <View style={styles.authField} >
        <Text style={[{ fontWeight: 600 }, { fontFamily: "sans-serif" },{paddingHorizontal:5}]} >Enter your name...</Text>
        <TextInput style={styles.inputStyle} value={name} autoCapitalize='none' autoCorrect={false} onChangeText={(actualData) => setName(actualData)} />
        <Text style={[{ fontWeight: 600 }, { fontFamily: "sans-serif" },{paddingHorizontal:5}]} >Enter your password...</Text>
        <TextInput style={styles.inputStyle} value={password} secureTextEntry={true} autoCapitalize='none' autoCorrect={false} onChangeText={(actualData) => setPassword(actualData)} />
      </View>
      <View style={styles.checkBox} >
        <CheckBox value={isChecked} onValueChange={() => setIsChecked(!isChecked)} />
        <Text style={styles.checkText} >I have read and agreed with all terms and conditions</Text>
      </View>
      <TouchableOpacity
        style={[styles.btnStyle, { backgroundColor: isChecked ? "#4630EB" : "grey" }]}
        disabled={!isChecked}
        onPress={() => getData()} >
        <Text>Login Now</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  btnStyle: {
    textAlign: "center",
    fontWeight: 800,
    marginTop:25,
    padding: 5,
    width:"100%"
  },
  headContainer: {
    marginTop:40,
    marginBottom: 30
  },
  mainContainer: {
    padding: 50,
    // borderWidth:1,
    // width:350,
    // position:"absolute",
    // left:"5%",
    // top:160
    flex:1,
    alignItems: "center",
    justifyContent: "center"
  },
  authField: {
    paddingBottom: 30,
    width:"100%"
  },
  inputStyle: {
    borderWidth:1,
    borderColor: "grey",
    marginVertical:10,
    height:25
  },
  checkText: {
    position:"relative",
    bottom:18,
    left:20
  }
})

export default Login