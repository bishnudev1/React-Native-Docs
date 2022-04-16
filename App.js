import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HelloWorld from './components/HelloWorld';
import MakeStyles from './components/Styles';
import JSXVariables from './components/JSXVariables';
import FlatListDemo from './components/FlatListDemo';
import Hori_Verti_Flatlist from './components/Hori_Verti_Flatlist';
import ImagesFile from './components/ImagesFile';
import ButtonDemo from './components/ButtonDemo';
import TouchableOpacityDemo from './components/TouchableOpacity';
import PropsParent from './components/PropsParent';
import Netflix_Card from './components/Netflix_Card';
import GoogleFonts from './components/GoogleFonts';
import MultiStyle from './components/MultiStyle.js';
import NetflixScrollingEffects from './components/NetflixScrollingEffects'
import CounterApp from './components/CounterApp'
import RandomColorGenerator from './components/RandomColorGenerator'
import RestAPI from './components/RestAPI'
import Login from './components/Login Form/Login'
import Home from './components/Login Form/Home'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {

  const Stack = createNativeStackNavigator();

  // return (
  //   <View>
  //     {/* <HelloWorld /> */}
  //     {/* <MakeStyles /> */}
  //     {/* <JSXVariables /> */}
  //     {/* <FlatListDemo /> */}
  //     {/* <Hori_Verti_Flatlist /> */}
  //     {/* <ImagesFile /> */}
  //     {/* <ButtonDemo /> */}
  //     {/* <TouchableOpacityDemo /> */}
  //     {/* <PropsParent /> */}
  //     {/* <Netflix_Card /> */}
  //     {/* <GoogleFonts /> */}
  //     {/* <MultiStyle /> */}
  //     {/* <NetflixScrollingEffects /> */}
  //     {/* <CounterApp /> */}
  //     {/* <RandomColorGenerator /> */}
  //     {/* <RestAPI /> */}
  //     <Login />
  //     <StatusBar style="auto" />
  //   </View>
  // );
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Home' component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
