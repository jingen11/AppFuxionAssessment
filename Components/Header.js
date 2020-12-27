import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import Colors from "../constants/Colors";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <LinearGradient
        colors={[Colors.primaryColor, Colors.secondaryColor]}
        style={styles.linearGradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.headerItem}>{props.children}</View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    height: 100,
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
    paddingBottom: 10,
  },
  headerItem: {
    width: "70%",
    justifyContent: "center",
    alignItems: "stretch",
  },
});

export default Header;
