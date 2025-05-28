import { COLORS, windowWidth } from "@/constants/constants";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.innerContainer}>
        <Image
          source={require("../../assets/images/manitoba-welcome-screen.png")}
          style={styles.welcomeImage}
        />
        <View style={styles.aboutContainer}>
          {/* <Text style={styles.aboutTextHeading}>
            Planning to move to Manitoba?
          </Text> */}
          <Text style={styles.aboutTextHeading}>
            Hoping to secure a {"\n"}Manitoba Provincial nomination?
          </Text>
          <Text style={styles.aboutText}>
            Take a free evaluation {"\n"}to know what are your chances!
          </Text>
        </View>
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
  aboutContainer: {
    alignItems: "center",
    paddingRight: 10,
    paddingLeft: 10,
  },
  aboutTextHeading: {
    fontFamily: "nunitoSemiBold",
    fontSize: 24,
    letterSpacing: 0.2,

    textAlign: "center",
  },
  aboutText: {
    fontFamily: "nunitoSemiBold",
    fontSize: 16,
    letterSpacing: 0.2,
    color: COLORS["text-gray"],
    alignSelf: "left",
    marginTop: 30,
  },
});
