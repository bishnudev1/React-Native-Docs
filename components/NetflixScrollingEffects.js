import React from 'react'
import { StyleSheet, Text, View, Button, Linking, FlatList, Image } from 'react-native';

const NetflixScrollingEffects = () => {
    const webSeries = [
        {
            id: 1,
            name: "Extraction",
            desc: "Inspired by Extraction, it will be an amazing Netflix Series by famous holiwood actor Chris Hemsworth.The official release date of this movie is June 29, 2022. Stay tuned."
        },
        {
            id: 2,
            name: "Turbo",
            desc: "Turbo is a 2013 American 3D computer-animated sports comedy film produced by DreamWorks Animation and distributed by 20th Century Fox."
        },
        {
            id: 3,
            name: "All Of Us Dead",
            desc: "All of Us Are Dead (Korean: 지금 우리 학교는; RR: Jigeum Uri Hakgyoneun; lit. Now at Our School) is a South Korean coming-of-age[2] zombie apocalypse horror streaming television series."
        },
    ]
    return (

        <FlatList
            keyExtractor={(index) => {
                return index.id
            }}
            data={webSeries}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={(element) => {
                console.log(element.item.name)
                console.log(element.item.desc)
                console.log(element.item.id)
                return (
                    <>
                        <View style={styles.container} >
                            <Text style={styles.headText} >Netflix Card</Text>
                            <View style={styles.poster}>
                                <Image style={styles.imgStyle} source={{ uri: "https://www.thebeyondnews.com/assets/admin/images/postimage/The-beyond-news-Extraction%202%20Movie%202023-%20release%20date,%20cast,%20story,%20teaser,%20trailer,%20first%20look,%20rating,%20reviews,%20box%20office%20collection%20and%20preview.jpg" }} />
                                <View style={styles.subcontainer} >
                                    <Text style={styles.subHeadText} >{element.item.name}</Text>
                                    <Text style={styles.subDescText} >{element.item.desc}</Text>
                                </View>
                                <View>
                                    <Button title='Watch Now' onPress={() => Linking.openURL("https://www.netflix.com/in/title/80230399")} />
                                </View>
                            </View>
                        </View>
                    </>
                )
            }}
        />
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
        margin: 30
    },
    subcontainer: {
        alignItems: "center"
    },
    poster: {
        width: 250,
        borderWidth: 1,
        alignItems: "center",
        margin: 10
    },
    subHeadText: {
        fontSize: 20,
        paddingBottom: 10
    },
    subDescText: {
        textAlign: "center",
        color: "#999",
        paddingBottom: 10
    },
})

export default NetflixScrollingEffects