import React,{useContext} from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import ThemeContext from '../Context/ThemeContext';

const Messages = ({ navigation }) => {
    const { theme, setTheme } = useContext(ThemeContext);

    function goToMessagePage() {
        navigation.navigate("MessagePage", {
            username: "Ali"
        });
    }

    return (
        <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
            <Text style={[styles.header, { color: theme.color }]}>Messages</Text>
            <Text style={{ color: theme.color, paddingTop:10 }}>Burada mesajlar sıralanacak</Text>
            <Button title="Mesaja git" onPress={goToMessagePage} />
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
export default Messages;
