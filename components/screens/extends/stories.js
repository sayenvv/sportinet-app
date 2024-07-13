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
    marginTop: 10, // Adjusted to marginTop for spacing
  },
  outerContainer: {
    width: 75, // Adjusted to accommodate the outer border
    height: 75, // Adjusted to accommodate the outer border
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: '#108c00', // White color for the outer border
    borderRadius: 38, // Half of width/height for the circular shape
  },
  imageContainer: {
    width: 60,
    height: 60,
    borderRadius: 35, // Half of width/height for a circular shape
    overflow: 'hidden', // Clip the image to the rounded border
    backgroundColor: '#108c00', // Green color for the inner border
    alignItems: 'center', // Center content horizontally
    justifyContent: 'center', // Center content vertically
  },
  innerRing: {
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 28, // Half of width/height for the inner ring
    borderWidth: 2,
    borderColor: '#000', // White color for the inner ring
  },
  image: {
    width: '100%', // Take up entire space inside imageContainer
    height: '100%', // Take up entire space inside imageContainer
    borderRadius: 35,
  },
  username: {
    fontSize: 12,
    marginTop: 5, // Adjust spacing between image and username
  },
});

export default StoryItem;
