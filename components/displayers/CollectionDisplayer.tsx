import { useWindowDimensions, View } from "react-native";
import PlaylistDisplayer from "./PlaylistDisplayer";
import PlayList from "@/lib/types/Playlist";
import { FlatList } from "react-native-gesture-handler";
import React from "react";

const test_list: PlayList[] = [
  {
    uniqueKey: 'sadfasfasf',
    name: "Land of the Living",
    displayImageURI: "https://www.jesusfreakhideout.com/news/2020/04/pics/upperroom.jpg",
    genre: "",
    songs: [],
    emotion: ""
  },
  {
    uniqueKey: 'kfhasiouvkas',
    name: "Astroworld",
    displayImageURI: "https://upload.wikimedia.org/wikipedia/en/4/4b/Travis_Scott_-_Astroworld.png",
    genre: "",
    songs: [],
    emotion: ""
  },
  {
    uniqueKey: 'f;diuasfjksaf',
    name: "Legends Never Die",
    displayImageURI: "https://wp.dailybruin.com/images/2020/07/web.ae_.juicewrld.courtesy.jpg",
    genre: "",
    songs: [],
    emotion: ""
  }
]

export default function CollectionDisplayer() {

  const {width} = useWindowDimensions();

  return (
    <View className="w-full">
      <FlatList
      data={test_list}
      keyExtractor={(item: PlayList) => item.emotion + item.name}
      renderItem={(item) => {
        let playlist = item.item;
        return (
          <View style={{width: width * 0.9}}>
            <PlaylistDisplayer playlist={playlist}/>
          </View>
        )
      }}
      horizontal
      style={{width: '100%'}}
      />
    </View> 
  )
}
