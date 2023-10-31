import { FlatList } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button, Image } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { Camera } from 'expo-camera';
import { shareAsync } from 'expo-sharing';
import * as MediaLibrary from 'expo-media-library';

// Define an array of image URLs for the gallery
const galleryImages = [
  'https://example.com/image1.jpg',
  'https://example.com/image2.jpg',
  // Add more image URLs here
];

export default function App() {
  // Your existing code here

  // ...

  return (
    <SafeAreaView style={styles.container}>
      {photo ? (
        // Display the photo
        <View style={styles.imageContainer}>
          <Image style={styles.preview} source={{ uri: photo.uri }} />
          <Button title="Share" onPress={sharePic} />
          {hasMediaLibraryPermission ? <Button title="Save" onPress={savePhoto} /> : null}
          <Button title="Discard" onPress={() => setPhoto(null)} />
        </View>
      ) : (
        // Display the gallery
        <FlatList
          data={galleryImages}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Image style={styles.galleryImage} source={{ uri: item }} />
          )}
        />
      )}
    </SafeAreaView>
  );
}
