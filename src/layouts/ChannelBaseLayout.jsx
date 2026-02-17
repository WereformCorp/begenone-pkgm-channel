import { ScrollView, View } from "react-native";
import { ChannelHeader } from "../components/ChannelHeader";
import { ChannelNavigation } from "../components/ChannelNavigation";
import { COLORS } from "../styles/channelTheme";

const DEFAULT_AVATAR =
  "https://begenone-images.s3.us-east-1.amazonaws.com/default-user-photo.jpg";

/**
 * ChannelBaseLayout
 *
 * BEGENONE-styled base layout for channel pages.
 * Header, navigation tabs, scrollable content area.
 */

export function ChannelBaseLayout({
  channelLogoUri,
  channelUserName,
  channelHeaderSubsCountText,
  bannerUri,
  miniAboutText,
  children,
  style,
}) {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: COLORS.bgBase }}
      contentContainerStyle={{ paddingBottom: 96 }}
    >
      <ChannelHeader
        channelLogoUri={channelLogoUri || DEFAULT_AVATAR}
        ChannelName={channelUserName || "Channel"}
        channelHeaderSubsCountText={channelHeaderSubsCountText}
        bannerUri={bannerUri}
        miniAboutText={miniAboutText}
      />
      <ChannelNavigation style={style} />
      <View style={{ paddingHorizontal: 12 }}>{children}</View>
    </ScrollView>
  );
}
