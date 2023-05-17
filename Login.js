import React from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";


export default function App() {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Login</Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email Address</Text>
          <TextInput style={styles.input} placeholder="Enter your email" />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.passwordInputContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Enter your password"
              secureTextEntry={true}
            />
            <MaterialIcons name="visibility" size={24} color="gray" />
          </View>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.forgotPasswordContainer}>
          <TouchableOpacity>
            <Text style={styles.forgotPasswordText}>Forgot Password</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.createAccountContainer_1}>
          <Text style={styles.createAccountText}>Don't have an account?</Text>
        </View>
        <View style={styles.createAccountContainer_2}>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={styles.createAccountButton}>Create Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: "white",
    marginHorizontal: 10,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    paddingTop: 50,
    paddingBottom: 20,
  },
  headerText: {
    fontSize: 32,
    fontWeight: "bold",
    fontFamily: "Futura",
    marginBottom: 40, // Add more bottom margin
  },
  inputContainer: {
    paddingBottom: 20,
  },
  label: {
    fontSize: 18,
    paddingBottom: 10,
    fontFamily: "Futura",
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: "#7B1113",
    fontSize: 16,
    fontFamily: "OpenSans",
  },
  passwordInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#7B1113",
  },
  passwordInput: {
    flex: 1,
    fontSize: 16,
    fontFamily: "OpenSans",
  },
  button: {
    backgroundColor: "#003314",
    padding: 12,
    borderRadius: 4,
    marginTop: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    fontFamily: "Futura",
  },
  forgotPassword: {
    marginTop: 20,
    alignSelf: "flex-end",
  },
  forgotPasswordText: {
    color: "#7B1113",
    textDecorationLine: "underline",
  },
  forgotPasswordContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  forgotPasswordText: {
    color: "#003314",
    textDecorationLine: "none",
    fontSize: 16,
    fontFamily: "Futura",
  },
  createAccountContainer_1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 150,
  },
  createAccountContainer_2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 0,
  },
  createAccountText: {
    fontSize: 16,
    fontFamily: "Futura",
  },
  createAccountLink: {
    marginLeft: 5,
    color: "#003314",
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
  createAccountButton: {
    marginLeft: 5,
    color: "#003314",
    textDecorationLine: "none",
    fontWeight: "bold",
    fontSize: 16,
    fontFamily: "Futura",
  },
});
