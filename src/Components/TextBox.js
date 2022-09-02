import React, { useContext } from 'react';
import { Text, View, TextInput } from 'react-native';
import ThemeContext from '../Context/ThemeContext';

const TextBox = ({ title, value, onChangeText, numeric }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <TextInput
            style={{
                backgroundColor: theme.grayBackground, color: theme.color,
                borderRadius: 5, marginBottom: 10, borderColor: theme.color, borderWidth: 1
            }}
            onChangeText={onChangeText}
            value={value}
            placeholder={title}
            placeholderTextColor={theme.color}
            keyboardType={numeric ? "numeric" : null}
        />
    );
}

export default TextBox;
