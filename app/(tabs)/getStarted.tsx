import Button from "@/components/button";
import { COLORS, windowWidth } from "@/constants/constants";
import { StyleSheet, Text, View } from "react-native";

const GetStarted = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Tell us about yourself</Text>
      <View style={styles.questionnaireContainer}>
        <View style={styles.questionContainer}>
          <Text style={styles.question}>
            What best describes your current situation?
          </Text>
        </View>
        <View style={styles.optionsContainer}>
          <View style={styles.option}>
            <Text style={styles.optionText}>
              You are currently living in Manitoba on a study permit.
            </Text>
          </View>
          <View style={styles.option}>
            <Text style={styles.optionText}>
              You are currently living in Manitoba on a work permit.
            </Text>
          </View>
          <View style={styles.option}>
            <Text style={styles.optionText}>
              You are currently living in a foriegn country.
            </Text>
          </View>
          <View style={styles.option}>
            <Text style={styles.optionText}>
              You are currently living in any other Canadian province.
            </Text>
          </View>
          <View style={styles.option}>
            <Text style={styles.optionText}>
              You are currently living in Manitoba on a visitor visa.
            </Text>
          </View>
        </View>
      </View>
      <Button
        text="Next"
        buttonStyles={{
          position: "absolute",
          bottom: 50,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 100,
  },
  header: {
    fontSize: 30,
    marginBottom: 20,
    fontFamily: "nunitoSemiBold",
  },
  questionContainer: {
    backgroundColor: COLORS["primary-1"],
    width: windowWidth * 0.9,
    minHeight: 100,
    justifyContent: "center",

    borderRadius: 20,
    paddingRight: 15,
    paddingLeft: 15,
    marginTop: 40,
  },
  question: {
    fontSize: 20,
    color: "#fff",
    fontFamily: "nunitoSemiBold",
    textAlign: "center",
    letterSpacing: 0.3,
  },
  optionsContainer: {
    marginTop: 10,
  },
  option: {
    width: windowWidth * 0.9,

    height: 50,
    justifyContent: "center",

    // paddingTop: 10,
    // paddingBottom: 10,
    borderRadius: 20,
    paddingRight: 15,
    paddingLeft: 15,
    marginTop: 20,
    backgroundColor: "#F2F2F2",
  },
  questionnaireContainer: {
    alignItems: "center",
  },
  optionText: {
    fontFamily: "nunitoSemiBold",
  },
});

export default GetStarted;
