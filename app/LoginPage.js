import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity,  View,  Alert,  StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const usernameRegex = /^.{5,}$/;  
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleSignIn = () => {
    if (!usernameRegex.test(username)) {
      Alert.alert("Invalid Username", "Username must be at least 5 characters long.");
      return;
    }
    if (!passwordRegex.test(password)) {
      Alert.alert("Invalid Password", "Password must have 8+ characters, an uppercase, a lowercase, a number, and a special character.");
      return;
    }

 
    let credentials;
    try {
      credentials = require("../credentials.json");
    } catch (error) {
      Alert.alert("Error", "Credentials file not found.");
      return;
    }

    const user = credentials.users.find((cred) => cred.username === username);

    if (!user) {
      Alert.alert("Error", "Username not found.");
      return;
    }

    if (user.password !== password) {
      Alert.alert("Error", "Incorrect password.");
      return;
    }

   
    navigation.navigate("Welcome");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f7f7f7",
    padding: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
    color: "#333",
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 100,
    marginBottom: 12,
    paddingHorizontal: 12,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 13,
    paddingHorizontal: 20,
    borderRadius: 100,
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
  },
});

export default SignIn;
