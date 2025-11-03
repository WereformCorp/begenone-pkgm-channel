import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function HelloShared() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>👋 Hello from begenone-pkgm-shared!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    color: "#333",
  },
});
