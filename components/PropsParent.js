import React from 'react'
import { View } from 'react-native';
import PropsChild from './PropsChild';

const PropsParent = () => {
  return (
    <View>
      <PropsChild
        textData="This is my 1st Image"
        imgSrc={require("../assets/Image1.jpg")}
      />
      <PropsChild
        textData="This is my 2nd Image"
        imgSrc={require("../assets/Image2.jpg")}
      />
      <PropsChild
        textData="This is my 3rd Image"
        imgSrc={require("../assets/Image3.jpg")}
      />
    </View>
  )
}

export default PropsParent

// Via props we can send datas from Parent Component to Child Component