// App.js

import React from 'react';
import { SafeAreaView, StyleSheet,useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {darkscreenoptions,lightscreenoptions} from './components/MainStyles/MainStyles'

// Import your screens
import MainScreen from './components/MainComponents/MainScreen'

const Stack = createStackNavigator();
const App = () => {
  const colorScheme = useColorScheme();
  const currentScreenOptions = colorScheme === 'dark' ? darkscreenoptions : lightscreenoptions;
  
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={currentScreenOptions}>
          <Stack.Screen name="Main" component={MainScreen} options={{ title: 'Sportinet' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    backgroundColor: '#000', // Adjust background color as needed
  },
});

export default App;
