# SupplyWigman

SupplyWigman is a mobile app designed to streamline the inventory process in the Air Force by automating the Req ID matching with the inventory Excel sheet. The app uses the phone's camera to scan the Req ID printed on the paperwork, then matches it with the corresponding Req ID in the Excel sheet, and crosses it out. This reduces manual effort and minimizes the risk of human error.

## Features

- Scan Req IDs using the phone's camera (OCR)
- Match scanned Req IDs with the ones listed in the Excel sheet
- Update the Excel sheet to mark the matched Req ID as processed
- Compatible with React Native

## Tech Stack

- [React Native](https://reactnative.dev/) - A framework for building native mobile apps using JavaScript and React
- [GoogleVisionAPI](https://cloud.google.com/vision/docs/ocr/) - Optical Character Recognition (OCR) library to extract Req IDs from images
- [xlsx](https://github.com/SheetJS/sheetjs) - A library to parse, read, and update Excel files in JavaScript
- [react-native-camera](https://github.com/react-native-camera/react-native-camera) - A comprehensive camera module for React Native

## Installation

To get started with SupplyWigman, first ensure that you have [Node.js](https://nodejs.org/) and [React Native CLI](https://www.npmjs.com/package/react-native-cli) installed.

```
Clone the repository:
git clone https://github.com/your_username/SupplyWigman.git
cd SupplyWigman

Install the dependencies:
npm install

## Running the App
To run the app on an iOS device or simulator:
npx react-native run-ios

To run the app on an Android device or emulator:
npx react-native run-android
```

## Usage

- Open the app on your device or simulator
- Point the camera towards the Req ID on the paperwork (e.g., 56FW-123456)
- Press the "Capture Req ID" button to capture the image
- The app will recognize the Req ID and match it with the corresponding entry in the Excel inventory sheet
- The matched Req ID will be marked as processed in the Excel sheet

## Contributing

Contributions are welcome! Please read our contributing guidelines for details on how to submit pull requests, report bugs, and suggest new features.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
