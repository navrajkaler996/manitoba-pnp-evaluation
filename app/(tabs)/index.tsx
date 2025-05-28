import { windowWidth } from "@/constants/constants";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.innerContainer}>
        <Image
          source={require("../../assets/images/manitoba-welcome-screen.png")}
          style={styles.welcomeImage}
        />
        <Text>abcd</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    //justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  innerContainer: {
    alignItems: "center",
  },
  welcomeImage: {
    width: windowWidth * 0.6,
    resizeMode: "contain",
    marginBottom: 20,
  },
});
