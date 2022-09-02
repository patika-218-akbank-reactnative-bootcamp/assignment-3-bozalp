import React, { useEffect, useContext } from 'react';
import { Text, View, Image, Alert } from 'react-native';

import UserContext from '../Context/UserContext';

import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = ({ navigation }) => {
    const { user, setUser } = useContext(UserContext);

    const getUserData = async () => {
        const value = await AsyncStorage.getItem('user')
        if (value !== null) {
            /*const newUser = [
                user.countryCode = value.countryCode,
                user.phoneNumber = value.phoneNumber,
                user.firstName = value.firstName,
                user.lastName = value.lastName,
                user.userName = value.userName
            ]
            setUser(newUser);*/
            //Alert.alert(value[0])
            navigation.navigate("MainPage");
        }
        else
            navigation.navigate("Login");
    }

    useEffect(() => {
        setTimeout(() => {
            getUserData();
            //navigation.navigate("Login");
        }, 3000);
    }, []
    );

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require('../images/telegram-logo.png')}
                style={{
                    width: 128, height: 128,
                }} />
        </View>
    )
};

export default SplashScreen;
