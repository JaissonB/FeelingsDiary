import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../pages/Login';
import CrudAnnotation from '../pages/CrudAnnotation';
import RoutesDrawer from './RoutesDrawer';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return <>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="RoutesDrawer" component={RoutesDrawer} />
        <Stack.Screen name="CrudAnnotation" component={CrudAnnotation}
          options={{
            headerShown: true,
            headerTitleAlign: 'center',
            title: "Anotação",
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: "#5AB4FF",
            },
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  </>
}

export default Routes;