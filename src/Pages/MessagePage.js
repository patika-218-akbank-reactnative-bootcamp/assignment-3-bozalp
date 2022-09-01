import React, { useEffect, useContext } from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import ThemeContext from '../Context/ThemeContext';

const EditProfile = ({navigation, route }) => {
    const  messages = route.params;
    const {theme} = useContext(ThemeContext);

    useEffect(() => {
        navigation.setOptions(
            {
                title: messages.username,
            }
        );
    }, [navigation]);

    return (
        <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
            <Text>Message Page - Burada mesaj bulunur</Text>
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
    }
);
export default EditProfile;
