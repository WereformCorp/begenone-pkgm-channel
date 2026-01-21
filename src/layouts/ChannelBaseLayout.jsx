import { ScrollView, View } from "react-native";
import { ChannelHeader } from "../components/ChannelHeader";
import { ChannelNavigation } from "../components/ChannelNavigation";

/**
 * ChannelBaseLayout
 *
 * Base layout wrapper for a public channel page.
 *
 * Responsibilities:
 * - Composes the core channel UI structure
 * - Renders the channel header (banner, logo, name, subscribers)
 * - Renders the channel navigation tabs
 * - Acts as a scrollable container for channel content
 *
 * Props:
 * - channelLogoUri: string (URL)
 *   Logo image for the channel header.
 *
 * - channelUserName: string
 *   Display name of the channel owner.
 *
 * - channelHeaderSubsCountText: string
 *   Subscriber count shown in the header.
 *
 * - children: ReactNode
 *   Channel-specific content (Home, Videos, Wires, About, etc.).
 *
 * - style: object
 *   Optional styles passed down to ChannelNavigation.
 *
 * Behavior:
 * - Provides safe fallback values for missing channel data
 * - Uses a vertical ScrollView to allow full-page scrolling
 * - Keeps header and navigation fixed in logical order
 *
 * Notes:
 * - This component is intentionally “dumb”
 * - Content switching is handled by children + navigation callbacks
 */

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
