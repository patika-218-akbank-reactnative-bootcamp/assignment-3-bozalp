import React, { useContext } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import ThemeContext from '../../Context/ThemeContext';
import darkTheme from '../../Themes/dark';
import lightTheme from '../../Themes/light';

const Theme = ({ navigation }) => {

    const { theme, setTheme } = useContext(ThemeContext);
    function changeTheme() {
        theme.title === 'light' ? setTheme(darkTheme) : setTheme(lightTheme);
    }
    return (
        <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
            <Text style={[styles.header, { color: theme.color }]}>Theme Setting</Text>
            <View style={styles.button}>
                <TouchableOpacity onPress={changeTheme}>
                    <Image
                        source={theme.title === 'light' ? require('../../images/darkMode.png') :
                            require('../../images/lightMode.png')
                        }
                        style={styles.button_image} />
                </TouchableOpacity>
                <Text style={{ color: theme.color, paddingTop:10 }}>
                    {theme.title === 'light' ? "Dark Mode" : "Light Mode"}
                </Text>
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
        button:
        {
            paddingTop: 40,
            alignItems: 'center'
        },
        button_image:
        {
            width: 64,
            height: 64,
        },
        header:
        {
            fontSize: 18,
            textAlign: 'center',
            fontWeight: 'bold',
        }
    }
);
export default Theme;
