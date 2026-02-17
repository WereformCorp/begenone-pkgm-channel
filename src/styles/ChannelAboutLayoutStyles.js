import { Platform, StyleSheet } from "react-native";
import { COLORS } from "./channelTheme";

export const ChannelAboutLayoutStyles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
    marginBottom: 96,
    backgroundColor: COLORS.bgRaised,
    padding: 20,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: COLORS.accentSubtle,
  },

  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 20,
  },

  innerHeaderContainer: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
  },

  channelLogoUri: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },

  aboutDetails: {
    flex: 1,
    flexDirection: "column",
    paddingLeft: 16,
    justifyContent: "center",
  },

  aboutName: {
    color: COLORS.textPrimary,
    fontWeight: "700",
    fontSize: 18,
    marginBottom: 2,
  },

  aboutSubstitle: {
    color: COLORS.textMuted,
    fontSize: 13,
    fontWeight: "500",
  },

  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  icon1: {
    paddingBottom: 0,
  },

  aboutText: {
    color: COLORS.textPrimary,
    fontSize: Platform.OS === "ios" ? 15 : 14,
    lineHeight: Platform.OS === "ios" ? 24 : 22,
  },

  aboutTextMuted: {
    color: COLORS.textMuted,
  },
});
