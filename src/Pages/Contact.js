import React, { useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ThemeContext from '../Context/ThemeContext';

const Contact = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
            <Text style={[styles.header, { color: theme.color }]}>Contact</Text>
            <Text style={{ color: theme.color, paddingTop: 10 }}>Burada kişiler sıralanacak</Text>
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
export default Contact;
