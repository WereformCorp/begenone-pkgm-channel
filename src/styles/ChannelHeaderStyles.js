import { StyleSheet } from "react-native";
import { globalStyles } from "./globalStyles";

export const ChannelHeaderStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    alignSelf: "flex-start",
    paddingLeft: 24,
  },

  imageContainer: {
    borderRadius: 10,
    borderWidth: 6,
    borderColor: "#151515",
  },

  image: {
    aspectRatio: 1 / 1,
    borderRadius: 10,
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
});
