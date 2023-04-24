import React, { useState } from "react";
import { Button, Overlay, Icon } from "@rneui/themed";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  TextInput,
} from "react-native";
import BackIcon from "react-native-vector-icons/Feather";

const FormDelete = (props) => {
  const [reqID, setReqID] = useState("");

  const saveReq = (newReqID) => {
    const index = props.reqList.findIndex(
      (id) => id.toString() === props.selectedID.toString()
    );
    console.log(props.reqList);
    console.log("selectID:", props.selectedID);
    if (index >= 0) {
      const updatedReqIDList = [...props.reqList];
      updatedReqIDList[index] = newReqID;
      props.setReqIDListState(updatedReqIDList);
      console.log("save req");
    }
  };
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
      <View style={styles.deleteReqContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Delete Req</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          value={reqID}
          onChangeText={(text) => setReqID(text)}
          placeholder="Edit Req"
          placeholderTextColor="#918c8c"
        />
      </View>
      <TouchableOpacity
        style={styles.saveButton}
        onPress={() => saveReq(reqID)}
      >
        <Text style={styles.buttonText}>Save</Text>
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
    flexDirection: "column",
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
  input: {
    width: "40%",
    height: 50,
    borderColor: "#918c8c",
    borderWidth: 1,
    color: "black",
    textAlign: "center",
    borderRadius: 10,
    marginLeft: 10,
  },
  deleteReqContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  saveButton: {
    padding: 15,
    backgroundColor: "#48f03c",
    borderRadius: 10,
    marginTop: 10,
  },
});
