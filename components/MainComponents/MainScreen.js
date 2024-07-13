import React, { useState, useEffect } from 'react';
import { useColorScheme } from 'react-native'; // Import AsyncStorage
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import FeedsScreen from '../screens/FeedsScreen';
import PostUploadScreen from '../screens/PostUploadScreen';
import ChatScreen from '../screens/ChatScreen';
import RoomScreen from '../screens/RoomsScreen';
import { darkStyles,lightStyles } from '../MainStyles/MainStyles';

const Tab = createBottomTabNavigator();
const MainScreen = () => {
  const colorScheme = useColorScheme();
  const currentStyles = colorScheme === 'dark' ? darkStyles : lightStyles;
    return (

    <Tab.Navigator screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: currentStyles,
    })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Feeds"
        component={FeedsScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Feeds',
          tabBarIcon: ({ color, size }) => (
            <Icon name="bell" size={30}/>
          ),
        }}
      />
      <Tab.Screen
        name="Posts"
        component={PostUploadScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Posts',
          tabBarIcon: ({ color, size }) => (
            <Icon name="facebook" size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Chats"
        component={ChatScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Chats',
          tabBarBadge: 3,
          tabBarIcon: ({ color, size }) => (
            <Icon name="inbox" size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Rooms"
        component={RoomScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Rooms',
          tabBarIcon: ({ color, size }) => (
            <Icon name="film" size={30} />
          ),
        }}
      />
    </Tab.Navigator>
    )
};
  
  
export default MainScreen