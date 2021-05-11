import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  StatusBar,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eye: "eye-on",
      eye: "eye-Off",
      email: "",
      password: "",
      showPassword: true,
    };
  }
  changePasswordType = () => {
    let newState;
    if (this.state.showPassword) {
      newState = {
        eye: "show",
        showPassword: false,
        password: this.state.password,
      };
    } else {
      newState = {
        eye: "eye-off",
        showPassword: true,
        password: this.state.password,
      };
    }
    this.setState(newState);
  };
  render() {
    return (
      <View style={styles.Container}>
        <StatusBar barStyle="dark-content" backgroundColor="#06C8F4" />
        <View style={styles.LoginHeaderContainer}>
          <Text style={styles.loginHeaderText}>Log in</Text>
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.action}>
            <Feather name="mail" color="#fff" size={20} />
            <TextInput
              placeholder="Please Enter Your Email Here"
              keyboardType="email-address"
              value={this.state.email}
              onChangeText={(text) => {
                this.handleUpdateState("email", text);
              }}
              style={styles.textInput}
              autoCapitalize="none"
            />

            <Feather name="check-circle" color="#fff" size={20} />
          </View>

          <View style={styles.action}>
            <FontAwesome
              name="lock"
              color="#fff"
              size={30}
              style={{ paddingTop: 14 }}
            />
            <TextInput
              placeholder="Please Enter Your password Here"
              value={this.state.password}
              onChangeText={(text) => {
                this.handleUpdateState("password", text);
              }}
              secureTextEntry={this.state.showPassword}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(text) => {
                this.handleUpdateState("password", text);
              }}
            />
            <TouchableOpacity onPress={this.changePasswordType}>
              <Feather name="eye-off" color="#fff" size={20} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.opacityContainer}>
          <TouchableOpacity style={styles.logInOpacity}>
            <Text style={styles.loginText}>Log in</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.firstTimeContainer}>
          <Text style={styles.firstTimeText}>First time here?</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#2986DD",
    justifyContent: "space-around",
    paddingLeft: 20,
  },

  loginHeaderContainer: {
    flex: 1,
  },
  loginHeaderText: {
    color: "#fff",
    fontSize: 40,
    paddingLeft: 30,
  },
  inputContainer: {},
  action: {
    flexDirection: "row",
    marginTop: 10,

    // borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  opacityContainer: {
    flex: 0.4,
    flexDirection: "row",
  },
  textInput: {
    flex: 0.8,
    marginTop: Platform.OS === "ios" ? 0 : 12,
    paddingLeft: 5,
    // marginHorizontal: 10,
    color: "#0f184b",
    borderColor: "red",
    borderBottomWidth: 1,
  },
  logInOpacity: {
    width: 150,
    height: 50,
    backgroundColor: "#0E0E0F",
    marginHorizontal: 15,
    borderRadius: 10,
  },
  loginText: {
    color: "#fff",
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
