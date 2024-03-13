import { Dimensions, SafeAreaView, FlatList, StyleSheet, Pressable } from "react-native";

import { Text, View } from "@/components/Themed";

const favourites_data = [
  {
    playlist_name: "Energy1",
    playlistCover: "https://i.imgur.com/g415z2v.png",
  },
  {
    playlist_name: "Energy2",
    playlistCover: "https://i.imgur.com/g415z2v.png",
  },
  {
    playlist_name: "Energy3",
    playlistCover: "https://i.imgur.com/g415z2v.png",
  },
  {
    playlist_name: "Energy4",
    playlistCover: "https://i.imgur.com/g415z2v.png",
  },
];

interface FavouriteListItemProps {
  playlist_name: string;
  playlistCover: string;
}

const FavouriteListItem = ({
  playlist_name,
  playlistCover,
}: FavouriteListItemProps) => {
  return (
    <Pressable
      style={{
        padding: 20,
        borderRadius: 10,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View style={{height: 100, width: 100, backgroundColor: '#FF407D', borderRadius: 10}}></View>
      <Text style={{fontSize: 20, fontWeight: '600', color: '#1B3C73'}}>{playlist_name}</Text>
    </Pressable>
  );
};

export default function FavouritesScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Favourites</Text>
      <FlatList
        style={{
          height: Dimensions.get("window").height,
          width: "100%",
          padding: 20,
        }}
        data={favourites_data}
        contentContainerStyle={{ gap: 10 }}
        renderItem={({ item }) => {
          return (
            <View>
              <FavouriteListItem
              playlist_name={item.playlist_name}
              playlistCover={item.playlistCover}
              />
            <View
              style={styles.separator}
              lightColor="#eee"
              darkColor="rgba(255,255,255,0.1)"
            />
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    height: Dimensions.get("window").height,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "flex-start",
    paddingHorizontal: 20,
    color: '#1B3C73'
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: "80%",
  },
});
