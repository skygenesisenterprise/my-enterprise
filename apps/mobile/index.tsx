import * as React from "react";

import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

import { ScreenTransition } from "@/components/mobile/screen-transition";
import { usePhoneSafeAreaInsets } from "@/components/mobile/use-phone-safe-area";

const quickActions = [
  {
    title: "Approve",
    subtitle: "Login approval",
    icon: "verified-user" as React.ComponentProps<typeof MaterialIcons>["name"],
  },
  {
    title: "Post",
    subtitle: "Share update",
    icon: "edit-note" as React.ComponentProps<typeof MaterialIcons>["name"],
  },
  {
    title: "Office",
    subtitle: "Aether Office",
    icon: "workspaces" as React.ComponentProps<typeof MaterialIcons>["name"],
  },
  {
    title: "Support",
    subtitle: "Internal help",
    icon: "support-agent" as React.ComponentProps<typeof MaterialIcons>["name"],
  },
];

const companyUpdates = [
  "Aether Office internal preview is now available",
  "Aether Identity mobile approval enters prototype phase",
  "SGE Japan workspace planning has started",
];

const favoriteServices = [
  { title: "Office", icon: "dashboard" as React.ComponentProps<typeof MaterialIcons>["name"] },
  { title: "Mail", icon: "mail-outline" as React.ComponentProps<typeof MaterialIcons>["name"] },
  { title: "Bank", icon: "account-balance" as React.ComponentProps<typeof MaterialIcons>["name"] },
  { title: "Identity", icon: "fingerprint" as React.ComponentProps<typeof MaterialIcons>["name"] },
];

