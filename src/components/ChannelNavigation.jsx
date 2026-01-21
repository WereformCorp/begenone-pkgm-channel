import {
  ScrollView,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import { ChannelNavigationStyles } from "../styles/ChannelNavigationStyles";
import { useEffect, useState } from "react";

/**
 * ChannelNavigation
 *
 * Horizontal tab-based navigation for channel content sections.
 *
 * Responsibilities:
 * - Displays selectable tabs for channel sections (Home, Videos, Wires, About)
 * - Tracks the currently selected tab locally
 * - Notifies parent components of tab changes
 *
 * Props:
 * - style: object
 *   Optional style overrides for the navigation container.
 *
 * - selectContentType: function
 *   Callback invoked whenever the active tab changes.
 *   Receives the selected tab label as its argument.
 *
 * Behavior:
 * - Defaults to "Home" on initial render
 * - Uses horizontal ScrollView for overflow-safe navigation
 * - Applies active styling to the selected tab
 */

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
