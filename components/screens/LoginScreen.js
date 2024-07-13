import React, { useState } from 'react';
import { View, Text,Modal, TextInput,TouchableHighlight, TouchableOpacity, StyleSheet, useColorScheme, Alert } from 'react-native';
import {darkStyles,lightStyles} from '../styles/loginstyles'
import {global_styles} from '../styles/global_styles'

const LoginScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const colorScheme = useColorScheme();
  const currentStyles = colorScheme === 'dark' ? darkStyles : lightStyles;
  

  const handleSendOtp = () => {
    let message = '';

    if (phoneNumber === "") {
      message = 'Please input your phone number';
    } else if (phoneNumber.length !== 10) {
      message = 'Invalid number, please enter a valid 10-digit phone number';
    } else {
      navigation.navigate('Otp', { phoneNumber });
      return; // Navigate away if conditions are met
    }

    Alert.alert(
      'Error',
      message,
      [
        { text: 'OK', onPress: () => console.log('OK Pressed') }
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={currentStyles.container}>
      <View style={currentStyles.card}>
        <Text style={currentStyles.cardTitle}>Sportinet</Text>
        <View style={currentStyles.content}>
          <TextInput
            style={[currentStyles.input, { color: colorScheme === 'dark' ? '#fff' : '#000' }]}
            placeholderTextColor="#999"
            placeholder="Phone number"
            keyboardType="phone-pad"
            value={phoneNumber}
            maxLength={10}
            onChangeText={setPhoneNumber}
            autoFocus={true}
          />
          <TouchableOpacity
            style={currentStyles.button}
            onPress={handleSendOtp}
          >
            <Text style={currentStyles.buttonText}>Send OTP</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};


export default LoginScreen;
