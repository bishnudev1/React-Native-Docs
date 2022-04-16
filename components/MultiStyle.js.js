import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const MultiStyle = () => {
  return (
    <View style={styles.mainContainer} >
      <View style={[styles.container1,styles.commonStyle]} >
        <Text style={styles.textStyle} >This is Box 1</Text>
      </View>
      <View style={[styles.container2,styles.commonStyle]} >
        <Text style={styles.textStyle} >This is Box 2</Text>
      </View>
      <View style={[styles.container3,styles.commonStyle]} >
        <Text style={styles.textStyle} >This is Box 3</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
    padding: 20,
    justifyContent: "center"
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 600
  },
  container1: {
    backgroundColor: "pink",
    border: "1px solid black",
  },
  container2: {
    backgroundColor: "skyblue",
    border: "1px solid white",
  },
  container3: {
    backgroundColor: "red",
    border: "1px solid green",
  },
  // Creating a common style for three boxes
  commonStyle: {
    height: 100,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius:30,
    margin:30
  }
})

export default MultiStyle;