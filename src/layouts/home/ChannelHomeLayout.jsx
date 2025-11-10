import { ScrollView, Text, View } from "react-native";
import { ChannelHeader } from "../../components/ChannelHeader";
import { ChannelNavigation } from "../../components/ChannelNavigation";

export function ChannelHomeLayout({
  Children,
  style,
  channelLogoUri,
  channelUserName,
  channelHeaderSubsCountText,
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
      <View>
        <Text
          style={{
            color: "#fff",
            fontWeight: 900,
            fontSize: 24,
            paddingLeft: 12,
            // paddingTop: 12,
            paddingBottom: 18,
          }}
        >
          Featured
        </Text>
        <View>{Children}</View>
      </View>
    </ScrollView>
  );
}
