import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../pages/Login';
import ListingAnnotation from '../pages/ListingAnnotation';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return <>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListingAnnotation">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />

        <Stack.Screen name="ListingAnnotation" component={ListingAnnotation}
          options={{
            title: 'Entradas',
            headerStyle: { backgroundColor: '#5AB4FF' }
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  </>
}

export default Routes;