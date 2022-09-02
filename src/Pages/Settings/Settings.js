import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useContext } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import ThemeContext from '../../Context/ThemeContext';
import UserContext from '../../Context/UserContext';
import User from '../../Context/User';

const Settings = ({ navigation }) => {
    const { theme, setTheme } = useContext(ThemeContext);
    const { user, setUser } = useContext(UserContext);

    const LogOut = async () => {
        setUser(User);
        await AsyncStorage.setItem('user',
        JSON.stringify(
            {
                countryCode: null,
                phoneNumber: null,
                firstName: null,
                lastName: null,
                userName: null
            }
        ));
        navigation.navigate("Login");
    }

    return (
        <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
            <Text style={[styles.header, { color: theme.color }]}>Settings</Text>
            <Button title="Theme" onPress={() =>
                navigation.navigate("Theme")} />
            <Button title="Edit Profile" onPress={() =>
                navigation.navigate("EditProfile")} />
            <Button title="Logout" onPress={() => LogOut()} />
        </View>
    );
}

const styles = StyleSheet.create(
    {
        container:
        {
            flex: 1,
            padding: 10,
        },
        header:
        {
            fontSize: 18,
            textAlign: 'center',
            fontWeight: 'bold',
        }
    }
);
export default Settings;
