import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const Login = ({ navigation }) => {
    return (
        <View>
            <Text>Login</Text>
            <Button title="Login" onPress={() => 
                navigation.navigate("MainPage")} />
        </View>
    );
}

const styles = StyleSheet.create(
    {

    }
);
export default Login;
