import React, { useEffect, useContext, useState } from 'react';
import { Text, View, StyleSheet, Button, Alert, TextInput, TouchableOpacity } from 'react-native';
import ThemeContext from '../Context/ThemeContext';

const MessagePage = ({ navigation, route }) => {
    const { id, userName } = route.params;
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        navigation.setOptions(
            {
                title: userName,
            }
        );
    }, [navigation]);

    const { newMessage, setMessage } = useState(null);

    return (
        <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
            <View style={styles.inner}>
                <View style={styles.textbox_area}>
                    <TextInput
                        style={[styles.textbox, { backgroundColor: theme.grayBackground, color: theme.color, borderColor: theme.color, }]}
                        onChangeText={setMessage}
                        value={newMessage}
                        placeholder="Message"
                        placeholderTextColor={theme.color}
                    />
                    <TouchableOpacity style={styles.send_button}>
                        <Text>Send</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create(
    {
        container:
        {
            flex: 1,
        },
        inner:
        {
            position: 'absolute',
            bottom: 0,
            width: '100%',
            padding: 10,
        },
        textbox_area:
        {
            width:'100%',
            flexDirection: 'row'
        },
        textbox:
        {
            flex:1,
            borderRadius: 5,
            marginBottom: 10,
            borderWidth: 1,
        },
        send_button:
        {
            width: 48,
            height: 48,
            borderRadius:24,
            backgroundColor: '#26a5e4',
            marginLeft:10
        }
    }
);
export default MessagePage;
