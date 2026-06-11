import * as React from "react";

import { MaterialIcons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

type IconName = React.ComponentProps<typeof MaterialIcons>["name"];

const conversationNames: Record<string, { name: string; subtitle: string }> = {
  "aether-identity-team": {
    name: "Aether Identity Team",
    subtitle: "8 members · 4 online",
  },
  "executive-office": {
    name: "Executive Office",
    subtitle: "6 members · 3 online",
  },
  company: {
    name: "#company",
    subtitle: "Company-wide channel",
  },
};

export default function ChatDetailScreen() {
  const { id } = useLocalSearchParams<{ id?: string }>();
  const conversation = conversationNames[id ?? ""] ?? conversationNames["aether-identity-team"];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Pressable style={styles.headerButton} onPress={() => router.back()}>
          <MaterialIcons name="chevron-left" size={26} color="#0B1220" />
        </Pressable>
        <View style={styles.headerCopy}>
          <Text style={styles.title}>{conversation.name}</Text>
          <Text style={styles.subtitle}>{conversation.subtitle}</Text>
        </View>
        <Pressable style={styles.headerButton}>
          <MaterialIcons name="info-outline" size={22} color="#0B1220" />
        </Pressable>
      </View>

      <ScrollView contentContainerStyle={styles.messages} showsVerticalScrollIndicator={false}>
        <MessageBubble
          author="Liam"
          message="Can we prepare the mobile approval flow for testing?"
          side="right"
          time="09:38"
        />
        <MessageBubble
          author="Aether Identity Team"
          message="Push approval prototype is ready for review."
          side="left"
          time="09:40"
        />
        <MessageBubble
          author="Thomas"
          message="We should include trusted device metadata before approving sessions."
          side="left"
          time="09:41"
        />
        <SystemApprovalCard />
      </ScrollView>

      <ChatComposer conversationName={conversation.name.replace("#", "")} />
    </SafeAreaView>
  );
}

function MessageBubble({
  author,
  message,
  side,
  time,
}: {
  author: string;
  message: string;
  side: "left" | "right";
  time: string;
}) {
  const own = side === "right";

  return (
    <View style={[styles.messageWrap, own && styles.messageWrapRight]}>
      <Text style={[styles.messageAuthor, own && styles.messageAuthorRight]}>{author}</Text>
      <View style={[styles.messageBubble, own && styles.messageBubbleOwn]}>
        <Text style={[styles.messageText, own && styles.messageTextOwn]}>{message}</Text>
      </View>
      <Text style={[styles.messageTime, own && styles.messageTimeRight]}>{time}</Text>
    </View>
  );
}

function SystemApprovalCard() {
  return (
    <View style={styles.systemCard}>
      <View style={styles.systemHeader}>
        <View style={styles.systemIcon}>
          <MaterialIcons name="fingerprint" size={24} color="#168EEA" />
        </View>
        <View style={styles.systemCopy}>
          <Text style={styles.systemTitle}>Aether Identity Bot</Text>
          <Text style={styles.systemText}>New sign-in request from Firefox on Linux · Liège</Text>
        </View>
      </View>
      <View style={styles.systemActions}>
        <Pressable style={styles.rejectButton}>
          <Text style={styles.rejectText}>Reject</Text>
        </Pressable>
        <Pressable style={styles.approveButton}>
          <Text style={styles.approveText}>Approve</Text>
        </Pressable>
      </View>
    </View>
  );
}

function ChatComposer({ conversationName }: { conversationName: string }) {
  return (
    <View style={styles.composerWrap}>
      <View style={styles.composer}>
        <ComposerIcon icon="add" />
        <Text style={styles.composerText}>Message {conversationName}...</Text>
        <ComposerIcon icon="mic-none" />
        <View style={styles.sendButton}>
          <MaterialIcons name="send" size={18} color="#FFFFFF" />
        </View>
      </View>
    </View>
  );
}

function ComposerIcon({ icon }: { icon: IconName }) {
  return (
    <View style={styles.composerIcon}>
      <MaterialIcons name={icon} size={20} color="#667085" />
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F5F7FA",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#E4EAF1",
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 12,
    backgroundColor: "#FFFFFF",
  },
  headerButton: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#E4EAF1",
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
  },
  headerCopy: {
    flex: 1,
  },
  title: {
    color: "#0B1220",
    fontSize: 18,
    lineHeight: 23,
    fontWeight: "900",
  },
  subtitle: {
    color: "#667085",
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "600",
  },
  messages: {
    paddingHorizontal: 16,
    paddingTop: 18,
    paddingBottom: 22,
    gap: 14,
  },
  messageWrap: {
    maxWidth: "82%",
    alignSelf: "flex-start",
    gap: 4,
  },
  messageWrapRight: {
    alignSelf: "flex-end",
  },
  messageAuthor: {
    color: "#667085",
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "800",
  },
  messageAuthorRight: {
    textAlign: "right",
  },
  messageBubble: {
    borderWidth: 1,
    borderColor: "#E4EAF1",
    borderRadius: 18,
    borderTopLeftRadius: 6,
    paddingHorizontal: 14,
    paddingVertical: 11,
    backgroundColor: "#FFFFFF",
  },
  messageBubbleOwn: {
    borderColor: "#168EEA",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 6,
    backgroundColor: "#168EEA",
  },
  messageText: {
    color: "#0B1220",
    fontSize: 15,
    lineHeight: 21,
    fontWeight: "500",
  },
  messageTextOwn: {
    color: "#FFFFFF",
  },
  messageTime: {
    color: "#98A2B3",
    fontSize: 11,
    lineHeight: 15,
    fontWeight: "700",
  },
  messageTimeRight: {
    textAlign: "right",
  },
  systemCard: {
    borderWidth: 1,
    borderColor: "#DCEBFF",
    borderRadius: 20,
    padding: 15,
    backgroundColor: "#FFFFFF",
  },
  systemHeader: {
    flexDirection: "row",
    gap: 12,
  },
  systemIcon: {
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 14,
    backgroundColor: "#EAF4FF",
  },
  systemCopy: {
    flex: 1,
    gap: 3,
  },
  systemTitle: {
    color: "#0B1220",
    fontSize: 15,
    lineHeight: 20,
    fontWeight: "900",
  },
  systemText: {
    color: "#667085",
    fontSize: 13,
    lineHeight: 19,
    fontWeight: "600",
  },
  systemActions: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 10,
    marginTop: 14,
  },
  rejectButton: {
    height: 38,
    minWidth: 76,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#E4EAF1",
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
  },
  rejectText: {
    color: "#344054",
    fontSize: 14,
    fontWeight: "900",
  },
  approveButton: {
    height: 38,
    minWidth: 90,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    backgroundColor: "#168EEA",
  },
  approveText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "900",
  },
  composerWrap: {
    borderTopWidth: 1,
    borderTopColor: "#E4EAF1",
    paddingHorizontal: 14,
    paddingTop: 10,
    paddingBottom: 18,
    backgroundColor: "#FFFFFF",
  },
  composer: {
    minHeight: 46,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    borderWidth: 1,
    borderColor: "#E4EAF1",
    borderRadius: 23,
    paddingHorizontal: 8,
    backgroundColor: "#F8FAFC",
  },
  composerIcon: {
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
  },
  composerText: {
    flex: 1,
    color: "#667085",
    fontSize: 14,
    lineHeight: 19,
    fontWeight: "600",
  },
  sendButton: {
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    backgroundColor: "#168EEA",
  },
});
