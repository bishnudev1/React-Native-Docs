import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';

const RandomColorGenerator = () => {

    const [color, setColor] = useState([])

    const randomColor = () => {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);

        return `rgb(${red},${green},${blue})`
    }

    return (
        <View style={styles.mainContainer} >
            <TouchableOpacity style={styles.btnStyle} onPress={() => { setColor([...color, randomColor()]) }} >
                <Text style={styles.textStyle} >Generate Random Color</Text>
            </TouchableOpacity>
            <br></br>
            <FlatList keyExtractor={(key) => key} data={color} renderItem={({ item }) => {
                console.log(item)
                return (
                    <View style={styles.imageContainer}>
                        <View style={{ backgroundColor: item, color: "white", width: 100, height: 100, borderRadius: 5, display: "flex", justifyContent: "center", alignItems: "center", width: "80%" }} >
                            <Text style={styles.textStyle} >{item}</Text>
                        </View>
                    </View>
                )
            }} />
        </View>
    )
}

const styles = StyleSheet.create({

    mainContainer: {
        marginTop: 100
    },

    btnStyle: {
        backgroundColor: "blue",
        position: "relative",
        overflow: "hidden",
        color: "skyblue",
        paddingVertical: 10,
        paddingHorizontal: 15,
        margin: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5
    },
    textStyle: {
        color: "white",
        fontSize: 20
    },
    imageContainer: {
        marginVertical: 10,
        paddingHorizontal: 30,
        display: "flex",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "bold"
    }
})

export default RandomColorGenerator