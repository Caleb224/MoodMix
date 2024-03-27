import { Pressable, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "moti";
import { FontAwesome6 } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { Surface } from "react-native-paper";

export default function ProfileScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <SafeAreaView className="w-full flex-1 items-center justify-start">
        <ScrollView className="w-full flex-1 px-5">
          <Surface className="w-full flex-1 bg-transparent" elevation={2}>
            <View className="flex w-full flex-col items-center justify-center rounded-xl bg-secondary py-3">
              <Text className="text-xl font-semibold text-text">Profile</Text>
              <Pressable className="flex items-center justify-center rounded-full py-3">
                <FontAwesome6 name="user-circle" size={82} color="#C6DE41" />
              </Pressable>
              <Text className="text-xl font-semibold text-text">Username</Text>
            </View>
          </Surface>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
