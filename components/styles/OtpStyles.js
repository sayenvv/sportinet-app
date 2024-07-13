import {StyleSheet } from 'react-native';


export const darkStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000', // Black background color for the body
      justifyContent: 'center',
      alignItems: 'center',
    },
    card: {
      backgroundColor: '#000',
      padding: 30,
      shadowColor: '#000',
      width: '90%', // Adjust card width as needed
      height:'50%'
    },
    cardTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
      textAlign:'center',
      color:'#125625'
    },
    otpContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 20,
    },
    input: {
      borderWidth: 1,
      borderColor: '#555',
      color:'#ffff',
      padding: 10,
      marginTop:40,
      borderRadius: 10,
      marginBottom:20,
      width: '15%', // Adjust input width as needed
      textAlign: 'center',
      fontSize: 20,
    },
    resendButton: {
      alignSelf: 'center',
      marginTop: 20,
    },
    resendButtonText: {
      fontSize: 16,
      color: '#007BFF', // Blue text color for resend button
    },
    
  });

export const lightStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff', // Black background color for the body
      justifyContent: 'center',
      alignItems: 'center',
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: 15,
      padding: 30,
      width: '90%', // Adjust card width as needed
      height:'50%'
    },
    cardTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
      color:'#125625',
      textAlign:'center'
    },
    otpContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 20,
    },
    input: {
      borderWidth: 1,
      borderColor: '#1e1e1e',
      color:'#1e1e1e',
      padding: 10,
      borderRadius: 10,
      marginTop:40,
      marginBottom: 20,
      width: '15%', // Adjust input width as needed
      textAlign: 'center',
      fontSize: 18,
    },
    resendButton: {
      alignSelf: 'center',
      marginTop: 20,
    },
    resendButtonText: {
      fontSize: 16,
      color: '#007BFF', // Blue text color for resend button
    },
    
  });

