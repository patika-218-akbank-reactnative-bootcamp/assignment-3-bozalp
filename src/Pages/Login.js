import React, { useContext, useEffect, useState } from 'react';
import { Text, View, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import ThemeContext from '../Context/ThemeContext';
import UserContext from '../Context/UserContext';

import { Picker } from '@react-native-picker/picker';
import TextBox from '../Components/TextBox';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ navigation }) => {
    

    const { theme } = useContext(ThemeContext);
    const { user, setUser } = useContext(UserContext);

    const [phoneNumber, setPhoneNumber] = useState(null);
    const [firstName, setfirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [userName, setUserName] = useState(null);
    const [countryCode, setSelectedCountry] = useState("90");
    
  /*  const getTheme = async () => {
        const value = await AsyncStorage.getItem('theme');
        setTheme(value === null || value === 'light' ? lightTheme : darkTheme);
        Alert.alert(value);
        //setTheme(value === 'dark' ? darkTheme : lightTheme);
      };

      useEffect(() => {
        setTimeout(() => {
            getTheme();
            Alert.alert("fffff");
          }, 200);
          }, []);*/

    function SaveAndGoNextPage() {
        const newUser = [
            user.countryCode = countryCode,
            user.phoneNumber = phoneNumber,
            user.firstName = firstName,
            user.lastName = lastName,
            user.userName = userName
        ]
        setUser(newUser);
        navigation.navigate("MainPage");
    }

    return (
        <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
            <Text style={[styles.header, { color: theme.color }]}>Telegram</Text>
            <View style={{ margin: 10, }}>
                <Text style={{ color: theme.color, paddingBottom: 30 }}>Login</Text>
                <View style={styles.phone_number_area}>
                    <Picker
                        style={{ width: '40%', }}
                        mode={'dropdown'}
                        selectedValue={countryCode}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedCountry(itemValue)
                        }>
                        <Picker.Item label="+90" value="90"
                            style={{ backgroundColor: theme.backgroundColor, color: theme.color, width: '20%' }} />
                        <Picker.Item label="1" value="1" />
                    </Picker>
                    <View style={{ width: '60%' }}>
                        <TextBox title="Phone Number" value={phoneNumber}
                            onChangeText={text => setPhoneNumber(text)} numeric={true} />
                    </View>
                </View>
                <TextBox title="First Name" value={firstName} onChangeText={setfirstName} />
                <TextBox title="Last Name" value={lastName} onChangeText={setLastName} />
                <TextBox title="User Name" value={userName} onChangeText={setUserName} />
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={[styles.button, { borderColor: theme.color, backgroundColor: '#19c790' }]}
                    onPress={() => SaveAndGoNextPage()}>
                    <Text style={{ color: theme.color, textAlign: 'center' }}>
                        Login
                    </Text>
                </TouchableOpacity>
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
        },
        button:
        {
            borderWidth: 1,
            borderRadius: 5,
            marginTop: 20,
            height: 50,
            width: '80%',
            justifyContent: 'center',
            alignSelf: 'center'
        }
    }
);
export default Login;
