import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../pages/Login';
// import ListingAnnotation from '../pages/ListingAnnotation';
import RoutesDrawer from './RoutesDrawer';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return <>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="RoutesDrawer" component={RoutesDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
  </>
}

export default Routes;