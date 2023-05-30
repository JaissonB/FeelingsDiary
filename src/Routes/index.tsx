import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from '../pages/Login';
import Home from '../pages/Home';
import { SafeAreaView, ScrollView, StatusBar, Text } from 'react-native';

export type StackParamList = {
    Home: undefined;
}

const Stack = createNativeStackNavigator();

const HomeScreen = () => {
    return (
        <SafeAreaView style={{flex:1, alignItems:"center", justifyContent:"center"}} >
            <Text>HOME SCREEN</Text>
        </SafeAreaView>
    )
}

const Routes = () => {
    return (
        <Text>TESTO</Text>
        // <Stack.Navigator initialRouteName='Login'>
        //     <Stack.Screen
        //         name="Login"
        //         component={Login}
        //         options={{title: "Login"}}
        //     />
        //     <Stack.Screen
        //         name="Home"
        //         component={HomeScreen}
        //         options={{title: "Overview"}}
        //     />
        // </Stack.Navigator>
    )
}

export default Routes;