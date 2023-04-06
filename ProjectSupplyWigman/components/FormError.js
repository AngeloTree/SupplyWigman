import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Button, Overlay, Icon } from "@rneui/themed";
import Error from "react-native-vector-icons/MaterialIcons";

const FormError = (props) => {
  return (
    <Overlay
      overlayStyle={styles.overlay}
      isVisible={true}
      onBackdropPress={() => props.hideErrOverlay(false)}
    >
      <Error
        name="error"
        style={styles.errorIcon}
        size={80}
        color={"#f2071b"}
      />
      <Text style={styles.errorMessage}>{props.err}</Text>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => props.hideErrOverlay(false)}
      >
        <Text style={styles.buttonText}>Ok</Text>
      </TouchableOpacity>
    </Overlay>
  );
};

export default FormError;

const styles = StyleSheet.create({
  overlay: {
    width: "90%",
    height: 320,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  errorIcon: {},
  errorMessage: {
    fontSize: 20,
    marginTop: 20,
  },
  buttonStyle: {
    width: "90%",
    height: 51,
    backgroundColor: "#facf0f",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#fff",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
