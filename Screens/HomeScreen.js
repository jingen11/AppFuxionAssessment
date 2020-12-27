import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import CustomButton from "../Components/CustomButton";
import SignUpButton from "../Components/SignUpButton";

import Colors from "../constants/Colors";

const HomeScreen = (props) => {
  return (
    <View style={styles.screen}>
      <LinearGradient
        colors={[Colors.primaryColor, Colors.secondaryColor]}
        style={styles.linearGradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.titleNIcon}>
          <Text style={styles.appName}>ONLINE FURNITURE STORE</Text>
          <MaterialCommunityIcons name="sofa" size={200} color="white" />
        </View>
        <View style={styles.start}>
          <View style={styles.startButton}>
            <CustomButton
              onPress={() => {
                //props.onlogIn();
                props.navigation.navigate("Login", {
                  isLogin: true,
                });
              }}
            >
              <Text style={styles.buttonText}>GET STARTED</Text>
            </CustomButton>
          </View>
          <View>
            <Text style={styles.signupText}>Don't have an account?</Text>
          </View>
          <SignUpButton
            onPress={() => {
              //props.onSignUp();
              props.navigation.navigate("Login", {
                isLogin: false,
              });
            }}
            title="Sign Up Here"
          />
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titleNIcon: {
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    flex: 3,
  },
  appName: {
    fontSize: 30,
    width: "80%",
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
  },
  start: {
    width: "80%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 60,
    flex: 1,
  },
  startButton: {
    fontSize: 40,
  },
  signupText: {
    color: "#fff",
    fontSize: 20,
  },
  startButton: {
    flex: 1,
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: Colors.textColorSecondary,
    fontSize: 25,
    fontWeight: "bold",
  },
});

export default HomeScreen;
