import React from "react";
import BackIcon from "react-native-vector-icons/Feather";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";

const SignIn = ({ navigation }) => {
  function navigate(screen) {
    navigation.navigate(screen);
  }
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
        <Text style={styles.heading}>Welcome {"\n"}back</Text>
        <View style={styles.formView}>
          <TextInput
            placeholder={"Email"}
            placeholderTextColor={"#000"}
            style={styles.textInput}
          ></TextInput>
          <TextInput
            placeholder={"Password"}
            placeholderTextColor={"#000"}
            secureTextEntry={true}
            style={styles.textInput}
          ></TextInput>
          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.buttonText}>Sign in</Text>
          </TouchableOpacity>
        </View>
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
    height: "70%",
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
  dogImg: {
    width: "50%",
    height: "50%",
    resizeMode: "contain",
  },
  formView: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 30,
  },
  icon: {
    marginLeft: 5,
    marginTop: 10,
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
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default SignIn;
