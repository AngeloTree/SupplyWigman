import React, { useState } from "react";
import BackIcon from "react-native-vector-icons/Feather";
import { auth } from "../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Button, Overlay, Icon } from "@rneui/themed";
import FormError from "../components/FormError";
import FormSuccess from "../components/FormSuccess";

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";

const SignUp = ({ navigation }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [displayFormErr, setDisplayFormErr] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const [displayFormSucc, setDisplayFormSucc] = useState(false);

  function fullNameChange(value) {
    setFullName(value);
  }

  function emailChange(value) {
    setEmail(value);
  }

  function passwordChange(value) {
    setPassword(value);
  }

  function confirmPasswordChange(value) {
    setConfirmPassword(value);
  }

  function navigate(screen) {
    navigation.navigate(screen);
  }

  async function createUser() {
    console.log("auth object: ", auth);
    const result = await createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("worked");
      })
      .catch((err) => {
        setErrMessage(err.message);
        setDisplayFormErr(true);
        console.log("createUser func Error: ", err.message);
      });
  }

  const validateForm = () => {
    let formInputs = [fullName, email, password, confirmPassword];
    let passwordsMatch = password === confirmPassword;

    if (formInputs.includes("") || formInputs.includes(undefined)) {
      setDisplayFormErr(true);
      setErrMessage("Please fill in all fields");
      return;
    }

    if (!passwordsMatch) {
      setDisplayFormErr(true);
      setErrMessage("Passwords do not match");
      return;
    }

    if (passwordsMatch) return createUser();
  };

  return (
    <View style={styles.mainView}>
      <View style={styles.topView}>
        <Image style={styles.dogImg} source={require("../assets/topdog.png")} />
      </View>
      <View style={styles.bottomView}>
        <BackIcon
          name="chevron-left"
          style={styles.icon}
          size={60}
          color={"#fff"}
          onPress={() => navigate("Login")}
        />
        <Text style={styles.heading}>Create Account</Text>
        <View style={styles.formView}>
          <TextInput
            placeholder={"Full Name"}
            placeholderTextColor={"#000"}
            style={styles.textInput}
            value={fullName}
            onChangeText={fullNameChange}
          ></TextInput>
          <TextInput
            placeholder={"Email"}
            placeholderTextColor={"#000"}
            style={styles.textInput}
            value={email}
            onChangeText={emailChange}
          ></TextInput>
          <TextInput
            placeholder={"Password"}
            placeholderTextColor={"#000"}
            secureTextEntry={true}
            style={styles.textInput}
            value={password}
            onChangeText={passwordChange}
          ></TextInput>
          <TextInput
            placeholder={"Confirm Password"}
            placeholderTextColor={"#000"}
            secureTextEntry={true}
            style={styles.textInput}
            value={confirmPassword}
            onChangeText={confirmPasswordChange}
          ></TextInput>
          <TouchableOpacity onPress={validateForm} style={styles.buttonStyle}>
            <Text style={styles.buttonText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
      {displayFormErr == true ? (
        <FormError hideErrOverlay={setDisplayFormErr} err={errMessage} />
      ) : null}
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
    height: "20%",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomView: {
    width: "100%",
    height: "80%",
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
    marginTop: 10,
  },
  icon: {
    marginLeft: 5,
    marginTop: 10,
  },
  dogImg: {
    width: "50%",
    height: "80%",
    resizeMode: "contain",
  },
  formView: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 30,
  },
  textInput: {
    width: "90%",
    height: 52,
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 10,
    paddingLeft: 5,
    marginTop: 20,
  },
  buttonStyle: {
    width: "90%",
    backgroundColor: "#facf0f",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#fff",
    backgroundColor: "#fff",
    marginTop: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default SignUp;
