import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const SignUpButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.appButtonContainer}>
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  appButtonContainer: {
    justifyContent: "flex-end",
    alignItems: "center",
    borderBottomWidth: 3,
    borderBottomColor: "white",
    paddingBottom: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
});

export default SignUpButton;
