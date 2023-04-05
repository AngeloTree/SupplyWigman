import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button, Overlay, Icon } from "@rneui/themed";

const FormError = (props) => {
  return (
    <Overlay
      overlayStyle={styles.overlay}
      isVisible={true}
      onBackdropPress={() => props.hideErrOverlay(false)}
    >
      <Text>Hello from Overlay!</Text>
    </Overlay>
  );
};

export default FormError;

const styles = StyleSheet.create({
  overlay: {
    width: "90%",
    height: 320,
  },
});
