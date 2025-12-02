import { ScrollView, Text, View } from "react-native";
import { ChannelHeader } from "../../components/ChannelHeader";
import { ChannelNavigation } from "../../components/ChannelNavigation";

export function ChannelHomeLayout({
  children,
  channelNavStyles,
  channelLogoUri,
  channelUserName,
  channelHeaderSubsCountText,
  bannerUri,
  miniAboutText,
}) {
  return (
    <View>
      <ChannelHeader
        channelLogoUri={channelLogoUri}
        channelUserName={channelUserName}
        channelHeaderSubsCountText={channelHeaderSubsCountText}
        bannerUri={bannerUri}
        miniAboutText={miniAboutText}
      />
      <ChannelNavigation style={channelNavStyles} />
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
