import { ScrollView, Text, View } from "react-native";
import { ChannelHeader } from "../../components/ChannelHeader";
import { ChannelNavigation } from "../../components/ChannelNavigation";

export function ChannelHomeLayout({
  children,
  style,
  channelLogoUri,
  channelUserName,
  channelHeaderSubsCountText,
}) {
  return (
    <View>
      <ChannelHeader />
      <ChannelNavigation />
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
      <View>{children}</View>
    </View>
  );
}
