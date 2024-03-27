import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { usePlaylists } from "@/providers/FavouritePlaylistProvider";
import { FlatList } from "react-native-gesture-handler";
import PlayList from "@/lib/types/Playlist";
import PlaylistDisplayer from "@/components/displayers/PlaylistDisplayer";
import { SafeAreaView } from "moti";
import { FontAwesome } from "@expo/vector-icons";
import { Surface } from "react-native-paper";

export default function FavouriteScreen() {
  const { favouritePlaylists, addFavourite, removeFavourite } = usePlaylists();
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <SafeAreaView className="w-full flex-1">
        <Surface className="h-full w-full bg-transparent" elevation={2}>
          <Text className="p-5 text-xl font-bold text-text">
            Your Favourites
          </Text>
          <FlatList
            data={favouritePlaylists}
            keyExtractor={(item: PlayList) => item.uniqueKey}
            renderItem={(item) => {
              let playlist = item.item;
              let showFavourite = favouritePlaylists?.indexOf(playlist) > -1 || false;
              return (
                <View className="flex w-full flex-row items-center justify-around pb-5">
                  <PlaylistDisplayer playlist={playlist} />
                  <Pressable
                    onPress={
                      showFavourite
                        ? () => removeFavourite(playlist)
                        : () => addFavourite(playlist)
                    }
                  >
                    <FontAwesome
                      name={showFavourite ? "heart" : "heart-o"}
                      size={18}
                      color="#C6DE41"
                    />
                  </Pressable>
                </View>
              );
            }}
          />
        </Surface>
      </SafeAreaView>
    </View>
  );
}
