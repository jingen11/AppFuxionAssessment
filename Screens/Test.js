import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import PhoneInput from "react-native-phone-input";

const Test = (props) => {
  const [valid, setValid] = useState("");
  const [type, setType] = useState("");
  const [value, setValue] = useState("");

  const updateInfo = (phone) => {
    setValid(phone.isValidNumber());
    setType(phone.getNumberType());
    setValue(phone.getValue());
  };

  const renderInfo = () => {
    if (value) {
      return (
        <View style={styles.info}>
          <Text>
            Is Valid:{" "}
            <Text style={{ fontWeight: "bold" }}>{valid.toString()}</Text>
          </Text>
          <Text>
            Type: <Text style={{ fontWeight: "bold" }}>{type}</Text>
          </Text>
          <Text>
            Value: <Text style={{ fontWeight: "bold" }}>{value}</Text>
          </Text>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <PhoneInput value="12345" />

      <TouchableOpacity onPress={updateInfo(ref)} style={styles.button}>
        <Text>Get Info</Text>
      </TouchableOpacity>

      {/* {this.renderInfo()} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    paddingTop: 60,
  },
  info: {
    // width: 200,
    borderRadius: 5,
    backgroundColor: "#f0f0f0",
    padding: 10,
    marginTop: 20,
  },
  button: {
    marginTop: 20,
    padding: 10,
  },
});

export default Test;
