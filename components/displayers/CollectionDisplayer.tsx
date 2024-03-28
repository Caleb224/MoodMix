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
        let access_token = await getToken();
        let tracks = await getRecommendedTracks(access_token, emotion.toLowerCase(), mood[0], tempo[0], energy[0]);
        setCollection([tracks]);
        setLoading(false);
      } catch (e) {
        console.log("error: ", e);
      }
    };

    getCollection();
  }, [emotion, mood, tempo, energy]);

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
            horizontal
            style={{ width: "100%" }}
          />
        )}
      </Skeleton>
    </View>
  );
}
