import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const CustomButton = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{ ...styles.appButtonContainer, ...props.style }}
    >
      {props.children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  appButtonContainer: {
    backgroundColor: "#fff",
    borderRadius: 50,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    width: "70%",
  },
});

export default CustomButton;
