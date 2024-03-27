import { SafeAreaView } from "moti";
import { View } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
// import PlayList from "@/lib/types/playlist";
import SongDisplayer from "@/components/displayers/SongDisplayer";
import Song from "@/lib/types/Song";

const test_songs: Song[] = [
  {
    name: "",
    artist: "",
    album: null,
    imageURI: "",
  },
  {
    name: "",
    artist: "",
    album: null,
    imageURI: "",
  },
  {
    name: "",
    artist: "",
    album: null,
    imageURI: "",
  },
  {
    name: "",
    artist: "",
    album: null,
    imageURI: "",
  },
  {
    name: "",
    artist: "",
    album: null,
    imageURI: "",
  },
  {
    name: "",
    artist: "",
    album: null,
    imageURI: "",
  },
  {
    name: "",
    artist: "",
    album: null,
    imageURI: "",
  },
  {
    name: "",
    artist: "",
    album: null,
    imageURI: "",
  },
  {
    name: "",
    artist: "",
    album: null,
    imageURI: "",
  },
  {
    name: "",
    artist: "",
    album: null,
    imageURI: "",
  },
  {
    name: "",
    artist: "",
    album: null,
    imageURI: "",
  },
];

export default function PlayListScreen({ route }: any) {
  // const { playlist } = route?.params;

  return (
    <View className="flex flex-1 items-center justify-start bg-background py-2">
      <SafeAreaView className="w-full">
        <FlatList
          data={test_songs}
          keyExtractor={(item: Song) => item.artist + item.name}
          renderItem={(item) => {
            let song = item.item;
            return <SongDisplayer song={song} />;
          }}
        />
      </SafeAreaView>
    </View>
  );
}
