import React from "react";
import { View, Text, Linking, StyleSheet, Image, TouchableOpacity } from "react-native";

const City = ({ link, imageUri, }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUri }} style={styles.image} />
        <TouchableOpacity onPress={() => Linking.openURL(link)} style={styles.button}>
        <Text style={styles.buttonText}>click here to view Website</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 500,
    height: 400,
    borderRadius: 10,
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 25,   
  },
  button: {
    width: "100%",
  },
});

export default City;