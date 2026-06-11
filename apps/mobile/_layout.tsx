import * as React from "react";

import { MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Platform, StyleSheet, useColorScheme, View, ViewStyle } from "react-native";

import "@/styles/globals.css";

import { PushNotificationManager } from "@/components/mobile/push-notification-manager";
import { Colors } from "@/constants/theme";

interface TabIconProps {
  color: React.ComponentProps<typeof MaterialIcons>["color"];
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
    <View style={styles.browserStage as ViewStyle}>
      <View style={styles.phoneShell as ViewStyle}>
        <View style={[styles.dynamicIsland as ViewStyle, { pointerEvents: "none" as const }]} />
        <View style={styles.phoneScreen as ViewStyle}>{children}</View>
      </View>
    </View>
  );
}

function TabIcon({ color, focused, name }: TabIconProps) {
  return (
    <View style={[styles.tabIconWrap as ViewStyle, focused && styles.tabIconWrapActive as ViewStyle]}>
      <MaterialIcons
        name={name}
        size={24}
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
    <PushNotificationManager>
      <WebPhoneFrame>
        <Tabs
        screenOptions={{
          headerShown: false,
          sceneStyle: {
            backgroundColor: theme.background,
          },
          tabBarActiveTintColor: "#007AFF",
          tabBarInactiveTintColor: "#6B7280",
          tabBarLabelStyle: {
            fontSize: 10,
            lineHeight: 12,
            fontWeight: "600",
            marginTop: 0,
            marginBottom: 4,
          },
          tabBarStyle: {
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: 74,
            paddingTop: 6,
            paddingBottom: 8,
            borderTopWidth: 1,
            borderTopColor: "#D1D5DB",
            borderRadius: 0,
            backgroundColor: "rgba(255, 255, 255, 0.96)",
          },
          tabBarItemStyle: {
            borderRadius: 0,
            marginHorizontal: 2,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color, focused }) => (
              <TabIcon name="home-filled" color={color} focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="feed"
          options={{
            title: "Feed",
            tabBarIcon: ({ color, focused }) => (
              <TabIcon name="dynamic-feed" color={color} focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="chat/index"
          options={{
            title: "Chat",
            tabBarIcon: ({ color, focused }) => (
              <TabIcon name="chat-bubble-outline" color={color} focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="services/index"
          options={{
            title: "Services",
            tabBarIcon: ({ color, focused }) => (
              <TabIcon name="grid-view" color={color} focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ color, focused }) => (
              <TabIcon name="account-circle" color={color} focused={focused} />
            ),
          }}
        />
        <Tabs.Screen name="discover" options={{ href: null }} />
        <Tabs.Screen name="learn" options={{ href: null }} />
        <Tabs.Screen name="apps" options={{ href: null }} />
        <Tabs.Screen name="account" options={{ href: null }} />
        <Tabs.Screen name="chat/[id]" options={{ href: null }} />
        <Tabs.Screen name="services/[id]" options={{ href: null }} />
        <Tabs.Screen name="notifications" options={{ href: null }} />
        <Tabs.Screen name="_dashboard" options={{ href: null }} />
        <Tabs.Screen name="program" options={{ href: null }} />
        <Tabs.Screen name="news-detail" options={{ href: null }} />
        <Tabs.Screen name="product-detail" options={{ href: null }} />
        <Tabs.Screen name="guilderia-developer" options={{ href: null }} />
        <Tabs.Screen name="app-detail" options={{ href: null }} />
        <Tabs.Screen name="settings" options={{ href: null }} />
        <Tabs.Screen
          name="login"
          options={{
            href: null,
            tabBarStyle: {
              display: "none",
            },
          }}
        />
        <Tabs.Screen
          name="register"
          options={{
            href: null,
            tabBarStyle: {
              display: "none",
            },
          }}
        />
        </Tabs>
      </WebPhoneFrame>
    </PushNotificationManager>
  );
}

const styles = StyleSheet.create({
  browserStage: {
    flex: 1,
    minHeight: "100vh" as any,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#E8ECF3",
  },
  phoneShell: {
    width: "min(393px, calc(100vw - 32px))" as any,
    height: "min(852px, calc(100vh - 32px))" as any,
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
    width: 34,
    height: 30,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  tabIconWrapActive: {
    backgroundColor: "transparent",
  },
});
