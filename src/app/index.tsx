import { Image } from "expo-image";
import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Cart from "../../components/shop/Cart";

// blurhash for image loading
const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function Index() {
  return (
    <View style={styles.container}>
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
    </View>
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
    marginVertical: 7,
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
