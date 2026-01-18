import { Platform, StyleSheet } from "react-native";
import { globalStyles } from "./globalStyles";

/* Channel About screen layout and typography */
export const ChannelAboutLayoutStyles = StyleSheet.create({
  container: {
    // Main about card container
    width: "auto",
    margin: 12,
    backgroundColor: globalStyles.colors.colorPrimary350,
    padding: 18,
    borderRadius: globalStyles.borders.borderPrimary200,
    marginBottom: 96,
  },

  headerContainer: {
    // Top row with logo, title, and actions
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 24,
  },

  innerHeaderContainer: {
    // Left section containing logo and text
    width: "auto",
    flexDirection: "row",
  },

  channelLogoUri: {
    // Channel logo avatar
    width: "auto",
    height: 60,
    aspectRatio: 1 / 1,
    borderRadius: globalStyles.borders.borderPrimary50,
  },

  aboutDetails: {
    // Channel name and subtitle stack
    flexDirection: "column",
    paddingLeft: 18,
    justifyContent: "center",
  },

  aboutName: {
    // Channel display name
    color: "#fff",
    fontWeight: 800,
    fontSize: 24,
    paddingBottom: 4,
  },

  aboutSubstitle: {
    // Channel subtitle / handle
    color: "#fff",
    fontSize: 12,
    fontWeight: 600,
  },

  iconsContainer: {
    // Action icons column
    width: "auto",
    flexDirection: "column",
    justifyContent: "center",
  },

  icon1: {
    // Primary action icon spacing
    paddingBottom: 4,
  },

  aboutText: {
    // Channel about description text
    color: "#fff",
    fontSize: Platform.OS === "ios" ? 16 : 14,
    lineHeight: Platform.OS === "ios" ? 24 : 22,
  },
});
