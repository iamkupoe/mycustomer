import React from "react";
import { StyleSheet, Text, View } from "react-native";
import StartScreen from "./src/components/screens/StartScreen";
import LoginScreen from "./src/components/screens/LoginScreen";

export default function App() {
  return (
    <View style={styles.container}>
      {/*<StartScreen />*/}
      <LoginScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //alignItems: "center",
    justifyContent: "center",
  },
});
