import * as React from "react";

import { MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Platform, StyleSheet, useColorScheme, View } from "react-native";

import "@/styles/globals.css";

import { Colors, MobileTokens } from "@/constants/theme";

interface TabIconProps {
  color: string;
  focused: boolean;
  name: React.ComponentProps<typeof MaterialIcons>["name"];
}

interface WebPhoneFrameProps {
  children: React.ReactNode;
}

function WebPhoneFrame({ children }: WebPhoneFrameProps) {
  if (Platform.OS !== "web") {
    return <>{children}</>;
  }

  return (
    <View style={styles.browserStage}>
      <View style={styles.phoneShell}>
        <View pointerEvents="none" style={styles.dynamicIsland} />
        <View style={styles.phoneScreen}>{children}</View>
      </View>
    </View>
  );
}

function TabIcon({ color, focused, name }: TabIconProps) {
  return (
    <View style={[styles.tabIconWrap, focused && styles.tabIconWrapActive]}>
      <MaterialIcons
        name={name}
        size={32}
        color={color}
        style={{
          opacity: focused ? 1 : 0.96,
          transform: [{ scale: focused ? 1.04 : 1 }],
        }}
      />
    </View>
  );
}

export default function MobileLayout() {
  const scheme = useColorScheme();
  const theme = Colors[scheme === "dark" ? "dark" : "light"];

  return (
    <WebPhoneFrame>
      <Tabs
        screenOptions={{
          headerShown: false,
          sceneStyle: {
            backgroundColor: theme.background,
          },
          tabBarActiveTintColor: "#168EEA",
          tabBarInactiveTintColor: "#080B10",
          tabBarLabelStyle: {
            fontSize: 12,
            lineHeight: 15,
            fontWeight: "700",
            marginTop: -9,
            marginBottom: 10,
          },
          tabBarStyle: {
            position: "absolute",
            left: 12,
            right: 12,
            bottom: 18,
            height: 82,
            paddingTop: 8,
            paddingBottom: 6,
            borderTopWidth: 0,
            borderRadius: MobileTokens.radius.pill,
            backgroundColor: "rgba(253, 254, 255, 0.9)",
            borderWidth: 1,
            borderColor: "rgba(222, 231, 242, 0.9)",
            ...MobileTokens.shadow.floating,
          },
          tabBarItemStyle: {
            borderRadius: MobileTokens.radius.pill,
            marginHorizontal: 2,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Accueil",
            tabBarIcon: ({ color, focused }) => (
              <TabIcon name="home-filled" color={color} focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="feed"
          options={{
            title: "Fil",
            tabBarIcon: ({ color, focused }) => (
              <TabIcon name="chat-bubble-outline" color={color} focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="services"
          options={{
            title: "Services",
            tabBarIcon: ({ color, focused }) => (
              <TabIcon name="grid-view" color={color} focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="notifications"
          options={{
            title: "Notifs",
            tabBarIcon: ({ color, focused }) => (
              <TabIcon name="notifications-none" color={color} focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profil",
            tabBarIcon: ({ color, focused }) => (
              <TabIcon name="account-circle" color={color} focused={focused} />
            ),
          }}
        />
      </Tabs>
    </WebPhoneFrame>
  );
}

const styles = StyleSheet.create({
  browserStage: {
    flex: 1,
    minHeight: "100vh",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#E8ECF3",
  },
  phoneShell: {
    width: "min(393px, calc(100vw - 32px))",
    height: "min(852px, calc(100vh - 32px))",
    minHeight: 640,
    padding: 10,
    borderRadius: 54,
    backgroundColor: "#111318",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.22)",
    shadowColor: "#111827",
    shadowOpacity: 0.28,
    shadowRadius: 40,
    shadowOffset: { width: 0, height: 24 },
  },
  phoneScreen: {
    flex: 1,
    overflow: "hidden",
    borderRadius: 44,
    backgroundColor: "#F8F7F4",
  },
  dynamicIsland: {
    position: "absolute",
    top: 22,
    alignSelf: "center",
    zIndex: 10,
    width: 126,
    height: 36,
    borderRadius: 999,
    backgroundColor: "#050608",
  },
  tabIconWrap: {
    width: 64,
    height: 44,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
  },
  tabIconWrapActive: {
    backgroundColor: "#DDE7F4",
  },
});
