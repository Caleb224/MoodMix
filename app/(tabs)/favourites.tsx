import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { usePlaylists } from '@/providers/FavouritePlaylistProvider';
import { FlatList } from 'react-native-gesture-handler';
import PlayList from '@/lib/types/Playlist';
import PlaylistDisplayer from '@/components/displayers/PlaylistDisplayer';
import { SafeAreaView } from 'moti';
import { FontAwesome } from '@expo/vector-icons';

export default function FavouriteScreen() {
  const {favouritePlaylists, addFavourite, removeFavourite} = usePlaylists();
  return (
    <View className='flex-1 justify-center items-center bg-background'>
      <SafeAreaView className='w-full flex-1'>
        <Text className='text-text font-bold text-xl p-5'>Your Favourites</Text>
        <FlatList
        data={favouritePlaylists}
        keyExtractor={(item: PlayList) => item.name + item.emotion}
        renderItem={(item) => {
          let playlist = item.item;
          let showFavourite = (favouritePlaylists?.indexOf(playlist) > -1);
          return (
            <View className='flex flex-row items-center justify-around w-full pb-5'>
              <PlaylistDisplayer playlist={playlist}/>
              <Pressable onPress={showFavourite ? () => removeFavourite(playlist) : () => addFavourite(playlist)}>
                <FontAwesome name={showFavourite ? 'heart' : 'heart-o'} size={18} color="#C6DE41"/>
              </Pressable>
            </View>
          )
        }}/>
      </SafeAreaView>
    </View>
  );
}
