import { Platform, StyleSheet } from "react-native";
import { globalStyles } from "./globalStyles";

export const ChannelAboutLayoutStyles = StyleSheet.create({
  container: {
    width: "auto",
    margin: 12,
    backgroundColor: globalStyles.colors.colorPrimary350,
    padding: 18,
    borderRadius: globalStyles.borders.borderPrimary200,
    marginBottom: 96,
  },

  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 24,
  },

  innerHeaderContainer: {
    width: "auto",
    flexDirection: "row",
  },

  channelLogoUri: {
    width: "auto",
    height: 60,
    aspectRatio: 1 / 1,
    borderRadius: globalStyles.borders.borderPrimary50,
  },

  aboutDetails: {
    flexDirection: "column",
    paddingLeft: 18,
    justifyContent: "center",
    // alignItems: "flex-start",
    // alignSelf: "flex-start",
  },

  aboutName: {
    color: "#fff",
    fontWeight: 800,
    fontSize: 24,
    paddingBottom: 4,
  },

  aboutSubstitle: {
    color: "#fff",
    fontSize: 12,
    fontWeight: 600,
  },

  iconsContainer: {
    width: "auto",
    flexDirection: "column",
    justifyContent: "center",

    // alignItems: "flex-end",
  },

  icon1: {
    paddingBottom: 4,
  },

  aboutText: {
    color: "#fff",
    fontSize: Platform.OS === "ios" ? 16 : 14,
    lineHeight: Platform.OS === "ios" ? 24 : 22,
  },
});
