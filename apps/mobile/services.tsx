import * as React from "react";

import { MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import { MobileTokens } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";

export default function ServicesScreen() {
  const theme = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={[styles.card, { backgroundColor: theme.card, borderColor: theme.border }]}>
        <MaterialIcons name="dashboard-customize" size={42} color={theme.primary} />
        <Text style={[styles.title, { color: theme.text }]}>Catalogue de services</Text>
        <Text style={[styles.body, { color: theme.textSecondary }]}>
          Vous pouvez brancher ici les demandes IT, RH, finance et administratif avec la meme
          direction visuelle que l&apos;accueil.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F5FA",
    padding: 24,
    justifyContent: "center",
  },
  card: {
    borderRadius: MobileTokens.radius.lg,
    borderWidth: 1,
    padding: 28,
    alignItems: "center",
    gap: 12,
    ...MobileTokens.shadow.card,
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
  },
});
