import React, { useState } from "react";
import { Button, Overlay, Icon } from "@rneui/themed";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import Check from "react-native-vector-icons/AntDesign";

const FormSuccess = (props) => {
  return props.successMessage ? (
    <Overlay
      overlayStyle={styles.overlay}
      isVisible={true}
      onBackdropPress={() => props.close("")}
    >
      <Check name="checkcircle" size={80} color={"#07f223"} />
      <Text style={styles.checkMessage}>{props.successMessage}</Text>
    </Overlay>
  ) : (
    <Overlay overlayStyle={styles.overlay} isVisible={true}>
      <ActivityIndicator size="large" color="#00ff00" />
    </Overlay>
  );
};

export default FormSuccess;

const styles = StyleSheet.create({
  overlay: {
    width: "90%",
    height: 320,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  checkMessage: {
    fontSize: 20,
    marginTop: 20,
    textAlign: "center",
  },
});
