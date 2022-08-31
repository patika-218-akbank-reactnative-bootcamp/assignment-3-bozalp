import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const Messages = ({ navigation }) => {

    function goToMessagePage() {
        navigation.navigate("MessagePage", {
            username: "Ali"
        });
    }

    return (
        <View>
            <Text>Messages</Text>
            <Button title="Mesaja git" onPress={goToMessagePage} />
        </View>
    );
}

const styles = StyleSheet.create(
    {

    }
);
export default Messages;
