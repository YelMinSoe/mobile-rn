import { Image } from "expo-image";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Cart from "../../components/shop/Cart";
import Title from "../../components/shop/Title";
import Category from "../../components/shop/Category";
import { categories } from "../../data/index";

// blurhash for image loading
const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function Index() {
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
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map((category) => (
            <Category key={category.id} {...category} />
          ))}
        </ScrollView>

        <Title title="Recommended For You" btnText="See All"></Title>
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
