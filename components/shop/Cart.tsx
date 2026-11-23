import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Icon } from "expo-router";
import { AntDesign } from "@expo/vector-icons";

const Cart = () => {
  return (
    <View style={styles.container}>
      <AntDesign name="shopping-cart" size={24} color="black" />
      <View style={styles.badgeContainer}>
        <Text style={styles.badge}>2</Text>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  badgeContainer: {
    backgroundColor: "red",
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: -10,
    marginTop: -5,
  },
  badge: {
    color: "white",
    fontWeight: "bold",
    fontSize: 11,
  },
});
