import { SafeAreaView, StyleSheet, View } from "react-native";
import { Text } from "@/components/Themed";
import Container from "@/components/Container";

function HomeScreenHeader() {
  return (
    <Container>
      <View style={headerStyles.container}>
        <Text style={headerStyles.welcometext}>Welcome to MoodMix</Text>
      </View>
      <View>
        <Text style={headerStyles.moodtext}>Feeling Happy?</Text>
      </View>
    </Container>
  );
}

const headerStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  welcometext: {
    fontWeight: "800",
  },
  moodtext: {
    fontWeight: "400",
    fontSize: 30,
  },
});

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <HomeScreenHeader />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#27005D",
    padding: 20,
  },
});
