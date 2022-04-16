import React from 'react'
import {View,Text} from 'react-native';

const JSXVariables = () => {
    const name = "Bishnudev Khutia";
    const greet = <Text>Greeting everyone. Myself React-Native</Text>
    const sum = (n1,n2,n3) => {
        return `The Sum of ${n1} ${n2} ${n3} is : ${n1+n2+n3}`
    }

  return (
    <View>
        <Text>How to use Variables in JSX</Text>
        <Text>Hello my name is {name}</Text>
        {greet}
        <Text>{sum(12,38,54)}</Text>
    </View>
  )
}

export default JSXVariables;