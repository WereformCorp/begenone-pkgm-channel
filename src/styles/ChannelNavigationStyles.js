import { StyleSheet } from "react-native";
import { COLORS } from "./channelTheme";

export const ChannelNavigationStyles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.bgBase,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginBottom: 8,
    width: "100%",
    height: "100%",
    gap: 4,
  },

  button: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  selectedButton: {
    backgroundColor: COLORS.accentSubtle,
    borderWidth: 1,
    borderColor: COLORS.accent,
  },

  buttonText: {
    color: COLORS.textMuted,
    fontSize: 14,
    fontWeight: "500",
  },

  selectedButtonText: {
    color: COLORS.textPrimary,
    fontWeight: "600",
  },
});
