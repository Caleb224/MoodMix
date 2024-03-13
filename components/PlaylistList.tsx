import { FlatList, Pressable, Text, View } from "react-native";
import { StyleSheet } from "react-native";
import Playlist from "./Playlist";

const test_data = [
  {
    title: "test1",
  },
  {
    title: "test2",
  },
  {
    title: "test3",
  },
];

interface Props {
  sectionTitle: string;
  regeneratable: boolean;
  data: any;
}

export default function PlaylistList(props: Props) {
  const { sectionTitle, regeneratable } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{sectionTitle || "Playlists"}</Text>
      <FlatList
        style={{ width: "100%" }}
        horizontal
        data={test_data}
        renderItem={({ item }) => <Playlist />}
      />
      {regeneratable && (
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Regenerate</Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    margin: 10,
    width: "100%",
  },
  title: {
    color: "#1B3C73",
    fontWeight: "800",
    fontSize: 20,
  },
  button: {
    display: "flex",
    width: "min-content",
    backgroundColor: "#FF407D",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "600",
    fontSize: 15,
  },
});
