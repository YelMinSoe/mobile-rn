import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { ProductTypes } from "@/types";

// types
interface ProductProps extends ProductTypes {}

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
    <View>
      <Text>Product</Text>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({});
