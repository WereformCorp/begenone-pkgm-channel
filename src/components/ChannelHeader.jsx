import { Text, TouchableOpacity } from "react-native";
import { View, Image } from "react-native";
import { useWindowDimensions } from "react-native";
import { ChannelHeaderStyles } from "../styles/ChannelHeaderStyles";
import { CustomizedButton } from "@wereform/pkgm-shared";
import { Ionicons } from "@expo/vector-icons";

/**
 * ChannelHeader
 *
 * Top-level visual header for a public channel page.
 *
 * Responsibilities:
 * - Renders the channel banner image
 * - Displays channel logo, name, and subscriber count
 * - Shows a short “about” preview for the channel
 * - Adapts logo sizing dynamically based on screen dimensions
 *
 * Props:
 * - channelLogoUri: string (URL)
 *   URL of the channel’s profile image.
 *
 * - ChannelName: string
 *   Display name of the channel.
 *
 * - channelHeaderSubsCountText: string | number
 *   Subscriber count shown under the channel name.
 *
 * - bannerUri: string (URL)
 *   URL of the channel banner image.
 *
 * - miniAboutText: string
 *   Short description of the channel (clamped to two lines).
 *
 * Notes:
 * - Uses `useWindowDimensions` to keep logo sizing responsive
 * - Fallback images are provided for both banner and profile logo
 * - Subscribe / notification actions are scaffolded but currently disabled
 */

export function ChannelHeader({
  channelLogoUri,
  ChannelName,
  channelHeaderSubsCountText,
  bannerUri,
  miniAboutText,
}) {
  const { width, height } = useWindowDimensions();

  const MiniAbout =
    miniAboutText ||
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus eveniet beatae totam vitae, et exercitationem corporis amet officiis illo facere!";

  return (
    <View style={{ flexDirection: "column" }}>
      <View>
        <Image
          source={{
            uri:
              bannerUri ||
              "https://begenone-images.s3.us-east-1.amazonaws.com/banner-1.png",
          }}
          style={{
            width: "auto",
            height: 120,
          }}
        />
      </View>
      <View style={ChannelHeaderStyles.primaryContainer}>
        <View style={ChannelHeaderStyles.imageContainer}>
          <Image
            source={{
              uri:
                channelLogoUri ||
                "https://begenone-images.s3.us-east-1.amazonaws.com/default-user-photo.jpg",
            }}
            style={[
              {
                width: width / 3,
                height: height / 10 > 100 ? 100 : height / 10,
              },
              ChannelHeaderStyles.image,
            ]}
          />
        </View>
        <View style={ChannelHeaderStyles.textContainer}>
          <Text style={ChannelHeaderStyles.userNameText}>
            {ChannelName || "Default Username"}
          </Text>
          <Text style={ChannelHeaderStyles.subscribersContainer}>
            <Text style={ChannelHeaderStyles.subCountText}>
              {channelHeaderSubsCountText || "143,033"}
            </Text>{" "}
            Subscribers
          </Text>
        </View>
      </View>
      <View>
        <Text style={ChannelHeaderStyles.miniAbout} numberOfLines={2}>
          {MiniAbout}
        </Text>
      </View>
      <View
        style={{
          // width: "100%",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {/* <TouchableOpacity
          style={{ maxWidth: "70%", width: "100%", marginRight: 12 }}
        >
          <CustomizedButton
            label="Subscribe"
            textColor="#fff"
            style={ChannelHeaderStyles.customizedButton}
            fontWeight="bold"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons
            name="notifications-circle-outline"
            size={36}
            color="white"
          />
        </TouchableOpacity> */}
      </View>
    </View>
  );
}
