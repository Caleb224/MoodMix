import Song from "@/lib/types/Song";
import { Text, View } from "moti";
import React from "react";
import { ImageBackground } from "react-native";

export default function SongDisplayer({ song }: { song: Song }) {
  return (
    <View className="flex max-w-full flex-row items-start border-b border-secondary py-2">
      <View className="mx-5 h-20 w-20 rounded-xl">
        <ImageBackground
          source={{ uri: song?.imageURI }}
          className="h-full w-full rounded-xl bg-primary"
          imageStyle={{ borderRadius: 12 }}
        />
      </View>
      <View className="flex w-8/12 items-start justify-center">
        <View className="flex w-full flex-row">
          <Text className="flex-1 shrink text-ellipsis text-lg font-bold text-text">
            {song.name}
          </Text>
        </View>
        <Text className="text-sm font-semibold text-text">{song.artist}</Text>
      </View>
    </View>
  );
}
