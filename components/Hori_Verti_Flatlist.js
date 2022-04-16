import React from 'react'
import { StyleSheet, FlatList, Text } from 'react-native';

const Hori_Verti_Flatlist = () => {

    const languages = [
        {
            index: 1,
            name: "Javascript"
        },
        {
            index: 2,
            name: "Python"
        },
        {
            index: 3,
            name: "C"
        },
        {
            index: 4,
            name: "C++"
        },
        {
            index: 5,
            name: "Java"
        },
        {
            index: 6,
            name: "HTML"
        },
        {
            index: 7,
            name: "Node JS"
        },
        {
            index: 8,
            name: "React JS"
        },
        {
            index: 9,
            name: "React-Native"
        },
        {
            index: 10,
            name: "Github"
        }
    ];
    return (
        <>
            <FlatList style={styles.listStyle} keyExtractor={(keys) => {
                return keys.index
            }} inverted horizontal showsHorizontalScrollIndicator={false} data={languages} renderItem={({ item }) => {
                return <Text style={styles.textStyle} >{item.name}</Text>
            }} />
        </>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize:20,
        padding:30,
        backgroundColor:"blue",
        margin:20,
        color:"white"
    },
    listStyle: {
        textAlign:"center",
        margin:20,
        padding:10
    },
})

export default Hori_Verti_Flatlist;