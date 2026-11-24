import { Image } from "expo-image";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlashList } from "@shopify/flash-list";
import { useCallback, useState } from "react";

import Cart from "../../components/shop/Cart";
import Title from "../../components/shop/Title";
import Category from "../../components/shop/Category";
import { categories, products } from "../../data/index";

import Product from "@/components/shop/Product";

// blurhash for image loading
const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function Index() {
  const [select, setSelect] = useState(1);
  const width = Dimensions.get("screen").width;
  const numColumns = width < 600 ? 2 : width < 768 ? 3 : 4;

  const handleSelect = useCallback((id: number) => {
    setSelect(id);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          style={styles.logo}
          source={require("@/assets/images/n.png")}
          placeholder={{ blurhash }}
          contentFit="cover"
          transition={1000}
        />
        <Cart />
      </View>
      <Image
        style={styles.banner}
        source={require("../../data/shop/banner6.png")}
        placeholder={{ blurhash }}
        contentFit="cover"
        transition={1000}
      />
      <View style={{ paddingHorizontal: 15 }}>
        <Title title="Shop By Category" btnText="See All"></Title>
        {/* <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map((category) => (
            <Category key={category.id} {...category} />
          ))}
        </ScrollView> */}
        {/* Flat list */}
        <FlashList
          data={categories}
          renderItem={({ item }) => (
            <Category {...item} select={select} onSelect={handleSelect} />
          )}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingVertical: 10 }}
          extraData={select} // if select is changed,rerender items (for active category) .or  index state is changed and if select is not changed, items will not rerender.
        />

        <Title title="Recommended For You" btnText="See All"></Title>
        <FlatList
          data={products}
          renderItem={({ item }) => <Product {...item} />}
          numColumns={numColumns}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingVertical: 10 }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: "100%",
    backgroundColor: "white",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    marginVertical: 5,
  },
  logo: {
    width: 50,
    height: 50,
  },
  banner: {
    width: "100%",
    aspectRatio: 20 / 9,
  },
});
