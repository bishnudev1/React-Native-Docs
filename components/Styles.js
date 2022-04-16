import React from "react";
import { View, Text, StyleSheet } from 'react-native';

const MakeStyles = () => {
    return (
        <View style = {styles.Goku} >
            <Text style = {styles.Gohan} >This is a Red Color</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Goku: {
        color: "skyblue"
    },
    Gohan: {
        color: "lightpink"
    }

})

export default MakeStyles;