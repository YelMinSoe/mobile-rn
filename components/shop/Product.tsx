import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

import { ProductTypes } from "@/types";
import { Image } from "expo-image";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "../../data/index";

// types
interface ProductProps extends ProductTypes {}

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const Product = ({
  id,
  brand,
  title,
  star,
  quantity,
  price,
  discount,
  image,
  users,
}: ProductProps) => {
  return (
    <Pressable style={styles.container}>
      <Image
        style={styles.image}
        source={image}
        placeholder={{ blurhash }}
        contentFit="cover"
        transition={1000}
      />
      <Pressable style={styles.heartContainer}>
        <MaterialIcons
          name={users.length > 0 ? "favorite" : "favorite-outline"}
          size={24}
          color="#E66F2D"
        />
      </Pressable>
    </Pressable>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 7,
  },
  image: {
    width: "100%",
    aspectRatio: 3 / 4,
    borderRadius: 5,
  },
  heartContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#00000010",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 10,
    right: 10,
  },
});
