import React, { useState, useEffect } from "react";
import * as FileSystem from "expo-file-system";
import * as ImagePicker from "expo-image-picker";
import ExitIcon from "react-native-vector-icons/Feather";
import FormDelete from "../../components/FormDelete";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import config from "../../config.json";

const API_KEY = config.apiKey;
const GOOGLE_VISION_API_URL = `https://vision.googleapis.com/v1/images:annotate?key=${API_KEY}`;

const Home = () => {
  const [reqID, setReqID] = useState("");
  const [reqIDList, setReqIDList] = useState([]);

  const deleteReq = () => {
    console.log("test");
  };

  const pickImageAndScanReqID = async () => {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.5,
      base64: true,
    });

    if (!result.cancelled) {
      const { base64 } = result;
      processImage(base64);
    }
  };

  const processImage = async (base64) => {
    const body = JSON.stringify({
      requests: [
        {
          image: { content: base64 },
          features: [{ type: "TEXT_DETECTION" }],
        },
      ],
    });

    const response = await fetch(GOOGLE_VISION_API_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body,
    });

    const { responses } = await response.json();
    const detectedText = responses[0].fullTextAnnotation.text;

    // Extract the Req ID from the recognized text using a regular expression
    const reqIDRegex = /56FW-\d+/;
    const matchedReqID = detectedText.match(reqIDRegex);

    if (matchedReqID) {
      setReqID(matchedReqID[0]);
      setReqIDList((prevList) => [...prevList, matchedReqID[0]]);
    } else {
      console.log("No Req ID found");
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={pickImageAndScanReqID}>
        <Text style={styles.buttonText}>Scan Req ID</Text>
      </TouchableOpacity>
      {reqIDList.length > 0 && (
        <View style={styles.reqIDListContainer}>
          <Text style={styles.text}>Scanned IDs:</Text>
          <ScrollView style={styles.scrollView}>
            {reqIDList.map((item) => (
              <Text style={styles.listText}>
                {item}
                {
                  <View>
                    <ExitIcon
                      name="delete"
                      style={styles.icon}
                      size={20}
                      color={"#f72b07"}
                      onPress={() => deleteReq()}
                    />
                  </View>
                }
              </Text>
            ))}
          </ScrollView>
        </View>
      )}
      <FormDelete />
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  camera: {
    flex: 1,
    width: "100%",
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "black",
  },
  button: {
    padding: 15,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    color: "black",
    marginTop: 20,
  },
  listText: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
  },
  reqIDListContainer: {
    marginTop: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e8eb98",
    borderRadius: 20,
    width: "100%",
    height: "50%",
  },
  scrollView: {
    maxHeight: "100%",
  },
  icon: {
    marginLeft: 5,
  },
});
