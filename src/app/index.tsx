import { Image } from "expo-image";
import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// blurhash for image loading
const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function Index() {
  return (
    <>
      <Image
        style={styles.logo}
        source={require("@/assets/images/n.png")}
        placeholder={{ blurhash }}
        contentFit="cover"
        transition={1000}
      />
      <Text>Icon</Text>
    </>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 50,
    height: 50,
  },
});
