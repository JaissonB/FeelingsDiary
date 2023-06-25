import React from 'react';
import { Pressable, Alert } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import AntDesign from "react-native-vector-icons/AntDesign";
import Configuration from '../../pages/Configuration';
import theme from '../../theme';
import ListingPatients from '../../pages/ListingPatients';

const Drawer = createDrawerNavigator();

const ScreenExit = () => {
  return <>
    <Pressable
      onPress={Alert.alert('Implementar Log out')}
    >
    </Pressable>
  </>
}

const RoutesDrawerProfessional = () => {

  return <>
    <Drawer.Navigator
      screenOptions={
        {
          headerTintColor: theme.color_white,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: theme.color_primary1
          },
          drawerType: "front",
          drawerInactiveTintColor: theme.color_white,
          drawerActiveTintColor: theme.color_white,
          drawerStyle: {
            backgroundColor: theme.color_primary1,
            width: "70%",
          },
          drawerLabelStyle: { fontSize: 17, fontWeight: "bold" }
        }
      }
    >
      <Drawer.Screen name="ListingPatients" component={ListingPatients}
        options={{
          title: "Pacientes",
          drawerIcon: () => {
            <AntDesign name="dashboard" size={20} color={theme.color_white} />
          }
        }}
      />

      <Drawer.Screen name="Configuration" component={Configuration}
        options={{
          title: "Configurações",
          drawerIcon: () => {
            <AntDesign name="dashboard" size={20} color={theme.color_white} />
          }
        }}
      />

      <Drawer.Screen name="ScreenExit" component={ScreenExit}
        options={{
          title: "Sair",
          drawerIcon: () => {
            <AntDesign name="dashboard" size={20} color={theme.color_white} />
          }
        }}
      />

    </Drawer.Navigator >
  </>
}

export default RoutesDrawerProfessional;
