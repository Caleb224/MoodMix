import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";

import HomeScreen from ".";
import ProfileScreen from "./two";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color?: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

/*  Third Party Tab Navigation
 *   https://github.com/torgeadelin/react-native-animated-nav-tab-bar?tab=readme-ov-file
 */
const Tabs = AnimatedTabBarNavigator();

export default function TabLayout() {
  return (
    <Tabs.Navigator
      appearance={{
        floating: true,
        tabBarBackground: "rgba(228, 241, 255, 0.5)",
        activeTabBackgrounds: "#AED2FF",
        shadow: true,
        whenActiveShow: "icon-only",
        whenInactiveShow: "icon-only",
        dotSize: "small",
      }}
      tabBarOptions={{
        activeTintColor: "#FFF",
        inactiveTintColor: "#FFF",
        tabStyle: {
          position: "absolute",
          bottom: 20,
        },
      }}
    >
      <Tabs.Screen
        name="Home2"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }: any) => (
            <FontAwesome
              name="home"
              size={size ? size : 24}
              color={focused ? color : "#222222"}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Home3"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }: any) => (
            <FontAwesome
              name="home"
              size={size ? size : 24}
              color={focused ? color : "#222222"}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }: any) => (
            <FontAwesome
              name="home"
              size={size ? size : 24}
              color={focused ? color : "#222222"}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }: any) => (
            <FontAwesome
              name="user-circle"
              size={size ? size : 24}
              color={focused ? color : "#222222"}
              focused={focused}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}
