import React, { useState,useEffect, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, useColorScheme, Alert } from 'react-native';
import {global_styles} from '../styles/global_styles'
import { darkStyles,lightStyles } from '../styles/OtpStyles';

const OtpScreen = ({ navigation }) => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const textInputRefs = useRef([]);
  const colorSchema = useColorScheme();
  const currentStyles = colorSchema === 'dark' ? darkStyles : lightStyles;

  const handleInputChange = (index, value) => {
    // Ensure only numbers are entered
    if (/^\d+$/.test(value) || value === '') {
      let newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Automatically move to the next input
      if (index < 5 && value !== '') {
        textInputRefs.current[index + 1]?.focus();
      }
    }

    // Handle backspace
    if (value === '' && index > 0) {
      let newOtp = [...otp];
      newOtp[index - 1] = '';
      setOtp(newOtp);
      textInputRefs.current[index - 1]?.focus();
    }
  };

  const handleResendOtp = () => {
    // Implement your resend OTP logic here
    console.log('Resend OTP');
  };

  const verifyotp = () => {
    const otp_ = otp.join('');
    if (otp_.length != 6){
      Alert.alert(
        'Error',
        "Otp you had entered is invalid",
        [
          { text: 'OK', onPress: () => console.log('OK Pressed') }
        ],
        { cancelable: false }
      );
    }else{
      alert("success")
    }
  }
  let timer = 0
  const handleInputKeyPress = (index, event) => {
    // Handle backspace press manually
    if (event.nativeEvent.key === 'Backspace' && index > 0) {
      let newOtp = [...otp];
      newOtp[index - 1] = '';
      setOtp(newOtp);
      textInputRefs.current[index - 1]?.focus();
    }
  };
  const [seconds, setSeconds] = useState(30);

  useEffect(() => {
    let timer = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds - 1);
    }, 1000); // Update every second

    // Clear the interval when component unmounts or when timer reaches 0
    return () => {
      clearInterval(timer);
    };
  }, []);

  // Reset the timer if seconds reach 0
  useEffect(() => {
    if (seconds === 0) {
      // Perform any action when countdown is over
      clearInterval(timer); // Clear the interval here
    }
  }, [seconds]);

  // Format seconds to mm:ss format
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };
  

  return (
    <View style={currentStyles.container}>
      <View style={currentStyles.card}>
        <Text style={currentStyles.cardTitle}>Sportinet</Text>
        <View style={currentStyles.otpContainer}>
          {otp.map((value, index) => (
            <TextInput
              key={index}
              ref={(ref) => (textInputRefs.current[index] = ref)}
              style={currentStyles.input}
              keyboardType="numeric"
              maxLength={1}
              onChangeText={(text) => handleInputChange(index, text)}
              onKeyPress={(event) => handleInputKeyPress(index, event)}
              value={value}
            />
          ))}
          
        </View>
        <View>

        <TouchableOpacity
            style={global_styles.button}
            onPress={verifyotp}
          >
            <Text style={global_styles.buttonText}>Verify OTP</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={currentStyles.resendButton} onPress={handleResendOtp}>
          <Text style={currentStyles.resendButtonText}>Resend OTP {seconds > 0 && <Text>in {formatTime(seconds)}</Text>}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


export default OtpScreen;
