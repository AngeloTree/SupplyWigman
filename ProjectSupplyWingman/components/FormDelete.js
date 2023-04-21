import React, { useState } from "react";
import { Button, Overlay, Icon } from "@rneui/themed";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import BackIcon from "react-native-vector-icons/Feather";

const FormDelete = (props) => {
  return (
    <Overlay
      overlayStyle={styles.overlay}
      isVisible={true}
      onBackdropPress={() => props.hideErrOverlay(false)}
    >
      <BackIcon
        name="chevron-left"
        size={60}
        color={"#918c8c"}
        style={styles.backIcon}
        onPress={() => props.hideErrOverlay(false)}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Delete Req</Text>
      </TouchableOpacity>
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
  buttonText: {
    fontSize: 18,
    color: "black",
  },
  button: {
    padding: 15,
    backgroundColor: "#e62222",
    borderRadius: 10,
  },
});
