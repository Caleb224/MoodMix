import { SafeAreaView } from "moti";
import { Pressable, View } from "react-native";
import React, { useEffect } from "react";
import { FlatList } from "react-native-gesture-handler";
// import PlayList from "@/lib/types/playlist";
import SongDisplayer from "@/components/displayers/SongDisplayer";
import Song from "@/lib/types/Song";
import { FontAwesome } from "@expo/vector-icons";
import PlayList from "@/lib/types/Playlist";
import { usePlaylists } from "@/providers/FavouritePlaylistProvider";
import { useNavigation } from "expo-router";
import { usePlaylistScreenData } from "@/providers/PlaylistScreenDataProvider";

export default function PlayListScreen() {  
  const { favouritePlaylists, addFavourite, removeFavourite } = usePlaylists();
  const {setOptions} = useNavigation();

  const {playlistData} = usePlaylistScreenData();

  useEffect(() => {
    setOptions({
        title: playlistData?.name,
        headerTintColor: "#C6DE41",
        headerStyle: {
          backgroundColor: "#153B44",
        },
        headerBackTitle: "Back",
        headerTitleStyle: {
          color: "#fff",
        },
        headerRight: () => {
          let playlist = playlistData;
          let showFavourite = favouritePlaylists?.some(
            (item: PlayList) => item.uniqueKey === playlistData?.uniqueKey,
          );
          return (
            <Pressable
              onPress={
                showFavourite
                  ? () => removeFavourite(playlist!)
                  : () => addFavourite(playlist!)
              }
            >
              <FontAwesome
                name={showFavourite ? "heart" : "heart-o"}
                size={18}
                color="#C6DE41"
              />
            </Pressable>
          );
    }});
  }, []);

  return (
    <View className="flex flex-1 items-center justify-start bg-background py-2">
      <SafeAreaView className="w-full">
        <FlatList
          data={playlistData?.songs}
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
