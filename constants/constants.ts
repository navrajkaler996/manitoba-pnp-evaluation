import { Dimensions } from "react-native";

export const windowWidth = Dimensions.get("window").width;
export const windowHeight = Dimensions.get("window").height;

export const COLORS = {
  "text-gray": "#808080",
  "primary-1": "#2F80ED",
  "primary-light": "#aed9ff",
};

//CSS

export const STYLES = {
  SHADOW_1: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 3,

    // Elevation for Android
    elevation: 5,
  },
};
