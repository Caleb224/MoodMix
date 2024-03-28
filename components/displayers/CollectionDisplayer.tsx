import { useWindowDimensions, View } from "react-native";
import PlaylistDisplayer from "./PlaylistDisplayer";
import PlayList from "@/lib/types/Playlist";
import { FlatList } from "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { Skeleton } from "moti/skeleton";
import Collection from "@/lib/types/Collection";
import { LinearGradient } from "expo-linear-gradient";
import { getRecommendedTracks } from "@/services/spotifyApi";
import { getToken } from "@/services/spotifyAuth";
import { useParameters } from "@/providers/ParametersProvider";
import Playlist from "@/lib/types/Playlist";
import { Buffer } from "buffer";

const test_list: PlayList[] = [
  {
    uniqueKey: "sadfasfasf",
    name: "Land of the Living",
    displayImageURI:
      "https://www.jesusfreakhideout.com/news/2020/04/pics/upperroom.jpg",
    genre: [],
    songs: [],
    emotion: "",
  },
  {
    uniqueKey: "kfhasiouvkas",
    name: "Astroworld",
    displayImageURI:
      "https://upload.wikimedia.org/wikipedia/en/4/4b/Travis_Scott_-_Astroworld.png",
    genre: [],
    songs: [],
    emotion: "",
  },
  {
    uniqueKey: "f;diuasfjksaf",
    name: "Legends Never Die",
    displayImageURI:
      "https://wp.dailybruin.com/images/2020/07/web.ae_.juicewrld.courtesy.jpg",
    genre: [],
    songs: [],
    emotion: "",
  },
];

export default function CollectionDisplayer() {
  const [loading, setLoading] = useState(true);
  const [collection, setCollection] = useState<Playlist[] | null>(null);

  const { width } = useWindowDimensions();
  const { emotion, mood, tempo, energy } = useParameters();

  console.log("inside collect component");

  useEffect(() => {
    console.log("in useEffect");
    const getCollection = async () => {
      try {
        console.log("try getCollection");
        let tracks = await getToken().then((response) => {
          console.log(response);
          return getRecommendedTracks(response.access_token, emotion.toLowerCase(), mood[0], tempo[0], energy[0]);
        });
        console.log("tracks: " + tracks)
        setCollection([tracks]);
        setLoading(false);
      } catch (e) {
        console.log("error: ", e);
      }
    };

    getCollection();
  }, [emotion]);

  return (
    <View className="w-full">
      <Skeleton show={loading} height={200} width={'100%'} radius={16}>
        {(
          <FlatList
            scrollEnabled={false} // two components were scrollable, set this to false so ScrollView is only scrollable
            data={collection}
            keyExtractor={(item: PlayList) => item.uniqueKey}
            renderItem={(item) => {
              let playlist = item.item;
              return (
                <View style={{ width: width * 0.9 }}>
                  <PlaylistDisplayer playlist={playlist} />
                </View>
              );
            }}
            style={{ width: "100%" }}
          />
        )}
      </Skeleton>
    </View>
  );
}
