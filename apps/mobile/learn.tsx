import * as React from "react";

import { ScrollView, StyleSheet, Text, View } from "react-native";

import { GuideCard, MobileScreen, SectionHeader, StatusBadge } from "@/components/mobile/developer-ui";
import { guideCategories, guides } from "@/data/developer";

export default function LearnScreen() {
  return (
    <MobileScreen
      eyebrow="Learn"
      title="Developer Guides"
      subtitle="Short tutorials for APIs, SDKs, publishing, Guilderia, and security."
    >
      <SectionHeader title="Categories" />
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoryRow}>
        {guideCategories.map((category) => (
          <StatusBadge key={category} label={category} tone="blue" />
        ))}
      </ScrollView>

      <SectionHeader title="Featured Lessons" />
      {guides.map((guide) => (
        <GuideCard key={guide.id} guide={guide} />
      ))}

      <View style={styles.note}>
        <Text style={styles.noteText}>All lessons are mocked for this mobile prototype. No backend is connected.</Text>
      </View>
    </MobileScreen>
  );
}

const styles = StyleSheet.create({
  categoryRow: {
    gap: 8,
    paddingRight: 20,
  },
  note: {
    borderRadius: 20,
    padding: 14,
    backgroundColor: "#EEF4FF",
  },
  noteText: {
    color: "#365C9F",
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "700",
  },
});
