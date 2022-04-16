import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

const Home = ({route,navigation}) => {

    const { myName } = route.params;
    console.log(myName)

  return (
    <View style={styles.container} >
        <Text>Welcome {myName} to Home Page</Text>
        <br></br>
        <Button title='Go Back' onPress={()=>{
            navigation.navigate('Login')
        }} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: "center",
        justifyContent: "center"
    },
})

export default Home