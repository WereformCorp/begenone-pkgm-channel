import { StyleSheet } from "react-native";
import { globalStyles } from "./globalStyles";

export const ChannelHeaderStyles = StyleSheet.create({
  primaryContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    alignSelf: "flex-start",
    paddingLeft: 24,
    marginTop: -24,
    // transform: [{ translateY: -32 }],
  },

  imageContainer: {
    borderRadius: 10,
    borderWidth: 6,
    borderColor: "#151515",
  },

  image: {
    aspectRatio: 1 / 1,
    borderRadius: 2,
  },

  textContainer: {
    paddingLeft: 12,
    paddingBottom: 12,
  },

  userNameText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },

  subscribersContainer: {
    color: "#fff",
    fontSize: 14,
  },

  subCountText: {
    color: globalStyles.colors.colorPrimary600,
  },

  miniAbout: {
    color: "#fff",
    padding: 24,
    paddingLeft: 32,
    paddingRight: 32,
    paddingTop: 12,
    fontSize: 12,
    lineHeight: 18,
  },

  customizedButton: {
    backgroundColor: "#ff4800",
    borderRadius: 30,
    height: 35,
  },
});
