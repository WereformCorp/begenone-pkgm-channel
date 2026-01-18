import { StyleSheet } from "react-native";

/* Global design tokens for colors and borders */
export const globalStyles = StyleSheet.create({
  colors: {
    // Primary background shades
    colorPrimary50: "rgba(21, 21, 21, .7)",
    colorPrimary100: "#151515",
    colorPrimary200: "#252525",
    colorPrimary300: "#3C3C3C",
    colorPrimary350: "rgba(60,60,60,.2)",
    colorPrimary400: "#7F7F7F",
    colorPrimary500: "#D3D3D3",

    // Primary accent colors
    colorPrimary600: "#ff6600ff",
    colorPrimary700: "#FF8800",
  },

  borders: {
    // Standardized border radius scale
    borderPrimary50: 8,
    borderPrimary100: 10,
    borderPrimary200: 12,
    borderPrimary300: 15,
    borderPrimary400: 30,
  },
});
