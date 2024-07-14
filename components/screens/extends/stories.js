// components/StoryItem.js

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const StoryItem = ({ username, imageUrl }) => {
  return (
    <View style={styles.container}>
      <View style={styles.outerContainer}>
        <View style={styles.imageContainer}>
          <View style={styles.innerRing}></View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
        </View>
      </View>
      <Text style={styles.username}>{username}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 25,
  },
  outerContainer: {
    width: 75,
    height: 75,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: '#108c00',
    borderRadius: 38,
  },
  imageContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    overflow: 'hidden',
    backgroundColor: '#108c00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerRing: {
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#000',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 30,
  },
  username: {
    fontSize: 12,
    marginTop: 5,
  },
});

export default StoryItem;
