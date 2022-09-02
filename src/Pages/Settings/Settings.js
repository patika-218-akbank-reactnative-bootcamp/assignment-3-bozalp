import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useContext } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
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
            <Text style={[styles.header, { color: theme.color, paddingBottom: 30 }]}>Settings</Text>
            <View style={{ alignItems: 'center', }}>
                <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate("Theme")}
                    style={[styles.buttons, { borderWidth: 1, borderColor: theme.color }]}>
                    <Text style={{ color: theme.color }}>
                        Theme
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate("EditProfile")}
                    style={[styles.buttons, { borderWidth: 1, borderColor: theme.color }]}>
                    <Text style={{ color: theme.color }}>
                        Edit Profile
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.7} onPress={() => LogOut()}
                    style={[styles.buttons, { borderWidth: 1, borderColor: theme.color }]}>
                    <Text style={{ color: theme.color }}>
                        Logout
                    </Text>
                </TouchableOpacity>
            </View>
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
        },
        buttons:
        {
            width: '80%',
            height: 64,
            marginBottom: 10,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
        },
    }
);
export default Settings;
