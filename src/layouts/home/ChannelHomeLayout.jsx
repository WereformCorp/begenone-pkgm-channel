import { ScrollView, Text, View } from "react-native";
import { useState } from "react";

/**
 * ChannelHomeLayout
 *
 * Wrapper layout for a channel’s main content area.
 *
 * Responsibilities:
 * - Tracks which channel section is currently active
 * - Displays section-specific UI (e.g. “Featured” for Home)
 * - Acts as a container for dynamically rendered child content
 *
 * State:
 * - navType: string
 *   Represents the currently selected navigation tab
 *   (stored in lowercase for consistency).
 *
 * Behavior:
 * - Defaults to "home"
 * - Updates navType via `selectContentType`
 * - Conditionally renders section headers based on active tab
 *
 * Usage:
 * - Designed to be paired with ChannelNavigation
 * - Children are rendered regardless of nav type,
 *   allowing parent to control filtering
 */

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
