import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native';

const PropsChild = ({textData,imgSrc}) => {
    return (
        <View style={styles.PerfectCell} >
            <Image
                style={styles.PrinceVegeta}
                source={imgSrc} />
            <Text style={styles.Android18} >{textData}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    PrinceVegeta: {
      height:200,
      width: "100%"
    },
    PerfectCell: {
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        textAlign: "center"
    },
    Android18: {
        fontSize:20
    }
})

export default PropsChild

// Via props we can send datas from Parent Component to Child Component