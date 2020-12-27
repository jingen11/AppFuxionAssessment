import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  FlatList,
  Text,
  TouchableOpacity,
} from "react-native";
import {
  MaterialCommunityIcons,
  Ionicons,
  FontAwesome5,
  AntDesign,
} from "@expo/vector-icons";

import Header from "../Components/Header";
import FurnitureCard from "../Components/FurnitureCard";
import Colors from "../constants/Colors";
import { FURNITURES } from "../Furniture/data";

const SearchScreen = (props) => {
  const listLength = FURNITURES.length;
  let quantityList = new Array(listLength);
  let quantityMap = new Array();
  if (quantityList[0] == undefined) {
    for (let i = 0; i < listLength; i++) {
      quantityList[i] = "1";
    }
  }

  for (let i = 0; i < listLength; i++) {
    var obj = {
      id: FURNITURES[i].id,
      quantity: "1",
    };
    quantityMap.push(obj);
  }

  const [input, setInput] = useState("");
  const [quantity, setQuantity] = useState(quantityList);
  const [quantityInMap, setQuantityMap] = useState(quantityMap);

  const filterList = (list) => {
    return list.filter((item) =>
      item.name.toLowerCase().includes(input.toLowerCase())
    );
  };

  const iconArray = [
    <MaterialCommunityIcons
      name="sofa"
      size={50}
      color={Colors.secondaryColor}
    />,
    <MaterialCommunityIcons
      name="chair-rolling"
      size={50}
      color={Colors.secondaryColor}
    />,
    <Ionicons name="bed" size={50} color={Colors.secondaryColor} />,
    <FontAwesome5 name="chair" size={50} color={Colors.secondaryColor} />,
    <MaterialCommunityIcons
      name="table-furniture"
      size={50}
      color={Colors.secondaryColor}
    />,
  ];

  const renderFurnitureItem = (itemData) => {
    const isMatch = (element) => element.id === itemData.item.id;

    const mapIndex = quantityInMap.findIndex(isMatch);

    let content;
    let currentPrice =
      parseInt(itemData.item.currentPrice) * parseInt(quantity[itemData.index]);
    let currentPriceMap =
      parseInt(itemData.item.currentPrice) *
      parseInt(quantityInMap[mapIndex].quantity);

    switch (itemData.item.name) {
      case "Sofa":
        content = iconArray[0];
        break;
      case "Armchair":
        content = iconArray[1];
        break;
      case "Bed":
        content = iconArray[2];
        break;
      case "Chair":
        content = iconArray[3];
        break;
      case "Table":
        content = iconArray[4];
        break;
    }
    return (
      <FurnitureCard style={styles.container}>
        <View style={styles.iconContainer}>{content}</View>
        <View style={styles.nameContainer}>
          <Text style={styles.nameText}>{itemData.item.name}</Text>
          <View style={styles.quantityContainer}>
            <TouchableOpacity
              onPress={() => {
                //let temp = parseInt(quantity[itemData.index]);
                //quantityList = quantity;
                let tempMap = parseInt(quantityInMap[mapIndex].quantity);
                if (tempMap <= 0) {
                  //quantityList[itemData.index] = "0";
                  quantityInMap[mapIndex].quantity = "0";
                  //setQuantity([...quantityList]);
                  setQuantityMap([...quantityInMap]);
                } else {
                  //temp--;
                  tempMap--;
                  // quantityList[itemData.index] = temp.toString();
                  quantityInMap[mapIndex].quantity = tempMap.toString();
                  // setQuantity([...quantityList]);
                  setQuantityMap([...quantityInMap]);
                }
              }}
            >
              <AntDesign name="minus" size={24} color="black" />
            </TouchableOpacity>
            <View style={styles.quantity}>
              <Text>{quantityInMap[mapIndex].quantity}</Text>
            </View>

            <TouchableOpacity
              onPress={() => {
                //let temp = parseInt(quantity[itemData.index]);
                let tempMap = parseInt(quantityInMap[mapIndex].quantity);
                //quantityList = quantity;
                //temp++;
                tempMap++;
                //quantityList[itemData.index] = temp.toString();
                quantityInMap[mapIndex].quantity = tempMap.toString();
                // setQuantity([...quantityList]);
                setQuantityMap([...quantityInMap]);
              }}
            >
              <Ionicons name="add-outline" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.oriPriceText}>${itemData.item.oriPrice}</Text>
          <Text style={styles.currentPriceText}>${currentPriceMap}</Text>
        </View>
      </FurnitureCard>
    );
  };

  return (
    <View style={styles.screen}>
      <Header>
        <View style={styles.searchBarContainer}>
          <View style={styles.searchIconContainer}>
            <Ionicons
              name="search"
              size={24}
              color={Colors.textColorSecondary}
            />
          </View>
          <TextInput
            style={styles.searchBar}
            onChangeText={(search) => {
              setInput(search);
            }}
            placeholder="Search.."
            placeholderTextColor={Colors.textColorSecondary}
          />
        </View>
      </Header>

      <FlatList
        data={filterList(FURNITURES)}
        renderItem={renderFurnitureItem}
        keyExtractor={(item, index) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
  },
  searchBarContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  searchIconContainer: {
    width: "20%",
    backgroundColor: "white",
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 22,
    borderTopLeftRadius: 22,
  },
  searchBar: {
    height: 45,
    backgroundColor: "white",
    borderBottomRightRadius: 22,
    borderTopRightRadius: 22,
    paddingHorizontal: 10,
    width: "80%",
  },

  container: {
    flexDirection: "row",
    height: 100,
    marginVertical: 20,
    marginHorizontal: "5%",
    backgroundColor: "white",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  iconContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  nameContainer: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    height: "100%",
  },
  nameText: {
    fontSize: 17,
    fontWeight: "bold",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  quantity: {
    height: 30,
    borderColor: Colors.textColor,
    borderWidth: 1,
    width: 30,
    marginHorizontal: 5,
    color: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  priceContainer: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    height: "100%",
  },
  oriPriceText: {
    color: Colors.textColor,
    fontSize: 20,
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
  },
  currentPriceText: {
    color: Colors.textColorSecondary,
    fontSize: 25,
    fontWeight: "bold",
  },
});

export default SearchScreen;
