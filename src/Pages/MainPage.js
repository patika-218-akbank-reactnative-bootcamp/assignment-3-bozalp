import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Messages from './Messages';
import Contact from './Contact';
import SettingStack from './Settings/SettingStack';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

import Icon from 'react-native-vector-icons/FontAwesome5';

const MainPage = () => {

    return (
        <Tab.Navigator initialRouteName="Messages">
            <Tab.Screen name="Messages" component={Messages} options={{
                headerShown: false,
                tabBarLabel: 'Messages',
                tabBarIcon: () => (
                    <Icon name='comment' solid size={24} color={'#000'} />
                ),
            }} />
            <Tab.Screen name="Contact" component={Contact} options={{
                headerShown: false,
                tabBarLabel: 'Contact',
                tabBarIcon: () => (
                    <Icon name='address-book' solid size={24} color={'#000'} />
                ),
            }} />
            <Tab.Screen name="SettingStack" component={SettingStack} options={{
                headerShown: false,
                tabBarLabel: 'Settings',
                tabBarIcon: () => (
                    <Icon name='wrench' solid size={24} color={'#000'} />
                ),
            }} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create(
    {

    }
);
export default MainPage;
