import { ScrollView } from "react-native";
import { COLORS } from "../../styles/channelTheme";

export function ChannelVideoLayout({ children }) {
  return (
    <ScrollView style={{ backgroundColor: COLORS.bgBase, paddingBottom: 96 }}>
      {children}
    </ScrollView>
  );
}
