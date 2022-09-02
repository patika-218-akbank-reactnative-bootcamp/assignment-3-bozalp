import React, { useContext } from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity, Image, Alert } from 'react-native';
import ThemeContext from '../Context/ThemeContext';

import ContactList from '../JsonFiles/ContactList.json';

const Contact = ({ navigation }) => {
    const { theme, setTheme } = useContext(ThemeContext);

    function goToMessagePage(userId, _userName) {

        navigation.navigate("MessagePage", {
            id: userId,
            userName: _userName
        });
    }

    return (
        <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
            <Text style={[styles.header, { color: theme.color, paddingBottom: 30 }]}>Contact</Text>
            <FlatList
                data={ContactList}
                renderItem={({ item }) =>
                    <TouchableOpacity activeOpacity={0.7} style={styles.button_area}
                        onPress={() => goToMessagePage(item.id, item.userName)}>
                        <Image source={{ uri: item.imageUrl }} style={styles.avatar} />
                        <TouchableOpacity activeOpacity={0.7} style={styles.button}
                            onPress={() => goToMessagePage(item.id, item.userName)}>
                            <Text style={{ color: theme.color }}>{item.userName}</Text>
                        </TouchableOpacity>
                    </TouchableOpacity>
                } />
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
        button:
        {
            width: '100%',
            height: 72,
            justifyContent: 'center',
            textAlignVertical: 'center',
            paddingBottom: 10
        },
        button_area:
        {
            flex: 1,
            flexDirection: 'row',
            marginBottom: 10,
        },
        avatar:
        {
            width: 64,
            height: 64,
            borderRadius: 32,
            marginRight: 10
        },
        seperator:
        {
            width: '100%',
            borderBottomColor: 1,
            borderColor: '#ccc',
        }
    }
);
export default Contact;
