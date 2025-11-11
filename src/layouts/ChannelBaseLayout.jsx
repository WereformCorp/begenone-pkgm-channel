import { ScrollView, View } from "react-native";
import { ChannelHeader } from "../components/ChannelHeader";
import { ChannelNavigation } from "../components/ChannelNavigation";

export function ChannelBaseLayout({
  channelLogoUri,
  channelUserName,
  channelHeaderSubsCountText,
  children,
  style,
}) {
  return (
    <ScrollView style={{ flexDirection: "column" }}>
      <ChannelHeader
        channelLogoUri={
          channelLogoUri ||
          "https://begenone-images.s3.us-east-1.amazonaws.com/default-user-photo.jpg"
        }
        ChannelUserName={channelUserName || "Areesh Alam"}
        channelHeaderSubsCountText={channelHeaderSubsCountText || "542,000"}
      />
      <ChannelNavigation style={style} />
      <View>{children}</View>
    </ScrollView>
  );
}
