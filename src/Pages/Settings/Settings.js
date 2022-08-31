import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const Settings = ({navigation}) => {
    return (
        <View>
            <Text>Settings</Text>
            <Button title="Theme" onPress={() =>
                navigation.navigate("Theme")} />
            <Button title="Edit Profile" onPress={() =>
                navigation.navigate("EditProfile")} />
            <Button title="Logout" onPress={() =>
                navigation.navigate("Login")} />
        </View>
    );
}

const styles = StyleSheet.create(
    {

    }
);
export default Settings;
