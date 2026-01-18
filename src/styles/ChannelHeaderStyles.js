import { StyleSheet } from "react-native";
import { globalStyles } from "./globalStyles";

/* Channel header layout for profile view */
export const ChannelHeaderStyles = StyleSheet.create({
  primaryContainer: {
    // Header row overlapping banner
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    alignSelf: "flex-start",
    paddingLeft: 24,
    marginTop: -24,
  },

  imageContainer: {
    // Avatar border wrapper
    borderRadius: 10,
    borderWidth: 6,
    borderColor: "#151515",
  },

  image: {
    // Channel avatar image
    aspectRatio: 1 / 1,
    borderRadius: 2,
  },

  textContainer: {
    // Username and subscriber text block
    paddingLeft: 12,
    paddingBottom: 12,
  },

  userNameText: {
    // Channel name text
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },

  subscribersContainer: {
    // Subscriber row container
    color: "#fff",
    fontSize: 14,
  },

  subCountText: {
    // Highlighted subscriber count
    color: globalStyles.colors.colorPrimary600,
  },

  miniAbout: {
    // Short channel description text
    color: "#fff",
    padding: 24,
    paddingLeft: 32,
    paddingRight: 32,
    paddingTop: 12,
    fontSize: 12,
    lineHeight: 18,
  },

  customizedButton: {
    // Primary channel action button
    backgroundColor: "#ff4800",
    borderRadius: 30,
    height: 35,
  },
});
