import {
  ScrollView,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import { ChannelNavigationStyles } from "../styles/ChannelNavigationStyles";
import { useEffect, useState } from "react";

export function ChannelNavigation({ style, selectContentType }) {
  const [selected, setSelected] = useState("Home");

  const tabs = [
    "Home",
    "Videos",
    "Wires",
    // "Playlist",
    "About",
  ];

  useEffect(() => {
    console.log(`Selected Tab: `, selected);

    selectContentType(selected);
  }, [selected]);

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={[ChannelNavigationStyles.container, style]}
    >
      {tabs.map(tab => (
        <TouchableOpacity
          key={tab}
          onPress={() => setSelected(tab)}
          style={[
            ChannelNavigationStyles.button,
            selected === tab && ChannelNavigationStyles.selectedButton, // conditional style
          ]}
        >
          <Text style={ChannelNavigationStyles.buttonText}>{tab}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
