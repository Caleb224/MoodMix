import { useState } from "react";
import { View, SafeAreaView, Text, Pressable, Image } from "react-native";
import { StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";

interface WelcomeProps {
  onComplete: () => void;
}

const InitialScreen = ({ onComplete }: WelcomeProps) => {
  const [currentSlideNum, setCurrentSlideNum] = useState(0);

  const goBackSlide = () => {
    setCurrentSlideNum(currentSlideNum - 1);
  };

  const goNextSlide = () => {
    setCurrentSlideNum(currentSlideNum + 1);
  };

  const WelcomeSlides = [
    {
      title: "Welcome to MoodMix",
      textContent: "The platform that empowers you to tailor your tune",
      image: require("../../assets/images/MoodMix_Welcome.jpeg"),
      buttons: [
        <Pressable onPress={goNextSlide} style={styles.buttonStyles}>
          <Text style={styles.buttonText}>Next</Text>
        </Pressable>,
      ],
    },
    {
      title: "Let's get tuning!",
      sliders: ["Mood", "Energy", "Tempo"],
      textContent:
        "Adjust the sliders above to shape the music you want to listen to",
      buttons: [
        <Pressable onPress={goBackSlide} style={styles.buttonStyles}>
          <Text style={styles.buttonText}> Back </Text>
        </Pressable>,
        <Pressable onPress={goNextSlide} style={styles.buttonStyles}>
          <Text style={styles.buttonText}> Next </Text>
        </Pressable>,
      ],
    },
    {
      title: "That's all for now!",
      textContent: "Let's get you listening",
      image: require("../../assets/images/MoodMix_End.jpeg"),
      buttons: [
        <Pressable onPress={goBackSlide} style={styles.buttonStyles}>
          <Text style={styles.buttonText}> Back </Text>
        </Pressable>,
        <Pressable onPress={onComplete} style={styles.buttonStyles}>
          <Text style={styles.buttonText}> Done </Text>
        </Pressable>,
      ],
    },
  ];

  return (
    <View
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: "#fff",
        zIndex: 200,
      }}
    >
      <SafeAreaView>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Text
            style={{
              width: "100%",
              paddingHorizontal: 40,
              fontSize: 30,
              fontWeight: "700",
              marginBottom: 40,
              textAlign: "left",
              color: "#40679E",
            }}
          >
            {WelcomeSlides[currentSlideNum].title}
          </Text>
          {WelcomeSlides[currentSlideNum]?.sliders && (
            <View
              style={{
                height: 500,
                width: 350,
                backgroundColor: "#FFCAD4",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                paddingVertical: 20,
                borderRadius: 8,
              }}
            >
              {WelcomeSlides[currentSlideNum].sliders?.map((entry) => (
                <View style={{ width: "100%", paddingHorizontal: 20 }}>
                  <Text
                    style={{
                      color: "#FF407D",
                      fontSize: 18,
                      fontWeight: "600",
                    }}
                  >
                    {entry}
                  </Text>
                  <Slider
                    minimumValue={0}
                    maximumValue={1}
                    step={0.1}
                    tapToSeek={true}
                    value={0.5}
                    renderStepNumber
                  />
                </View>
              ))}
            </View>
          )}
          {WelcomeSlides[currentSlideNum]?.image && (
            <View style={{ height: 350, width: 350, shadowColor: "#000" }}>
              <Image
                source={WelcomeSlides[currentSlideNum]?.image}
                contentFit="cover"
                style={{ width: "100%", flex: 1, borderRadius: 12 }}
              />
            </View>
          )}
          <Text
            style={{
              width: "100%",
              paddingHorizontal: 40,
              fontSize: 20,
              fontWeight: "500",
              marginVertical: 40,
              textAlign: "left",
              color: "#40679E",
            }}
          >
            {WelcomeSlides[currentSlideNum].textContent}
          </Text>
          <View
            style={{
              position: "absolute",
              bottom: 20,
              width: "100%",
              paddingHorizontal: 40,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            {WelcomeSlides[currentSlideNum].buttons.map((button) => button)}
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyles: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: "#FF407D",
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});

export default InitialScreen;
