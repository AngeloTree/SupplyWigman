import React, { useState, useEffect } from "react";
import * as FileSystem from "expo-file-system";
import * as ImagePicker from "expo-image-picker";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import config from "../../config.json";

const API_KEY = config.apiKey;
const GOOGLE_VISION_API_URL = `https://vision.googleapis.com/v1/images:annotate?key=${API_KEY}`;

const Home = () => {
  const [reqID, setReqID] = useState("");
  const [reqIDList, setReqIDList] = useState([]);

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
      {reqID && <Text style={styles.text}>Recent: {reqID}</Text>}
      {reqIDList.length > 0 && (
        <View style={styles.reqIDListContainer}>
          <Text style={styles.text}>Scanned IDs:</Text>
          <FlatList
            data={reqIDList}
            renderItem={({ item }) => (
              <Text style={styles.listText}>{item}</Text>
            )}
            keyExtractor={(item) => item}
          />
        </View>
      )}
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "50%",
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
    marginTop: 5,
  },
  reqIDListContainer: {
    marginTop: 0,
  },
});
