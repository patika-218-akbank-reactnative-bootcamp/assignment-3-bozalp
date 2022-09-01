import React, { useContext } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import ThemeContext from '../../Context/ThemeContext';

const Settings = ({ navigation }) => {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
            <Text style={[styles.header, { color: theme.color }]}>Settings</Text>
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
