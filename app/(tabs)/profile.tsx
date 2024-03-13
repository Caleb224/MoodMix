import { SafeAreaView, ScrollView, StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";
import { FontAwesome } from "@expo/vector-icons";
import PieChart from "react-native-pie-chart";
import Slider from "@react-native-community/slider";

const emotions = ["Happy", "Sad", "Angry"];
const test_series = [130, 150, 290];
const slice_colors = ["#FF407D", "#FF7F50", "#FFC0CB"];

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{ flex: 1, alignItems: "center", gap: 30 }}
        style={{ width: "100%" }}
      >
        <View style={styles.profileContainer}>
          <FontAwesome
            name="cog"
            size={20}
            style={{
              alignSelf: "flex-end",
              paddingRight: 30,
              color: "#FF407D",
            }}
          />
          <FontAwesome name="user-circle" size={100} color="#1B3C73" />
          <Text>Username</Text>
        </View>
        <View style={styles.profileInfoContainer}>
          <Text
            style={{
              alignSelf: "flex-start",
              paddingBottom: 20,
              color: "#fff",
              fontSize: 20,
              fontWeight: "600",
            }}
          >
            Mood Breakdown
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 20,
              backgroundColor: "transparent",
            }}
          >
            <PieChart
              widthAndHeight={200}
              series={test_series}
              sliceColor={slice_colors}
              doughnut={true}
            />
            <View style={{ backgroundColor: "transparent" }}>
              {emotions.map((emotion, index) => (
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: 5,
                    backgroundColor: "transparent",
                  }}
                >
                  <View
                    style={{
                      width: 10,
                      height: 10,
                      backgroundColor: slice_colors[index],
                    }}
                  />
                  <Text style={{ color: "#fff" }}>{emotion}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
        <View style={styles.profileInfoContainer}>
          <Text
            style={{
              alignSelf: "flex-start",
              paddingBottom: 20,
              color: "#fff",
              fontSize: 20,
              fontWeight: "600",
            }}
          >
            Generation Parameters
          </Text>
          <View style={{ width: "100%", backgroundColor: "transparent" }}>
            <Text
              style={{
                color: "#fff",
                fontSize: 18,
                fontWeight: "600",
              }}
            >
              Mood
            </Text>
            <Slider
              style={{ backgroundColor: "transparent" }}
              minimumValue={0}
              maximumValue={1}
              step={0.1}
              tapToSeek={true}
              value={0.5}
              renderStepNumber
            />
            <Text
              style={{
                color: "#fff",
                fontSize: 18,
                fontWeight: "600",
              }}
            >
              Energy
            </Text>
            <Slider
              style={{ backgroundColor: "transparent" }}
              minimumValue={0}
              maximumValue={1}
              step={0.1}
              tapToSeek={true}
              value={0.5}
              renderStepNumber
            />
            <Text
              style={{
                color: "#fff",
                fontSize: 18,
                fontWeight: "600",
              }}
            >
              Tempo
            </Text>
            <Slider
              style={{ backgroundColor: "transparent" }}
              minimumValue={0}
              maximumValue={1}
              step={0.1}
              tapToSeek={true}
              value={0.5}
              renderStepNumber
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
  },
  profileContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 30,
    paddingVertical: 30,
  },
  profileInfoContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "90%",
    padding: 20,
    backgroundColor: "#40679E",
    borderRadius: 12,
  },
});
