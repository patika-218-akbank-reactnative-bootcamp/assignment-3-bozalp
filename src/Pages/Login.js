import React, { useContext, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import ThemeContext from '../Context/ThemeContext';


const Login = ({ navigation }) => {

    const {theme} = useContext(ThemeContext);


    return (
        <View style={{ backgroundColor: theme.backgroundColor, flex: 1 }}>
            <Text style={{ color: theme.color }}>Login</Text>
            <Button title="Login" onPress={() =>
                navigation.navigate("MainPage")} />
        </View>
    );
}
export default Login;
