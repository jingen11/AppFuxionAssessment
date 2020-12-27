import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import HomeScreen from "../Screens/HomeScreen";
import SignUpScreen from "../Screens/SignUpScreen";
import AccountScreen from "../Screens/AccountScreen";
import SearchScreen from "../Screens/SearchScreen";
import SettingScreen from "../Screens/SettingScreen";
import MoreScreen from "../Screens/MoreScreen";
import ShoppingBagScreen from "../Screens/ShoppingBagScreen";
import React from "react";
import Colors from "../constants/Colors";

import { Ionicons, Entypo, AntDesign, Feather } from "@expo/vector-icons";

const LogInNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Login: {
      screen: SignUpScreen,
    },
  },
  {
    mode: "modal",
    defaultNavigationOptions: {
      headerShown: false,
    },
  }
);

const AppTabNavigator = createBottomTabNavigator(
  {
    Shop: {
      screen: SearchScreen,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return <Entypo name="shop" size={25} color={tabInfo.tintColor} />;
        },
      },
    },
    Bag: {
      screen: ShoppingBagScreen,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Entypo name="shopping-bag" size={25} color={tabInfo.tintColor} />
          );
        },
      },
    },
    User: {
      screen: AccountScreen,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return <AntDesign name="user" size={25} color={tabInfo.tintColor} />;
        },
      },
    },
    Setting: {
      screen: SettingScreen,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons
              name="settings-outline"
              size={25}
              color={tabInfo.tintColor}
            />
          );
        },
      },
    },
    More: {
      screen: MoreScreen,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Feather
              name="more-horizontal"
              size={25}
              color={tabInfo.tintColor}
            />
          );
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.primaryColor,
      showLabel: false,
    },
  }
);

const Authentication = createSwitchNavigator(
  {
    App: AppTabNavigator,
    Auth: LogInNavigator,
  },
  {
    initialRouteName: "Auth",
  }
);

export default createAppContainer(Authentication);
