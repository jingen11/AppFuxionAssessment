import React from "react";
import { View, StyleSheet, Text } from "react-native";

const MoreScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>More Screen.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MoreScreen;
