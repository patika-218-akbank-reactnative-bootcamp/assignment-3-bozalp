import React, { useContext, useEffect, useState } from 'react';
import { Text, View, StyleSheet, Button, TextInput } from 'react-native';
import ThemeContext from '../Context/ThemeContext';
import { Picker } from '@react-native-picker/picker';
import TextBox from '../Components/TextBox';

const Login = ({ navigation }) => {

    const { theme } = useContext(ThemeContext);
    function onChangeNumber() {

    }
    const [number, setNumber] = useState(null);
    const [selectedCountry, setSelectedCountry] = useState("90");

    return (
        <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
            <Text style={[styles.header, { color: theme.color }]}>Telegram</Text>
            <View style={{ margin: 10, }}>
                <Text style={{ color: theme.color, paddingBottom: 30 }}>Login</Text>
                <View style={styles.phone_number_area}>
                    <Picker 
                    style={{width: '40%', }}
                    mode={'dropdown'}
                        selectedValue={selectedCountry}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedCountry(itemValue)
                        }>
                        <Picker.Item label="+90" value="90" 
                        style={{backgroundColor:theme.backgroundColor, color: theme.color, width: '20%' }}/>
                        <Picker.Item label="1" value="1" />
                    </Picker>
                    <View style={{ width: '60%' }}>
                        <TextBox title="Phone Number" value={number} onChangeText={onChangeNumber} />
                    </View>
                </View>
                <TextBox title="First Name" value={number} onChangeText={onChangeNumber} />
                <TextBox title="Last Name" value={number} onChangeText={onChangeNumber} />
                <TextBox title="User Name" value={number} onChangeText={onChangeNumber} />
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
        }
    }
);
export default Login;
