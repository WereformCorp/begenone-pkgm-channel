import {
  ScrollView,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import { ChannelNavigationStyles } from "../styles/ChannelNavigationStyles";
import { useState } from "react";

export function ChannelNavigation() {
  const [selected, setSelected] = useState("Home");

  const tabs = ["Home", "Videos", "Wires", "Playlist", "About"];

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={ChannelNavigationStyles.container}
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
