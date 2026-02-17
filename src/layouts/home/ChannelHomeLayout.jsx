import { Text, View } from "react-native";
import { COLORS } from "../../styles/channelTheme";

/**
 * ChannelHomeLayout
 *
 * BEGENONE-styled wrapper for channel Home tab content.
 * Renders "Featured" section header with platform typography.
 */

export function ChannelHomeLayout({ children }) {
  return (
    <View style={{ backgroundColor: COLORS.bgBase, paddingBottom: 96 }}>
      <Text
        style={{
          color: COLORS.textPrimary,
          fontWeight: "700",
          fontSize: 18,
          paddingHorizontal: 12,
          paddingBottom: 14,
          letterSpacing: 0.5,
        }}
      >
        Featured
      </Text>
      <View>{children}</View>
    </View>
  );
}
