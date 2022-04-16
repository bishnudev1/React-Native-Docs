import React, { useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

const CounterApp = () => {

    const [counter, setCounter] = useState(0)

    return (
        <View style={styles.mainContainer}>
            <Text style={styles.mainText} >Counter : {counter}</Text>
            <Button title='Increment Data' onPress={() => { setCounter(counter + 10) }} />
            <br></br>
            <Button title='Decrement Data' onPress={() => { if (counter > 0) setCounter(counter - 10) }} />
            <br></br>
            <Button title='Reset Data' onPress={() => { setCounter(0) }} />
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        alignContent: "center",
        textAlign: "center",
        position: "relative",
        top: 300
    },
    mainText: {
        fontSize: 30,
        paddingBottom: 30
    },
})

export default CounterApp