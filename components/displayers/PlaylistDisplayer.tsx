import PlayList from "@/lib/types/Playlist";
import { useNavigation } from "expo-router";
import { ImageBackground, Pressable, Text, View } from "react-native";
import React from "react";

export default function PlaylistDisplayer({
  playlist,
}: {
  playlist: PlayList;
}) {
  const { navigate } = useNavigation();

  return (
    <Pressable
      className="flex w-full flex-row items-center justify-between overflow-hidden rounded-xl bg-secondary p-4"
      style={{ maxWidth: 300, maxHeight: 144 }}
      onPress={() => navigate("stackscreens/PlaylistScreen", { playlist })}
    >
      <ImageBackground
        className="h-28 w-28 rounded-xl bg-primary bg-cover"
        source={{ uri: playlist.displayImageURI }}
        imageStyle={{ borderRadius: 10 }}
      />
      <Text className="text-md flex-1 flex-wrap self-start p-3 font-bold text-text">
        {playlist.name}
      </Text>
    </Pressable>
  );
}
