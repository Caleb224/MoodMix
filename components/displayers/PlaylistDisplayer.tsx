import PlayList from "@/lib/types/Playlist";
import { useNavigation } from "expo-router";
import { ImageBackground, Pressable, Text, View } from "react-native";
import React from "react";

export default function PlaylistDisplayer({playlist} : {playlist: PlayList}) {
  const { navigate } = useNavigation();

  return (
    <Pressable className="flex flex-row items-center justify-between bg-secondary rounded-xl p-4 overflow-hidden w-full" style={{maxWidth: 300, maxHeight: 144}} onPress={() => navigate("stackscreens/PlaylistScreen", {playlist})}>
      <ImageBackground className="h-28 w-28 bg-primary rounded-xl bg-cover" source={{uri: playlist.displayImageURI}} imageStyle={{borderRadius: 10}}/>
      <Text className="text-text self-start font-bold text-md p-3 flex-1 flex-wrap">{playlist.name}</Text>
    </Pressable>
  )
}