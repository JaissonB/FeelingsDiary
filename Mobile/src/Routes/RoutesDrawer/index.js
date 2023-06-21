import React from 'react';
import { Pressable, Alert } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import ListingAnnotation from "../../pages/ListingAnnotation";
import AntDesign from "react-native-vector-icons/AntDesign";
import Configuration from '../../pages/Configuration';

const Drawer = createDrawerNavigator();

const ScreenExit = () => {
  return <>
    <Pressable
      onPress={Alert.alert('Implementar Log out')}
    >
    </Pressable>
  </>
}

const RoutesDrawer = () => {

  return <>
    <Drawer.Navigator
      screenOptions={
        {
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#5AB4FF'
          },
          drawerType: "front",
          drawerInactiveTintColor: "#FFFFFF",
          drawerActiveTintColor: "#FFFFFF",
          drawerStyle: {
            backgroundColor: "#5AB4FF",
            width: "70%",
          },
          drawerLabelStyle: { fontSize: 17, fontWeight: "bold" }
        }
      }
    >
      <Drawer.Screen name="ListingAnnotation" component={ListingAnnotation}
        options={{
          title: "Anotações",
          drawerIcon: () => {
            <AntDesign name="dashboard" size={20} color="#FFFFFF" />
          }
        }}
      />

      <Drawer.Screen name="Configuration" component={Configuration}
        options={{
          title: "Configurações",
          drawerIcon: () => {
            <AntDesign name="dashboard" size={20} color="#FFFFFF" />
          }
        }}
      />

      <Drawer.Screen name="ScreenExit" component={ScreenExit}
        options={{
          title: "Sair",
          drawerIcon: () => {
            <AntDesign name="dashboard" size={20} color="#FFFFFF" />
          }
        }}
      />

    </Drawer.Navigator >
  </>
}

export default RoutesDrawer;
