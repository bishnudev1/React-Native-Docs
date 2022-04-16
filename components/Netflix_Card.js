import React from 'react'
import { StyleSheet, Text, View, Image, Button, Linking } from 'react-native';

const Netflix_Card = () => {
    return (
        <View style={styles.container} >
            <Text style={styles.headText} >Netflix Card</Text>
            <View style={styles.poster} >
                <Image style={styles.imgStyle} source={{ uri: "https://www.thebeyondnews.com/assets/admin/images/postimage/The-beyond-news-Extraction%202%20Movie%202023-%20release%20date,%20cast,%20story,%20teaser,%20trailer,%20first%20look,%20rating,%20reviews,%20box%20office%20collection%20and%20preview.jpg" }} />
                <View style={styles.subcontainer} >
                    <Text style={styles.subHeadText} >Extraction 2</Text>
                    <Text style={styles.subDescText} >Inspired by Extraction, it will be an amazing Netflix Series by famous holiwood actor Chris Hemsworth.The official release date of this movie is June 29, 2022. Stay tuned.</Text>
                </View>
                <View>
                    <Button title='Watch Now' onPress={() => Linking.openURL("https://www.netflix.com/in/title/80230399")} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    imgStyle: {
        width: "100%",
        height: 200,
        aspectRatio: 1,
    },
    headText: {
        fontSize: 30
    },
    container: {
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top:"50%",
        left: "50%",
        transform: "translate(-50%,30%)"
    },
    subcontainer: {
        alignItems: "center"
    },
    poster: {
        width: 250,
        borderWidth: 1,
        alignItems: "center",
        margin:10
    },
    subHeadText: {
        fontSize:20,
        paddingBottom:10
    },
    subDescText: {
        textAlign: "center",
        color: "#999",
        paddingBottom:10
    }
})

export default Netflix_Card