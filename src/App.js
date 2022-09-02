/**
 * Batuhan OZALP
 * https://github.com/bozalp
 *
 */
import React, { useContext, useState, useEffect } from 'react';
import { Alert, Text, View } from 'react-native';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

import Login from './Pages/Login';
import MainPage from './Pages/MainPage';
import MessagePage from './Pages/MessagePage';
import SplashScreen from './Pages/SplashScreen';

import ThemeContext from './Context/ThemeContext';
import lightTheme from './Themes/light';
import darkTheme from './Themes/dark';

import UserContext from './Context/UserContext';
import User from './Context/User';

import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {

  const [theme, setTheme] = useState(null);
  const themeData = {
    theme,
    setTheme
  }

  const [user, setUser] = useState(User);
  const userData = {
    user,
    setUser,
  }

  /*const setThemeStorage = async () => {
    await AsyncStorage.setItem('theme', theme === null ? 'light' : 'dark');
    Alert.alert("d");
    setTheme(theme === null || theme === 'light' ? lightTheme : darkTheme);
  };*/

  const getTheme = async () => {
    const value = await AsyncStorage.getItem('theme');
    setTheme(value === null || value === 'light' ? lightTheme : darkTheme);
  };



  useEffect(() => {
    getTheme();
  }, []);


  return (
    <ThemeContext.Provider value={themeData}>
      <UserContext.Provider value={userData}>
        <NavigationContainer>
          <Stack.Navigator>
          <Stack.Screen name="SplashScreen" component={SplashScreen} options={{
              headerShown: false
            }} />
            <Stack.Screen name="Login" component={Login} options={{
              headerShown: false
            }} />
            <Stack.Screen name="MainPage" component={MainPage} options={{
              headerShown: false
            }} />
            <Stack.Screen name="MessagePage" component={MessagePage} />
          </Stack.Navigator>
        </NavigationContainer>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
