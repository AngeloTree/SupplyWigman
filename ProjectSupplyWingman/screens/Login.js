import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const Login = ({ navigation }) => {
  function navigate(screen) {
    navigation.navigate(screen);
  }

  return (
    <View style={styles.container}>
      <Image style={styles.dogImg} source={require("../assets/topdog.png")} />
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigate("SignIn")}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigate("SignUp")}
      >
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
      <View style={styles.footer}>
        <Text style={styles.footerText}>SupplyWingman&#174; 2023</Text>
        <StatusBar style="auto" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  dogImg: {
    width: "50%",
    height: "30%",
    resizeMode: "contain",
  },
  buttonStyle: {
    backgroundColor: "#facf0f",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: "#121211",
    fontWeight: "bold",
    fontSize: 16,
  },
  footer: {
    marginTop: "50%",
  },
  footerText: {
    fontSize: 13,
    color: "#777",
    textAlign: "center",
  },
});

export default Login;
