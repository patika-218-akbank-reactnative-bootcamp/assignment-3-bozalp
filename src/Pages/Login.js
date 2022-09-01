import React, { useContext, useEffect, useState } from 'react';
import { Text, View, StyleSheet, Button, TextInput } from 'react-native';
import ThemeContext from '../Context/ThemeContext';


const Login = ({ navigation }) => {

    const { theme } = useContext(ThemeContext);
    function onChangeNumber() {

    }
    const [number, setNumber] = useState(null);

    return (
        <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
            <Text style={[styles.header, { color: theme.color }]}>Telegram</Text>
            <View style={{ margin: 10, }}>
                <Text style={{ color: theme.color, paddingBottom: 20 }}>Login</Text>
                <View style={styles.phone_number_area}>
                    <Text style={{ color: theme.color, width: '20%' }}>
                        +90
                    </Text>
                    <View style={{ width: '80%' }}>
                        <TextInput
                            style={{
                                backgroundColor: theme.color, color: theme.backgroundColor,
                                borderRadius: 5,
                            }}
                            onChangeText={onChangeNumber}
                            value={number}
                            placeholder="Phone Number"
                            placeholderTextColor={theme.backgroundColor}
                            keyboardType="numeric"
                        />
                    </View>
                </View>
                <TextInput
                    style={{
                        backgroundColor: theme.color, color: theme.backgroundColor,
                        borderRadius: 5, marginBottom: 20,
                    }}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="First Name"
                    placeholderTextColor={theme.backgroundColor}
                />
                <TextInput
                    style={{
                        backgroundColor: theme.color, color: theme.backgroundColor,
                        borderRadius: 5, marginBottom: 20,
                    }}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="Last Name"
                    placeholderTextColor={theme.backgroundColor}
                />
                <TextInput
                    style={{
                        backgroundColor: theme.color, color: theme.backgroundColor,
                        borderRadius: 5, marginBottom: 20,
                    }}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="User Name"
                    placeholderTextColor={theme.backgroundColor}
                />
                <Button title="Login" onPress={() =>
                    navigation.navigate("MainPage")} />
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
            paddingBottom: 50,
        },
        phone_number_area:
        {
            flexDirection: 'row',
            paddingBottom: 20
        }
    }
);
export default Login;
