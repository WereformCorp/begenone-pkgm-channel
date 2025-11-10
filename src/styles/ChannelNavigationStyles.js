import { StyleSheet } from "react-native";
import { globalStyles } from "./globalStyles";

export const ChannelNavigationStyles = StyleSheet.create({
  container: {
    width: "auto",
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    // marginTop: 6,
    paddingTop: 18,
    paddingRight: 18,
    paddingLeft: 18,
    paddingBottom: 18,
    marginBottom: 18,

    borderBottomWidth: 1,
    borderBottomColor: globalStyles.colors.colorPrimary350,
  },

  button: {
    width: 80,
    height: 30,
    // marginRight: 12,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: globalStyles.colors.colorPrimary200,
    // borderRadius: globalStyles.borders.borderPrimary50,
  },

  selectedButton: {
    backgroundColor: globalStyles.colors.colorPrimary350,
    borderRadius: globalStyles.borders.borderPrimary50,
  },

  buttonText: {
    color: "#fff",
  },
});
