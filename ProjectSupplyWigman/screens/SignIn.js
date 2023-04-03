import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const SignIn = () => {
  return (
    <View style={styles.mainView}>
      <View style={styles.topView}>
        <Image style={styles.dogImg} source={require("../assets/topdog.png")} />
      </View>
      <View style={styles.bottomView}>
        <Text style={styles.heading}>Welcome {"\n"}back</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    marginTop: 40,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  topView: {
    width: "100%",
    height: "40%",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomView: {
    width: "100%",
    height: "60%",
    backgroundColor: "#facf0f",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    display: "flex",
  },
  heading: {
    color: "black",
    fontSize: 40,
    fontWeight: "bold",
    marginLeft: 30,
    marginTop: 60,
  },
  dogImg: {
    width: "50%",
    height: "50%",
    resizeMode: "contain",
  },
});

export default SignIn;
