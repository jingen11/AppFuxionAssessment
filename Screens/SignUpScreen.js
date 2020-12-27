import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import PhoneInput from "react-native-phone-input";
import Header from "../Components/Header";
import CustomButton from "../Components/CustomButton";
import Colors from "../constants/Colors";
import User from "../User/User";
import USERS from "../User/defaultUsers";

const SignUpScreen = (props) => {
  const authUser = (enteredUser) => {
    const foundUser = USERS.find(
      (element) => element.phoneNumber === enteredUser.phoneNumber
    );
    if (foundUser) {
      if (
        enteredUser.phoneNumber == foundUser.phoneNumber &&
        enteredUser.password == foundUser.password
      ) {
        //setLoggedIn(true);
        setUser(foundUser);
        return true;
      } else {
        Alert.alert("Hmm...", "I think you have the wrong password", [
          { text: "Try Again", style: "cancel" },
        ]);
      }
    } else {
      Alert.alert("Invalid User!", "Register Now!", [
        {
          text: "Register!",
          onPress: () => {
            setLogin(false);
          },
        },
      ]);
    }
  };
  const isLogin = props.navigation.getParam("isLogin");
  const [password, onPasswordChange] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loginOrRegister, setLogin] = useState(isLogin);
  const [user, setUser] = useState();

  let content = (
    <View style={styles.pillbox}>
      <TouchableOpacity
        style={{ ...styles.tab, ...styles.LogInTab }}
        onPress={() => {
          setLogin(true);
        }}
      >
        <Text style={styles.tabText}>Log in</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ ...styles.tab, ...styles.SignUpTab, ...styles.isSelected }}
      >
        <Text style={styles.tabText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );

  let buttonText = "Sign Up";

  if (loginOrRegister) {
    buttonText = "Log In";
    content = (
      <View style={styles.pillbox}>
        <TouchableOpacity
          style={{ ...styles.tab, ...styles.LogInTab, ...styles.isSelected }}
        >
          <Text style={styles.tabText}>Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ ...styles.tab, ...styles.SignUpTab }}
          onPress={() => {
            setLogin(false);
          }}
        >
          <Text style={styles.tabText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <Header />
      <View style={styles.top}>
        {content}
        <View style={styles.input}>
          <View style={styles.inputContainer}>
            <Text>Phone Number</Text>
            <TextInput
              style={{
                ...styles.password,
                letterSpacing: 5,
                color: Colors.textColor,
                fontSize: 20,
                fontWeight: "bold",
              }}
              onChangeText={(text) => setPhoneNumber(text)}
              value={phoneNumber}
              keyboardType={"number-pad"}
              placeholder="+0(000)000-00-00"
              placeholderTextColor="black"
            />
          </View>
        </View>
        <View style={styles.input}>
          <View style={styles.inputContainer}>
            <Text>Password</Text>
            <TextInput
              secureTextEntry={true}
              style={{
                ...styles.password,
                letterSpacing: 12,
                color: Colors.textColor,
                fontSize: 20,
                fontWeight: "bold",
              }}
              onChangeText={(text) => onPasswordChange(text)}
              value={password}
            />
          </View>
        </View>
      </View>
      <View style={styles.bottom}>
        <CustomButton
          style={styles.signUpBottom}
          onPress={() => {
            if (loginOrRegister) {
              var enteredUser = new User(phoneNumber, password);
              if (authUser(enteredUser)) {
                const foundUser = USERS.find(
                  (element) => element.phoneNumber === enteredUser.phoneNumber
                );
                props.navigation.navigate("User", {
                  user: foundUser,
                });
              }
              // console.log(user);
              // props.checkUser(user);
            }
          }}
        >
          <Text style={styles.buttonText}>{buttonText}</Text>
        </CustomButton>
        <TouchableOpacity>
          <Text style={styles.forgetPWText}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  top: {
    height: "50%",
    paddingVertical: 40,
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  pillbox: {
    flexDirection: "row",
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
  },
  tab: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.textColor,
    height: 70,
    borderColor: Colors.textColor,
    borderWidth: 1,
  },
  LogInTab: {
    borderBottomLeftRadius: 35,
    borderTopLeftRadius: 35,
  },
  SignUpTab: {
    borderBottomRightRadius: 35,
    borderTopRightRadius: 35,
  },
  isSelected: {
    backgroundColor: "white",
  },
  tabText: {
    color: Colors.textColorSecondary,
    fontSize: 25,
    fontWeight: "bold",
  },
  input: {
    height: 100,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "80%",
    justifyContent: "flex-start",
  },
  password: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.textColor,
    height: 50,
  },
  bottom: {
    height: "30%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  signUpBottom: {
    backgroundColor: "red",
  },
  buttonText: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
  forgetPWText: {
    color: Colors.textColorSecondary,
    fontSize: 20,
    paddingVertical: 20,
  },
});

export default SignUpScreen;
