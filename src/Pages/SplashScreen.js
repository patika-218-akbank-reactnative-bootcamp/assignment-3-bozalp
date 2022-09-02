import React, { useEffect } from 'react';
import { Text, View, Image } from 'react-native';

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Login");
        }, 3000);
    }, []
    );

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems:'center' }}>
            <Image source={require('../images/telegram-logo.png')}
                style={{
                    width: 128, height: 128,
                }} />
        </View>
    )
};

export default SplashScreen;
