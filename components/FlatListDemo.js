import React from 'react'
import { StyleSheet, FlatList, Text } from 'react-native';

const FlatListDemo = () => {

    const names = [
        {
            index: 1,
            name: "Bishnudev"
        },
        {
            index: 2,
            name: "Arnab"
        },
        {
            index: 3,
            name: "Sudip"
        },
        {
            index: 4,
            name: "Anjali"
        }
    ];

    return (
        <FlatList keyExtractor={(index) => {
            return index.index
        }} data={names} renderItem={(element) => {
            console.log(element.item.name)
            return <Text style={styles.myStyle} >{element.item.name}</Text>
        }} />
    )
}

const styles = StyleSheet.create({
    myStyle: {
        fontSize: 40
    }
})

export default FlatListDemo;