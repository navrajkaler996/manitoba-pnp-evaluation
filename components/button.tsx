import { COLORS, STYLES } from "@/constants/constants";
import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from "react-native";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

interface ButtonProps {
  text: string;
  buttonStyles?: ViewStyle;
  onPress?: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  buttonStyles = {},
  onPress,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      style={
        disabled
          ? [
              styles.button,
              STYLES.SHADOW_1,
              buttonStyles,
              { backgroundColor: "#ddd" },
            ]
          : [styles.button, STYLES.SHADOW_1, buttonStyles]
      }
      onPress={onPress}
      disabled={disabled}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: windowWidth * 0.8,
    height: 50,
    backgroundColor: COLORS["primary-1"],
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    textTransform: "capitalize",
    fontSize: 16,
    fontFamily: "nunitoSemiBold",
    letterSpacing: 0.3,
    color: "#fff",
  },
});

export default Button;
