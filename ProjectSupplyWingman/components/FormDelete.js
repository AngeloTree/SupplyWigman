import React, { useState } from "react";
import { Button, Overlay, Icon } from "@rneui/themed";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import Check from "react-native-vector-icons/Feather";
import BackIcon from "react-native-vector-icons/Feather";

const FormDelete = (props) => {
  return (
    <Overlay
      overlayStyle={styles.overlay}
      isVisible={true}
      onBackdropPress={() => props.close("")}
    >
      <BackIcon
        name="chevron-left"
        size={60}
        color={"#918c8c"}
        style={styles.backIcon}
      />
      <Check name="check" size={60} color={"#61c449"} />
    </Overlay>
  );
};

export default FormDelete;

const styles = StyleSheet.create({
  overlay: {
    width: "90%",
    height: 320,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  backIcon: {
    position: "absolute",
    top: 10,
    left: 10,
  },
});
