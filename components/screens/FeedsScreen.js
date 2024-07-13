// HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FeedsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Feeds Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#000'
  },
});

export default FeedsScreen;