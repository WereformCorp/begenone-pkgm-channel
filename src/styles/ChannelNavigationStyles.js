import { StyleSheet } from "react-native";
import { globalStyles } from "./globalStyles";

/* Channel tab navigation bar styles */
export const ChannelNavigationStyles = StyleSheet.create({
  container: {
    // Navigation bar container
    width: "auto",
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 18,
    paddingRight: 18,
    paddingLeft: 18,
    paddingBottom: 18,
    marginBottom: 18,
    borderBottomWidth: 1,
    borderBottomColor: globalStyles.colors.colorPrimary350,
  },

  button: {
    // Individual navigation button
    width: 80,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },

  selectedButton: {
    // Active navigation state
    backgroundColor: globalStyles.colors.colorPrimary350,
    borderRadius: globalStyles.borders.borderPrimary50,
  },

  buttonText: {
    // Navigation label text
    color: "#fff",
  },
});
