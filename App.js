import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";

import Authentication from "./Navigator/screenNavigator";

export default function App() {
  // const [logIn, setLogIn] = useState(false);
  // const [signUp, setSignUp] = useState(false);
  // const [loggedIn, setLoggedIn] = useState(false);
  // const [user, setUser] = useState();

  // const logInHandler = () => {
  //   setLogIn(true);
  // };

  // const signUpHandler = () => {
  //   setSignUp(true);
  // };

  // const checkUserHandler = (enteredUser) => {
  //   setUser(enteredUser);

  //   const foundUser = USERS.find(
  //     (element) => element.phoneNumber === enteredUser.phoneNumber
  //   );

  //   if (foundUser) {
  //     if (
  //       enteredUser.phoneNumber == foundUser.phoneNumber &&
  //       enteredUser.password == foundUser.password
  //     ) {
  //       setLoggedIn(true);
  //     } else {
  //       Alert.alert("Hmm.", "I think you have the wrong password", [
  //         { text: "Try Again!", style: "cancel" },
  //       ]);
  //     }
  //   } else {
  //     Alert.alert("Invalid User!", "Register Now!", [
  //       { text: "Register!", onPress: () => {} },
  //     ]);
  //   }
  // };

  //let content = <HomeScreen onlogIn={logInHandler} onSignUp={signUpHandler} />;
  let content = <Authentication />;
  // if (logIn) {
  //   content = <SignUpScreen isLogin={true} checkUser={checkUserHandler} />;
  // } else if (signUp) {
  //   content = <SignUpScreen isLogin={false} />;
  // }
  // if (loggedIn) {
  //   content = <AppTabNavigator />;
  // }
  return <View style={styles.screen}>{content}</View>;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
