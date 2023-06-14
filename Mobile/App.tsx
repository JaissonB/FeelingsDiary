import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/pages/Login';
import ListingAnnotation from './src/pages/ListingAnnotation';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {

  return <>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListingAnnotation" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ListingAnnotation" component={ListingAnnotation} />
      </Stack.Navigator>
    </NavigationContainer>
  </>
}

export default App;
