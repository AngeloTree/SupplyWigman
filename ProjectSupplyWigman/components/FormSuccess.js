import React, { useState } from "react";
import { Button, Overlay, Icon } from "@rneui/themed";
import { View, Text, StyleSheet } from "react-native";

const FormSuccess = () => {
  return (
    <Overlay isVisible={true}>
      <Text>Hello from Overlay!</Text>
    </Overlay>
  );
};

export default FormSuccess;
