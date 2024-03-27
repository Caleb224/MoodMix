import CollectionDisplayer from "@/components/displayers/CollectionDisplayer";
import { FontAwesome6 } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { MotiView, SafeAreaView } from "moti";
import { MotiPressable } from "moti/interactions";
import { Pressable, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Surface } from "react-native-paper";
import React, { useEffect } from "react";

export default function HomeScreen() {
  const { navigate } = useNavigation();

  return (
    <View className="flex flex-1 items-center justify-center bg-background">
      <SafeAreaView className="w-full flex-1 items-start justify-start">
        <Surface className="w-full bg-transparent px-3" elevation={2}>
          <MotiView className="flex h-16 w-full flex-row items-center justify-between rounded-xl bg-secondary px-3">
            <Pressable
              className="flex h-12 w-12 items-center justify-center rounded-full"
              onPress={() => navigate("profile")}
            >
              <FontAwesome6 name="user-circle" size={48} color="#C6DE41" />
            </Pressable>

            <MotiPressable
              from={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 100, type: "timing" }}
              onPress={() => navigate("quiz")}
            >
              <View className="flex h-12 items-center justify-center rounded-xl bg-primary px-4">
                <Text className="font-semibold text-secondary">
                  Update Mood
                </Text>
              </View>
            </MotiPressable>
          </MotiView>
        </Surface>
        <Text className="p-3 text-2xl font-bold text-text">Welcome back</Text>
        <Surface className="h-full w-full bg-transparent px-3">
          <ScrollView
            contentContainerStyle={{ alignItems: "center", width: "100%" }}
            style={{ width: "100%" }}
          >
            <CollectionDisplayer />
          </ScrollView>
        </Surface>
      </SafeAreaView>
      <StatusBar style="light" />
    </View>
  );
}
