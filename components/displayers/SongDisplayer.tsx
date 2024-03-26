import Song from "@/lib/types/Song";
import { Text, View } from "moti";
import React from "react";
import { ImageBackground } from "react-native";

export default function SongDisplayer({song} : {song: Song}) {
  return (
    <View className="flex flex-row items-start max-w-full border-b border-secondary py-2">
      <View className="h-20 w-20 rounded-xl mx-5">
        <ImageBackground source={{uri: song?.imageURI | ""}} className="w-full h-full bg-primary rounded-xl" imageStyle={{borderRadius: 12}}/>
      </View>
      <View className="flex items-start justify-center w-8/12">
        <View className="flex flex-row w-full">
          <Text className="text-text font-bold text-lg text-ellipsis flex-1 shrink">
            {song.name}
          </Text>
        </View>
        <Text className="text-text font-semibold text-sm">
          {song.artist}
        </Text>
      </View>
    </View>
  )
}