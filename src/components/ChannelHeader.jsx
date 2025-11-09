import { Text } from "react-native";
import { View, Image } from "react-native";
import { useWindowDimensions } from "react-native";
import { ChannelHeaderStyles } from "../styles/ChannelHeaderStyles";

export function ChannelHeader({
  channelLogoUri,
  ChannelUserName,
  channelHeaderSubsCountText,
}) {
  const { width, height } = useWindowDimensions();

  return (
    <View style={ChannelHeaderStyles.container}>
      <View style={ChannelHeaderStyles.imageContainer}>
        <Image
          source={{
            uri:
              channelLogoUri ||
              "https://begenone-images.s3.us-east-1.amazonaws.com/default-user-photo.jpg",
          }}
          style={[
            { width: width / 3, height: height / 10 > 100 ? 100 : height / 10 },
            ChannelHeaderStyles.image,
          ]}
        />
      </View>
      <View style={ChannelHeaderStyles.textContainer}>
        <Text style={ChannelHeaderStyles.userNameText}>
          {ChannelUserName || "Default Username"}
        </Text>
        <Text style={ChannelHeaderStyles.subscribersContainer}>
          <Text style={ChannelHeaderStyles.subCountText}>
            {channelHeaderSubsCountText || "143,033"}
          </Text>{" "}
          Subscribers
        </Text>
      </View>
    </View>
  );
}
