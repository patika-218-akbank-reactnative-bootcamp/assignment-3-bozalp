import React, { useEffect } from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';

const EditProfile = ({navigation, route }) => {
    const  messages = route.params;
    useEffect(() => {
        navigation.setOptions(
            {
                title: messages.username,
            }
        );
    }, [navigation]);

    return (
        <View>
            <Text>Message Page - Burada mesaj bulunur</Text>
        </View>
    );
}

const styles = StyleSheet.create(
    {

    }
);
export default EditProfile;
