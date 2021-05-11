import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";

export default class StartScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <StatusBar barStyle="dark-content" backgroundColor="#06C8F4" />
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Keep track of your customers</Text>
        </View>

        <View style={styles.opacityContainer}>
          <TouchableOpacity style={styles.logInOpacity}>
            <Text style={styles.loginText}>Log in</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.signupOpacity}>
            <Text style={styles.signupText}>Sign up</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.getStartedContainer}>
          <Text style={styles.getStartedText}>
            Get started by Logging in or Signing up
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },

  headerContainer: {
    flex: 3,
  },
  headerText: {
    color: "#2986DD",
    paddingVertical: 200,
    fontSize: 40,
    textAlign: "center",
  },
  opacityContainer: {
    flex: 0.4,
    flexDirection: "row",
  },
  logInOpacity: {
    width: 150,
    height: 50,
    backgroundColor: "#FFC75F",
    marginHorizontal: 15,
    borderRadius: 10,
  },
  loginText: {
    color: "#003133",
    textAlign: "center",
    paddingVertical: 12,
    fontWeight: "bold",
    fontSize: 20,
  },
  signupOpacity: {
    width: 150,
    height: 50,
    backgroundColor: "#FFC75F",
    marginHorizontal: 15,
    borderRadius: 10,
  },
  signupText: {
    color: "#003133",
    textAlign: "center",
    paddingVertical: 12,
    fontWeight: "bold",
    fontSize: 20,
  },
  getStartedContainer: {
    flex: 1,
  },
  getStartedText: {
    color: "#ff0f8d",
    textAlign: "center",
    fontSize: 15,
  },
});
