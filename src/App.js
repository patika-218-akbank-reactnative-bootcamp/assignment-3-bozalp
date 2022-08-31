/**
 * Batuhan OZALP
 * https://github.com/bozalp
 *
 */
import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

import Login from './Pages/Login';
import MainPage from './Pages/MainPage';
import MessagePage from './Pages/MessagePage';

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}  options={{
        headerShown: false
      }}/>
        <Stack.Screen name="MainPage" component={MainPage} options={{
        headerShown: false
      }}/>
        <Stack.Screen name="MessagePage" component={MessagePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
