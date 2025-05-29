import Button from "@/components/button";
import { COLORS, windowHeight, windowWidth } from "@/constants/constants";
import { useRouter } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push({
      pathname: "/(tabs)/getStarted",
    });
  };
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
        <View style={styles.buttonContainer}>
          <Button text={"Get started"} onPress={handleGetStarted} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    height: windowHeight,
    // paddingVertical: 20,
  },
  innerContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    marginTop: -100,
  },
  welcomeImage: {
    width: windowWidth * 0.6,
    height: 300,
    resizeMode: "contain",
    marginBottom: 40,
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
    textAlign: "center",
    marginTop: 30,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 70,
  },
});
