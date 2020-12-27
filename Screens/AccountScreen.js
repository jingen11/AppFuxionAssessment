import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons, Entypo, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import Header from "../Components/Header";
import Colors from "../constants/Colors";

const AccountScreen = (props) => {
  const user = props.navigation.getParam("user");
  let userImagePath;
  if (user.name == "Ronaldo") {
    userImagePath = require("../assets/ronaldo.jpg");
  } else if (user.name == "Messi") {
    userImagePath = require("../assets/messi.jpg");
  } else {
    userImagePath = require("../assets/husky.jpg");
  }
  return (
    <View style={styles.screen}>
      <Header />
      <View style={styles.content}>
        <View style={styles.imageSection}>
          <View style={styles.imageContainer}>
            <Image
              source={userImagePath}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
          <Text style={styles.name}>{user.name}</Text>
          <View style={styles.location}>
            <Entypo name="location-pin" size={24} color="red" />
            <Text style={styles.locationText}>{user.place}</Text>
          </View>
        </View>
        <View style={styles.optionSection}>
          <View style={styles.optionContainer}>
            <Entypo name="mail" size={30} color={Colors.textColor} />
            <TouchableOpacity style={styles.optionTextContainer}>
              <Text style={styles.optionText}>Messages</Text>
              <LinearGradient
                style={styles.notification}
                colors={[Colors.primaryColor, Colors.tertiaryColor]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              >
                <Text style={styles.notificationText}>3</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <View style={styles.optionContainer}>
            <Ionicons name="notifications" size={30} color={Colors.textColor} />
            <TouchableOpacity style={styles.optionTextContainer}>
              <Text style={styles.optionText}>Notifications</Text>
              <LinearGradient
                style={styles.notification}
                colors={[Colors.primaryColor, Colors.tertiaryColor]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              >
                <Text style={styles.notificationText}>8</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <View style={styles.optionContainer}>
            <MaterialCommunityIcons
              name="account"
              size={30}
              color={Colors.textColor}
            />
            <TouchableOpacity style={styles.optionTextContainer}>
              <Text style={styles.optionText}>Accounts Details</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.optionContainer}>
            <Entypo name="shopping-cart" size={30} color={Colors.textColor} />
            <TouchableOpacity style={styles.optionTextContainer}>
              <Text style={styles.optionText}>My purchases</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.optionContainer}>
            <Ionicons
              name="settings-sharp"
              size={30}
              color={Colors.textColor}
            />
            <TouchableOpacity style={styles.optionTextContainer}>
              <Text style={styles.optionText}>Settings</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  imageSection: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    borderRadius: 75,
    borderColor: "transparent",
    width: 150,
    height: 150,
    overflow: "hidden",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  name: {
    marginTop: 10,
    fontSize: 25,
    fontWeight: "bold",
  },
  location: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  locationText: {
    fontWeight: "700",
  },
  optionSection: {
    flex: 3,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingLeft: 70,
    width: "85%",
  },
  optionContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 70,
  },
  optionTextContainer: {
    marginLeft: 30,
    borderBottomColor: Colors.textColor,
    borderBottomWidth: 3,
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  optionText: {
    fontSize: 22,
    paddingBottom: 5,
    fontWeight: "600",
  },
  notification: {
    height: 25,
    width: 25,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  notificationText: {
    color: "white",
    fontSize: 25,
    paddingHorizontal: 5,
  },
});

export default AccountScreen;
