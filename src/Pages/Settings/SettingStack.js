import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Settings from './Settings';
import EditProfile from './EditProfile';
import Theme from './Theme';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const MainPage = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="Theme" component={Theme} />
            <Stack.Screen name="EditProfile" component={EditProfile} />

        </Stack.Navigator>
    );
}

const styles = StyleSheet.create(
    {

    }
);
export default MainPage;
