import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import HomeScreen from ".";
import ProfileScreen from "./two";
import InitialScreen from "@/components/Screens/InitialScreen";

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
  const [appOpenedBefore, setAppOpenedBefore] = useState(false);

  useEffect(() => {
    const checkIfOpenedBefore = async () => {
      try {
        const value = await AsyncStorage.getItem("appOpenedBefore");
        if (value !== null) {
          setAppOpenedBefore(true);
          console.log("Found:", value);
        }
      } catch (error) {
        console.error("Unable to retrieve data from async storage:", error);
      }
    };

    checkIfOpenedBefore();
  }, []);

  if (!appOpenedBefore) {
    return <InitialScreen onComplete={() => setAppOpenedBefore(true)} />;
  }

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
