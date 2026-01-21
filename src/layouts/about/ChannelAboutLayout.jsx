import { Image, Linking, Text, TouchableOpacity, View } from "react-native";
import { ChannelAboutLayoutStyles } from "../../styles/ChannelAboutLayoutStyles";
import { Ionicons } from "@expo/vector-icons";
import { normalizeUrl } from "@wereform/pkgm-shared";

/**
 * ChannelAboutLayout
 *
 * Renders the “About” section of a channel profile.
 *
 * Responsibilities:
 * - Displays channel logo, name, and short subtitle
 * - Renders long-form about content with preserved line breaks
 * - Shows external social media links with icons
 * - Gracefully handles empty or missing content
 *
 * Props:
 * - content: string
 *   Full “about” text shown in the body section.
 *
 * - channelLogoUri: string (URL)
 *   Channel profile image.
 *
 * - aboutName: string
 *   Display name shown in the about header.
 *
 * - aboutSubtitle: string
 *   Short subtitle under the channel name (auto-clamped).
 *
 * - socialMediaLink1 / socialMediaLink2: string
 *   External URLs for social profiles.
 *
 * - socialIcon1 / socialIcon2: Ionicons name
 *   Icons used for social links.
 *
 * Behavior:
 * - Empty content is replaced with clear placeholder text
 * - Subtitle length is clamped to avoid layout overflow
 * - URLs are normalized before opening to prevent malformed links
 * - Line breaks in content are preserved for readability
 *
 * Notes:
 * - Placeholder defaults are intended for development only
 * - Uses `Linking.openURL` for external navigation
 */

export function ChannelAboutLayout({
  content,
  channelLogoUri,
  aboutName,
  aboutSubtitle,
  socialMediaLink1 = "google.com",
  socialMediaLink2 = "wereform.co",
  socialIcon1,
  socialIcon2,
}) {
  // NOTE: THIS IS ONLY FOR DEVELOPMENT
  let contentText = content ?? "";
  let aboutSubtitleText = aboutSubtitle ?? "";
  const isContentEmpty = !contentText.trim();
  const isAboutSubtitleEmpty = !aboutSubtitleText.trim();

  const maxSubtitleLength = 25;
  const safeSubtitle =
    aboutSubtitle && aboutSubtitle.length > maxSubtitleLength
      ? aboutSubtitle.slice(0, maxSubtitleLength).trim() + "…"
      : aboutSubtitle || "This is Dummy About Subtitle.";

  if (isContentEmpty) {
    contentText = "You have not added anything in your about section.";
  }

  if (isAboutSubtitleEmpty) {
    aboutSubtitleText = "No description found.";
  }

  const finalText = contentText.replace(/\r\n/g, "\n").split("\n");

  const socialMediaLink1Url = normalizeUrl(socialMediaLink1);
  const socialMediaLink2Url = normalizeUrl(socialMediaLink2);

  return (
    <View style={ChannelAboutLayoutStyles.container}>
      <View style={ChannelAboutLayoutStyles.headerContainer}>
        <View style={ChannelAboutLayoutStyles.innerHeaderContainer}>
          <Image
            source={{
              uri:
                channelLogoUri ||
                "https://begenone-images.s3.us-east-1.amazonaws.com/default-user-photo.jpg",
            }}
            style={ChannelAboutLayoutStyles.channelLogoUri}
          />
          <View style={ChannelAboutLayoutStyles.aboutDetails}>
            <Text style={ChannelAboutLayoutStyles.aboutName}>
              {aboutName || "Default Name"}
            </Text>
            <Text
              style={[
                ChannelAboutLayoutStyles.aboutSubstitle,
                isContentEmpty && { color: "#7f7f7f" },
              ]}
            >
              {safeSubtitle}
            </Text>
          </View>
        </View>
        <View style={ChannelAboutLayoutStyles.iconsContainer}>
          <TouchableOpacity
            style={ChannelAboutLayoutStyles.icon1}
            onPress={() => Linking.openURL(socialMediaLink1Url)}
          >
            <Ionicons
              name={socialIcon1 || "logo-github"}
              size={24}
              color="white"
            />
          </TouchableOpacity>
          <TouchableOpacity
            // style={ChannelAboutLayoutStyles.icons}
            onPress={() => Linking.openURL(socialMediaLink2Url)}
          >
            <Ionicons
              name={socialIcon2 || "logo-linkedin"}
              size={24}
              color="#0084ff"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text
          style={[
            ChannelAboutLayoutStyles.aboutText,
            isContentEmpty && { color: "#7f7f7f" },
          ]}
        >
          {finalText.map((text, index) => (
            <Text key={index}>
              {/* Trim side spaces but keep words spaced normally */}
              {text.trim().replace(/\s+/g, " ")}
              {index < finalText.length - 1 ? "\n" : ""}
            </Text>
          ))}
        </Text>
      </View>
    </View>
  );
}
