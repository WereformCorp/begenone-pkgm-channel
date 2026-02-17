import {
  ScrollView,
  Text,
  Pressable,
  View,
} from "react-native";
import { ChannelNavigationStyles as S } from "../styles/ChannelNavigationStyles";
import { useEffect, useState } from "react";

/**
 * ChannelNavigation
 *
 * BEGENONE-styled horizontal tab navigation.
 * Uses accent for selected tab, Pressable for feedback.
 */

export function ChannelNavigation({ style, selectContentType }) {
  const [selected, setSelected] = useState("Home");

  const tabs = ["Home", "Videos", "Wires", "About"];

  useEffect(() => {
    selectContentType?.(selected);
  }, [selected]);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={[S.container, style]}
    >
      {tabs.map(tab => (
        <Pressable
          key={tab}
          onPress={() => setSelected(tab)}
          style={({ pressed }) => [
            S.button,
            selected === tab && S.selectedButton,
            { opacity: pressed ? 0.8 : 1 },
          ]}
        >
          <Text
            style={[
              S.buttonText,
              selected === tab && S.selectedButtonText,
            ]}
          >
            {tab}
          </Text>
        </Pressable>
      ))}
    </ScrollView>
  );
}
