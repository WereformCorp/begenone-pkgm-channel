import { Platform, StyleSheet } from "react-native";
import { COLORS } from "./channelTheme";

const AVATAR_SIZE = 68;
const AVATAR_OVERLAP = 26;

export const ChannelHeaderStyles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.bgBase,
  },

  bannerWrapper: {
    width: "100%",
    height: 110,
    backgroundColor: COLORS.bgElevated,
  },

  banner: {
    width: "100%",
    height: "100%",
  },

  body: {
    backgroundColor: COLORS.bgBase,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },

  /* row 1 */
  topRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    marginTop: -AVATAR_OVERLAP,
    marginBottom: 12,
  },

  avatarOuter: {
    width: AVATAR_SIZE + 4,
    height: AVATAR_SIZE + 4,
    borderRadius: (AVATAR_SIZE + 4) / 2,
    backgroundColor: COLORS.bgBase,
    alignItems: "center",
    justifyContent: "center",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.18,
        shadowRadius: 3,
      },
      android: { elevation: 2 },
    }),
  },

  avatarInner: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE / 2,
    overflow: "hidden",
  },

  avatarImage: {
    width: "100%",
    height: "100%",
  },

  actionsGroup: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 12,
  },

  subscribePill: {
    height: 34,
    paddingHorizontal: 22,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
  },

  subscribePillInner: {
    flexDirection: "row",
    alignItems: "center",
  },

  subscribePillUnsub: {
    backgroundColor: COLORS.accent,
  },

  subscribePillSub: {
    backgroundColor: "rgba(255,255,255,0.08)",
  },

  subscribeLabel: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "700",
  },

  subscribeLabelSub: {
    color: COLORS.textMuted,
    fontSize: 13,
    fontWeight: "600",
  },

  bellButton: {
    width: 34,
    height: 34,
    borderRadius: 999,
    backgroundColor: "rgba(255,255,255,0.08)",
    alignItems: "center",
    justifyContent: "center",
  },

  /* row 2: name */
  displayName: {
    color: COLORS.textPrimary,
    fontSize: 22,
    fontWeight: "800",
    letterSpacing: 0.3,
    marginBottom: 6,
  },

  /* row 3: handle + subs */
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  handle: {
    color: "rgba(255,255,255,0.4)",
    fontSize: 13,
    fontWeight: "500",
  },

  metaDot: {
    color: "rgba(255,255,255,0.2)",
    fontSize: 13,
    marginHorizontal: 8,
  },

  subsText: {
    color: COLORS.textMuted,
    fontSize: 13,
    fontWeight: "500",
  },

  subsCount: {
    fontWeight: "700",
    color: "rgba(255,255,255,0.75)",
  },

  /* row 4: bio */
  bio: {
    color: COLORS.textMuted,
    fontSize: 13,
    lineHeight: 19,
  },

  /* notification popup */
  popupBackdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.55)",
    justifyContent: "center",
    alignItems: "center",
  },

  popupCard: {
    width: 260,
    backgroundColor: "#1C1C1C",
    borderRadius: 14,
    paddingVertical: 12,
    paddingHorizontal: 6,
  },

  popupTitle: {
    color: COLORS.textPrimary,
    fontSize: 14,
    fontWeight: "700",
    paddingHorizontal: 12,
    paddingBottom: 10,
  },

  popupRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 11,
    paddingHorizontal: 12,
    borderRadius: 10,
  },

  popupRowActive: {
    backgroundColor: "rgba(255,94,0,0.08)",
  },

  popupIcon: {
    marginRight: 12,
  },

  popupLabel: {
    flex: 1,
    color: COLORS.textMuted,
    fontSize: 14,
    fontWeight: "500",
  },

  popupLabelActive: {
    color: COLORS.textPrimary,
    fontWeight: "600",
  },
});