export default function HomeScreen() {
  const insets = usePhoneSafeAreaInsets();
  return (
    <ScreenTransition>
    <View style={styles.safeArea}>
      <ScrollView contentContainerStyle={[styles.content, { paddingTop: insets.top + 12 }]} showsVerticalScrollIndicator={false}>
        <View style={styles.profileRow}>
          <View>
            <Text style={styles.greeting}>Good morning</Text>
            <Text style={styles.name}>Liam Dispa</Text>
            <Text style={styles.role}>Founder & CEO</Text>
            <View style={styles.presenceRow}>
              <View style={styles.presenceDot} />
              <Text style={styles.presenceText}>Online · SGE Belgium</Text>
            </View>
          </View>
          <View style={styles.headerActions}>
            <SettingsButton />
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>LD</Text>
            </View>
          </View>
        </View>

        <Pressable style={styles.identityCard}>
          <View style={styles.identityTop}>
            <View style={styles.identityIcon}>
              <MaterialIcons name="badge" size={31} color="#FFFFFF" />
            </View>
            <View style={styles.identityCopy}>
              <Text style={styles.identityTitle}>My Enterprise ID</Text>
              <Text style={styles.identitySubtitle}>Aether Identity verified</Text>
              <Text style={styles.identityWorkspace}>Workspace: Sky Genesis Enterprise</Text>
            </View>
            <MaterialIcons name="chevron-right" size={26} color="#BFE0FF" />
          </View>
          <View style={styles.identityDivider} />
          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>2</Text>
              <Text style={styles.statLabel}>Approvals</Text>
            </View>
            <View style={[styles.statItem, styles.statDivider]}>
              <Text style={styles.statValue}>7</Text>
              <Text style={styles.statLabel}>Updates</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>12</Text>
              <Text style={styles.statLabel}>Services</Text>
            </View>
          </View>
        </Pressable>

        <SectionHeader title="Quick Actions" />
        <View style={styles.quickGrid}>
          {quickActions.map((action) => (
            <Pressable key={action.title} style={styles.quickCard}>
              <View style={styles.quickIcon}>
                <MaterialIcons name={action.icon} size={25} color="#007AFF" />
              </View>
              <Text style={styles.quickText}>{action.title}</Text>
              <Text style={styles.quickSubtext}>{action.subtitle}</Text>
            </Pressable>
          ))}
        </View>

        <SectionHeader title="Pending Approvals" />
        <View style={styles.approvalCard}>
          <View style={styles.approvalTop}>
            <View style={styles.approvalIcon}>
              <MaterialIcons name="login" size={24} color="#007AFF" />
            </View>
            <View style={styles.approvalCopy}>
              <View style={styles.approvalTitleRow}>
                <Text style={styles.approvalTitle}>Aether Office sign-in</Text>
                <View style={styles.waitingBadge}>
                  <Text style={styles.waitingText}>Waiting</Text>
                </View>
              </View>
              <Text style={styles.approvalSubtitle}>Firefox on Linux · Liège, Belgium</Text>
            </View>
          </View>
          <View style={styles.approvalDivider} />
          <View style={styles.approvalMetaRow}>
            <View>
              <Text style={styles.metaLabel}>Requested today</Text>
              <Text style={styles.metaValue}>09:42</Text>
            </View>
            <View style={styles.approvalButtons}>
              <Pressable style={styles.rejectButton}>
                <Text style={styles.rejectText}>Reject</Text>
              </Pressable>
              <Pressable style={styles.approveButton}>
                <Text style={styles.approveText}>Approve</Text>
              </Pressable>
            </View>
          </View>
        </View>

        <SectionHeader title="From the Network" />
        <View style={styles.networkCard}>
          <View style={styles.networkHeader}>
            <View style={styles.networkAvatar}>
              <Text style={styles.networkAvatarText}>ML</Text>
            </View>
            <View>
              <Text style={styles.networkAuthor}>Mathis Luymoyen</Text>
              <Text style={styles.networkContext}>Posted in #company</Text>
            </View>
          </View>
          <Text style={styles.networkMessage}>
            Working on the next internal dashboard structure for My Enterprise.
          </Text>
          <View style={styles.networkActions}>
            <NetworkAction icon="thumb-up-off-alt" label="Like" />
            <NetworkAction icon="chat-bubble-outline" label="Reply" />
            <NetworkAction icon="ios-share" label="Share" />
          </View>
        </View>

        <SectionHeader title="Company Updates" action="See All" />
        <View style={styles.updateList}>
          {companyUpdates.map((update) => (
            <Pressable key={update} style={styles.updateCard}>
              <View style={styles.updateIcon}>
                <MaterialIcons name="campaign" size={21} color="#007AFF" />
              </View>
              <Text style={styles.updateTitle}>{update}</Text>
            </Pressable>
          ))}
        </View>

        <SectionHeader title="Your Services" />
        <View style={styles.servicesGrid}>
          {favoriteServices.map((service) => (
            <Pressable key={service.title} style={styles.serviceCard}>
              <MaterialIcons name={service.icon} size={23} color="#007AFF" />
              <Text style={styles.serviceText}>{service.title}</Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </View>
    </ScreenTransition>
  );
}

function SettingsButton() {
  return (
    <Pressable style={styles.settingsButton} onPress={() => router.push("/settings")}>
      <MaterialIcons name="tune" size={21} color="#111827" />
    </Pressable>
  );
}

function SectionHeader({ action, title }: { action?: string; title: string }) {
  return (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {action ? <Text style={styles.seeAll}>{action}</Text> : null}
    </View>
  );
}

function NetworkAction({
  icon,
  label,
}: {
  icon: React.ComponentProps<typeof MaterialIcons>["name"];
  label: string;
}) {
  return (
    <Pressable style={styles.networkAction}>
      <MaterialIcons name={icon} size={17} color="#6B7280" />
      <Text style={styles.networkActionText}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F5F5F7",
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 116,
  },
  profileRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 22,
  },
  greeting: {
    color: "#6B7280",
    fontSize: 15,
    lineHeight: 20,
    fontWeight: "500",
  },
  name: {
    color: "#05070A",
    fontSize: 27,
    lineHeight: 32,
    fontWeight: "800",
  },
  role: {
    color: "#374151",
    fontSize: 15,
    lineHeight: 20,
    fontWeight: "600",
    marginTop: 2,
  },
  presenceRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginTop: 7,
  },
  presenceDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#22C55E",
  },
  presenceText: {
    color: "#6B7280",
    fontSize: 13,
    lineHeight: 17,
    fontWeight: "600",
  },
  headerActions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  settingsButton: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 23,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#007AFF",
  },
  avatarText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "900",
  },
  identityCard: {
    borderRadius: 20,
    padding: 20,
    marginBottom: 26,
    backgroundColor: "#087BEA",
  },
  identityTop: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  identityIcon: {
    width: 52,
    height: 52,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.18)",
  },
  identityCopy: {
    flex: 1,
  },
  identityTitle: {
    color: "#FFFFFF",
    fontSize: 19,
    lineHeight: 23,
    fontWeight: "900",
  },
  identitySubtitle: {
    color: "#D8EBFF",
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "700",
  },
  identityWorkspace: {
    color: "#D8EBFF",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    marginTop: 1,
  },
  identityDivider: {
    height: 1,
    marginVertical: 18,
    backgroundColor: "rgba(255, 255, 255, 0.22)",
  },
  statsRow: {
    flexDirection: "row",
  },
  statItem: {
    flex: 1,
    alignItems: "center",
  },
  statDivider: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.22)",
  },
  statValue: {
    color: "#FFFFFF",
    fontSize: 22,
    lineHeight: 26,
    fontWeight: "900",
  },
  statLabel: {
    color: "#D8EBFF",
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "600",
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 14,
  },
  sectionTitle: {
    color: "#05070A",
    fontSize: 22,
    lineHeight: 27,
    fontWeight: "800",
  },
  seeAll: {
    color: "#007AFF",
    fontSize: 15,
    lineHeight: 20,
    fontWeight: "700",
  },
  quickGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 28,
  },
  quickCard: {
    width: "23%",
    minHeight: 112,
    alignItems: "center",
    justifyContent: "center",
    gap: 7,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 14,
    backgroundColor: "#FFFFFF",
  },
  quickIcon: {
    width: 40,
    height: 40,
    borderRadius: 11,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EAF4FF",
  },
  quickText: {
    color: "#111827",
    textAlign: "center",
    fontSize: 12,
    lineHeight: 15,
    fontWeight: "900",
  },
  quickSubtext: {
    color: "#6B7280",
    textAlign: "center",
    fontSize: 10,
    lineHeight: 13,
    fontWeight: "600",
  },
  approvalCard: {
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 16,
    padding: 16,
    marginBottom: 28,
    backgroundColor: "#FFFFFF",
  },
  approvalTop: {
    flexDirection: "row",
    gap: 12,
  },
  approvalIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EAF4FF",
  },
  approvalCopy: {
    flex: 1,
    gap: 3,
  },
  approvalTitleRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 10,
  },
  approvalTitle: {
    flex: 1,
    color: "#05070A",
    fontSize: 17,
    lineHeight: 22,
    fontWeight: "900",
  },
  approvalSubtitle: {
    color: "#6B7280",
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "600",
  },
  waitingBadge: {
    borderRadius: 999,
    paddingHorizontal: 9,
    paddingVertical: 5,
    backgroundColor: "#FFF3E1",
  },
  waitingText: {
    color: "#B56A00",
    fontSize: 12,
    lineHeight: 14,
    fontWeight: "800",
  },
  approvalDivider: {
    height: 1,
    marginVertical: 14,
    backgroundColor: "#E5E7EB",
  },
  approvalMetaRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 14,
  },
  metaLabel: {
    color: "#6B7280",
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "500",
  },
  metaValue: {
    color: "#05070A",
    fontSize: 15,
    lineHeight: 20,
    fontWeight: "900",
  },
  approvalButtons: {
    flexDirection: "row",
    gap: 10,
  },
  rejectButton: {
    height: 38,
    minWidth: 72,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 11,
    backgroundColor: "#FFFFFF",
  },
  rejectText: {
    color: "#374151",
    fontSize: 14,
    fontWeight: "800",
  },
  approveButton: {
    height: 38,
    minWidth: 86,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 11,
    backgroundColor: "#007AFF",
  },
  approveText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "900",
  },
  networkCard: {
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 16,
    padding: 16,
    marginBottom: 28,
    backgroundColor: "#FFFFFF",
  },
  networkHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 11,
    marginBottom: 13,
  },
  networkAvatar: {
    width: 38,
    height: 38,
    borderRadius: 19,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#111827",
  },
  networkAvatarText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "900",
  },
  networkAuthor: {
    color: "#05070A",
    fontSize: 15,
    lineHeight: 20,
    fontWeight: "900",
  },
  networkContext: {
    color: "#6B7280",
    fontSize: 13,
    lineHeight: 17,
    fontWeight: "600",
  },
  networkMessage: {
    color: "#111827",
    fontSize: 15,
    lineHeight: 22,
    fontWeight: "500",
    marginBottom: 14,
  },
  networkActions: {
    flexDirection: "row",
    gap: 18,
  },
  networkAction: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  networkActionText: {
    color: "#6B7280",
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "700",
  },
  updateList: {
    gap: 10,
    marginBottom: 28,
  },
  updateCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 15,
    padding: 14,
    backgroundColor: "#FFFFFF",
  },
  updateIcon: {
    width: 38,
    height: 38,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EAF4FF",
  },
  updateTitle: {
    flex: 1,
    color: "#05070A",
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "800",
  },
  servicesGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  serviceCard: {
    width: "23%",
    height: 76,
    alignItems: "center",
    justifyContent: "center",
    gap: 7,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 15,
    backgroundColor: "#FFFFFF",
  },
  serviceText: {
    color: "#111827",
    fontSize: 12,
    lineHeight: 15,
    fontWeight: "800",
  },
});
