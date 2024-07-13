import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import PhoneInput from 'react-native-phone-input';
import CountryPicker from 'react-native-country-picker-modal';

const PhoneNumberInput = () => {
  const [countryCode, setCountryCode] = useState('US');
  const [phoneNumber, setPhoneNumber] = useState('');
  const phoneInput = React.useRef(null);

  return (
    <View style={styles.container}>
      <PhoneInput
        ref={phoneInput}
        initialCountry={countryCode.toLowerCase()}
        onPressFlag={() => setShowCountryPicker(true)}
        textProps={{
          placeholder: 'Phone Number',
        }}
        onChangePhoneNumber={setPhoneNumber}
      />
      <CountryPicker
        withCallingCode
        withFilter
        countryCode={countryCode}
        onSelect={(country) => {
          setCountryCode(country.cca2);
          phoneInput.current.selectCountry(country.cca2.toLowerCase());
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 5,
  },
});

export default PhoneNumberInput;
