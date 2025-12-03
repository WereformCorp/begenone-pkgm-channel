import { ScrollView, Text, View } from "react-native";
import { ChannelHeader } from "../../components/ChannelHeader";
import { ChannelNavigation } from "../../components/ChannelNavigation";
import { useState } from "react";

export function ChannelHomeLayout({ children }) {
  const [navType, setNavType] = useState("Home");

  function selectContentType(selected) {
    console.log(`Selected Content Type inside Channel Home Layout: `, selected);
    setNavType(String(selected.toLowerCase()));
  }

  return (
    <View>
      {navType === "home" && (
        <Text
          style={{
            color: "rgb(255, 255, 255)",
            fontWeight: 900,
            fontSize: 24,
            paddingLeft: 12,
            // paddingTop: 12,
            paddingBottom: 18,
          }}
        >
          Featured
        </Text>
      )}
      <View>{children}</View>
    </View>
  );
}
