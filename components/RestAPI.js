import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, FlatList, Image, ActivityIndicator } from 'react-native';

const RestAPI = () => {

    const [myData, setMyData] = useState()
    const [isLoaded, setIsLoaded] = useState(true)

    const getData = async () => {
        try {
            const response = await fetch('https://thapatechnical.github.io/userapi/users.json');
            const data = await response.json();
            setMyData(data);
            setIsLoaded(false);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData();
    }, [])
    return (
        <View style={styles.mainStyle} >
            {isLoaded ? <ActivityIndicator size="large" color="#0000ff" /> : (
                <View>
                    <FlatList
                        data={myData}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => {
                            console.log(item)
                            return (
                                <View style={styles.container} >
                                    <Text style={styles.textStyle}>
                                        {item.id < 10 ? `#0${item.id}` : `#${item.id}`}
                                    </Text>
                                    <Text style={styles.textStyle}>{item.name}</Text>
                                    <Text style={styles.textStyle}>{item.email}</Text>
                                    <Image style={styles.imgStyle} source={{ uri: item.image }} />
                                    <Text style={styles.textStyle}>{item.website}</Text>
                                    <Text style={styles.textStyle}>{item.mobile}</Text>
                                    <Text style={styles.textStyle}>{item.description}</Text>
                                </View>
                            )
                        }}
                    />
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    imgStyle: {
        width: 200,
        height: 200,
        borderRadius: 100
    },
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: 30,
        width: "100%",
        borderWidth: 1,
    },
    textStyle: {
        padding: 10,
        fontSize: 15,
        fontWeight: 700
    },
    mainStyle: {
        position:"relative",
        top:170,
        display:"flex",
        justifyContent: "center",
        alignItems: "center"
    }
})

export default RestAPI