import {
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { Text } from "@/components/Themed";
import Container from "@/components/Container";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import PlaylistList from "@/components/PlaylistList";

function HomeScreenHeader() {
  const navigation = useNavigation();

  return (
    <Container>
      <View>
        <View style={headerStyles.container}>
          <Text style={headerStyles.welcometext}>Welcome back</Text>
        </View>
        <View>
          <Text style={headerStyles.moodtext}>Feeling Happy?</Text>
        </View>
      </View>
      <View>
        <Pressable onPress={() => navigation.navigate("Profile")}>
          <FontAwesome5 name="user-circle" size={60} color="#1B3C73" />
        </Pressable>
      </View>
    </Container>
  );
}

const headerStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFCAD4",
  },
  welcometext: {
    color: "#1B3C73",
    fontWeight: "800",
  },
  moodtext: {
    fontWeight: "600",
    fontSize: 30,
    color: "#1B3C73",
  },
});

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <HomeScreenHeader />
        <ScrollView
          contentContainerStyle={{
            flex: 1,
            alignItems: "center",
            width: "100%",
          }}
          style={{ width: "100%" }}
        >
          <PlaylistList
            regeneratable={true}
            sectionTitle="Suggested Playlists"
          />
          <PlaylistList sectionTitle="Recently Played" />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    width: "100%",
    height: "100%",
  },
});
