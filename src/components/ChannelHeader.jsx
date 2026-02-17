import { Animated, Image, Modal, Pressable, Text, View } from "react-native";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { ChannelHeaderStyles as S } from "../styles/ChannelHeaderStyles";

const DEFAULT_BANNER =
  "https://begenone-images.s3.us-east-1.amazonaws.com/banner-1.png";
const DEFAULT_AVATAR =
  "https://begenone-images.s3.us-east-1.amazonaws.com/default-user-photo.jpg";

const NOTIF_OPTIONS = [
  { key: "all", label: "All notifications", icon: "notifications" },
  { key: "muted", label: "Mute notifications", icon: "notifications-off" },
];

/**
 * ChannelHeader — premium creator profile header.
 *
 * Banner → Row 1 (avatar | subscribe + bell) → Row 2 (name) →
 * Row 3 (@handle • subs) → Row 4 (bio).
 */
export function ChannelHeader({
  channelLogoUri,
  channelName,
  subscribersCount,
  bannerUri,
  miniAboutText,
  /* backward-compat */
  ChannelName,
  channelHeaderSubsCountText,
}) {
  const name = channelName ?? ChannelName ?? "Channel";
  const subs = subscribersCount ?? channelHeaderSubsCountText ?? 0;
  const handle = "@" + name.toLowerCase().replace(/[^a-z0-9]/g, "");
  const bio = miniAboutText || "Welcome to the channel.";
  const subLabel = subs === 1 ? "subscriber" : "subscribers";

  const [subscribed, setSubscribed] = useState(false);
  const [notifMode, setNotifMode] = useState("all"); // "all" | "muted"
  const [popupVisible, setPopupVisible] = useState(false);

  const enterAnim = useRef(new Animated.Value(0)).current;
  const btnScale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.timing(enterAnim, {
      toValue: 1,
      duration: 260,
      useNativeDriver: true,
    }).start();
  }, [enterAnim]);

  const handleSubscribe = useCallback(() => {
    Animated.sequence([
      Animated.timing(btnScale, {
        toValue: 0.98,
        duration: 60,
        useNativeDriver: true,
      }),
      Animated.timing(btnScale, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
    setSubscribed((prev) => {
      if (prev) setNotifMode("all");
      return !prev;
    });
  }, [btnScale]);

  const selectNotif = useCallback((key) => {
    setNotifMode(key);
    setPopupVisible(false);
  }, []);

  const bellIconName =
    notifMode === "muted" ? "notifications-off-outline" : "notifications";

  const fadeSlide = useMemo(() => ({
    opacity: enterAnim,
    transform: [{
      translateY: enterAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [5, 0],
      }),
    }],
  }), [enterAnim]);

  return (
    <View style={S.container}>
      <View style={S.bannerWrapper}>
        <Image
          source={{ uri: bannerUri || DEFAULT_BANNER }}
          style={S.banner}
          resizeMode="cover"
        />
      </View>

      <Animated.View style={[S.body, fadeSlide]}>
        {/* row 1: avatar + actions */}
        <View style={S.topRow}>
          <View style={S.avatarOuter}>
            <View style={S.avatarInner}>
              <Image
                source={{ uri: channelLogoUri || DEFAULT_AVATAR }}
                style={S.avatarImage}
                resizeMode="cover"
              />
            </View>
          </View>

          <View style={S.actionsGroup}>
            <Pressable
              onPress={handleSubscribe}
              style={({ pressed }) => [
                S.subscribePill,
                subscribed ? S.subscribePillSub : S.subscribePillUnsub,
                { opacity: pressed ? 0.88 : 1 },
              ]}
            >
              <Animated.View style={[S.subscribePillInner, { transform: [{ scale: btnScale }] }]}>
                <Text style={subscribed ? S.subscribeLabelSub : S.subscribeLabel}>
                  {subscribed ? "Subscribed" : "Subscribe"}
                </Text>
              </Animated.View>
            </Pressable>

            {subscribed && (
              <Pressable
                onPress={() => setPopupVisible(true)}
                style={({ pressed }) => [
                  S.bellButton,
                  { opacity: pressed ? 0.8 : 1 },
                ]}
              >
                <Ionicons
                  name={bellIconName}
                  size={16}
                  color="rgba(255,255,255,0.7)"
                />
              </Pressable>
            )}
          </View>
        </View>

        {/* row 2: name */}
        <Text style={S.displayName} numberOfLines={1}>{name}</Text>

        {/* row 3: @handle • subs */}
        <View style={S.metaRow}>
          <Text style={S.handle}>{handle}</Text>
          <Text style={S.metaDot}>•</Text>
          <Text style={S.subsText}>
            <Text style={S.subsCount}>{subs}</Text> {subLabel}
          </Text>
        </View>

        {/* row 4: bio */}
        <Text style={S.bio} numberOfLines={2}>{bio}</Text>
      </Animated.View>

      {/* notification popup */}
      <Modal
        visible={popupVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setPopupVisible(false)}
      >
        <Pressable style={S.popupBackdrop} onPress={() => setPopupVisible(false)}>
          <View style={S.popupCard}>
            <Text style={S.popupTitle}>Notifications</Text>
            {NOTIF_OPTIONS.map((opt) => (
              <Pressable
                key={opt.key}
                onPress={() => selectNotif(opt.key)}
                style={({ pressed }) => [
                  S.popupRow,
                  notifMode === opt.key && S.popupRowActive,
                  { opacity: pressed ? 0.8 : 1 },
                ]}
              >
                <Ionicons
                  name={opt.icon}
                  size={18}
                  color={notifMode === opt.key ? "#ff5e00" : "rgba(255,255,255,0.6)"}
                  style={S.popupIcon}
                />
                <Text
                  style={[
                    S.popupLabel,
                    notifMode === opt.key && S.popupLabelActive,
                  ]}
                >
                  {opt.label}
                </Text>
                {notifMode === opt.key && (
                  <Ionicons name="checkmark" size={16} color="#ff5e00" />
                )}
              </Pressable>
            ))}
          </View>
        </Pressable>
      </Modal>
    </View>
  );
}
