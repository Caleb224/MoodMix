import { View, Text, StyleSheet, Pressable } from "react-native";

export default function Playlist() {
  return (
    <View style={styles.playlistContainer}>
      <Pressable style={styles.playlistCover}></Pressable>
      <View>
        <Text style={styles.playlistTitle}>Title</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  playlistContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    height: "100%",
    marginRight: 40,
    paddingVertical: 15,
    borderRadius: 10,
    gap: 10,
  },
  playlistCover: {
    width: 125,
    height: 125,
    resizeMode: "contain",
    backgroundColor: "#40679E",
    borderRadius: 12,
  },
  playlistTitle: {
    color: "#1B3C73",
    fontSize: 20,
    fontWeight: "bold",
  },
});
