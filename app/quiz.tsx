import React from "react";
import { Slider } from "@miblanchard/react-native-slider";
import { AnimatePresence, MotiText, MotiView, ScrollView } from "moti";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { Surface } from "react-native-paper";
import { useParameters } from "@/providers/ParametersProvider";

let emotions = [
  "Euphoria",
  "Melancholy",
  "Serenity",
  "Awe",
  "Anticipation",
  "Contentment",
  "Envy",
  "Gratitude",
  "Nostalgia",
  "Amusement",
  "Dread",
  "Empathy",
  "Ambivalence",
  "Zeal",
  "Resentment",
  "Confusion",
  "Bliss",
  "Disgust",
  "Fascination",
  "Regret",
  "Triumph",
  "Longing",
  "Shame",
  "Adoration",
];

export default function ModalScreen() {

  const {emotion, updateEmotion, mood, updateMood, energy, updateEnergy, tempo, updateTempo} = useParameters();
  
  return (
    <ScrollView
      className="flex-1 overflow-hidden bg-background p-5"
      contentContainerStyle={{
        alignItems: "flex-start",
        justifyContent: "center",
      }}
    >
      <AnimatePresence>
        <View className="flex flex-row items-center mb-6">
          <Text className="text-2xl font-bold text-text">
            What{" "}
            <MotiView
              from={{ translateY: 0 }}
              animate={{ translateY: 3 }}
              transition={{
                loop: true,
                duration: 1000,
                delay: 100,
                type: "timing",
              }}
              className="inline-block"
            >
              <Text className="text-2xl font-bold text-primary">emotion</Text>
            </MotiView>{" "}
            are you feeling right now?
          </Text>
        </View>
      </AnimatePresence>
      <Surface
        className="my-3 flex flex-row flex-wrap items-center justify-center gap-2 bg-transparent"
        elevation={2}
      >
        {emotions.map((emotionTemp) => (
          <Pressable
            onPress={() => updateEmotion(emotionTemp)}
            className="mx-2 rounded-xl px-4 py-1"
            style={{
              backgroundColor:
                emotionTemp === emotion ? "#C6DE41" : "#2D6E7E",
            }}
            key={emotionTemp}
          >
            <Text
              className="text-md font-semibold"
              style={{
                color: emotionTemp === emotion ? "#153B44" : "#fff",
              }}
            >
              {emotionTemp}
            </Text>
          </Pressable>
        ))}
      </Surface>
      <Surface className="w-full bg-transparent" elevation={2}>
        <Text className="my-3 text-2xl font-bold text-text">
          Generation Parameters
        </Text>
        <View className="mb-28 flex h-min w-full flex-col items-center justify-start rounded-xl bg-secondary">
          <View className="w-full p-5">
            <Text className="text-lg font-semibold text-text">
              Mood:{" "}
              <Text className="text-lg font-light text-primary">
                {mood[0].toPrecision(1)}
              </Text>
            </Text>
            <View className="flex flex-row items-center justify-center">
              <Text className="text-lg font-semibold text-text">0</Text>
              <Slider
                value={mood}
                onValueChange={(value) => updateMood(value)}
                step={0.1}
                containerStyle={{ width: "80%", marginHorizontal: 20 }}
                trackStyle={{ backgroundColor: "#153B44" }}
                minimumTrackTintColor="#C6DE41"
                thumbTintColor="#C6DE41"
              />
              <Text className="text-lg font-semibold text-text">1</Text>
            </View>
          </View>
          <View className="w-full p-5">
            <Text className="text-lg font-semibold text-text">
              Energy:{" "}
              <Text className="text-lg font-light text-primary">
                {energy[0].toPrecision(1)}
              </Text>
            </Text>
            <View className="flex flex-row items-center justify-center">
              <Text className="text-lg font-semibold text-text">0</Text>
              <Slider
                value={energy}
                onValueChange={(value) => updateEnergy(value)}
                step={0.1}
                containerStyle={{ width: "80%", marginHorizontal: 20 }}
                trackStyle={{ backgroundColor: "#153B44" }}
                minimumTrackTintColor="#C6DE41"
                thumbTintColor="#C6DE41"
              />
              <Text className="text-lg font-semibold text-text">1</Text>
            </View>
          </View>
          <View className="w-full p-5">
            <Text className="text-lg font-semibold text-text">
              Tempo:{" "}
              <Text className="text-lg font-light text-primary">
                {tempo[0].toPrecision(1)}
              </Text>
            </Text>
            <View className="flex flex-row items-center justify-center">
              <Text className="text-lg font-semibold text-text">0</Text>
              <Slider
                value={tempo}
                onValueChange={(value) => updateTempo(value)}
                step={0.1}
                containerStyle={{ width: "80%", marginHorizontal: 20 }}
                trackStyle={{ backgroundColor: "#153B44" }}
                minimumTrackTintColor="#C6DE41"
                thumbTintColor="#C6DE41"
              />
              <Text className="text-lg font-semibold text-text">1</Text>
            </View>
          </View>
        </View>
      </Surface>
    </ScrollView>
  );
}
