// CounterContext.tsx

import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useEffect, useState } from "react";

// Define the context
interface ParametersProps {
  emotion: string;
  mood: number[];
  energy: number[];
  tempo: number[];
  updateEmotion: (emotion: string) => void;
  updateMood: (mood: number[]) => void;
  updateEnergy: (energy: number[]) => void;
  updateTempo: (tempo: number[]) => void;
}

const ParametersContext = createContext<ParametersProps | undefined>(undefined);

// Create a provider component
export const ParametersProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [emotion, setEmotion] = useState<string>("Gratitude");
  const [mood, setMood] = useState<number[]>([0.1]);
  const [energy, setEnergy] = useState<number[]>([0.1]);
  const [tempo, setTempo] = useState<number[]>([0.1]);

  // Multiple UseEffects Required
  useEffect(() => {
    const getParametersFromDB = async () => {
      try {
        let emotionQuery = await AsyncStorage.getItem("emotion");
        let moodQuery = await AsyncStorage.getItem("mood");
        let energyQuery = await AsyncStorage.getItem("energy");
        let tempoQuery = await AsyncStorage.getItem("tempo");

        if (
          emotionQuery &&
          moodQuery &&
          energyQuery &&
          tempoQuery
        ) {

          let numMood = Number(JSON.parse(moodQuery));
          let numEnergy = Number(JSON.parse(energyQuery));
          let numTempo = Number(JSON.parse(tempoQuery));

          setEmotion(emotionQuery);
          setMood([numMood]);
          setEnergy([numEnergy]);
          setTempo([numTempo]);
        } else {
          throw Error("Couldn't fetch generation parameters");
        }
      } catch (e) {
        await AsyncStorage.setItem("emotion", "Gratitude");
        await AsyncStorage.setItem("mood", "0.5");
        await AsyncStorage.setItem("energy", "0.5");
        await AsyncStorage.setItem("tempo", "0.5");

      }
    };

    getParametersFromDB();
  }, []);

  const updateEmotion = (emotion: string) => {
    setEmotion(emotion);
    updateStorage("emotion", emotion);
  };

  const updateMood = (value: number[]) => {
    setMood(value);
    updateStorage("mood", JSON.stringify(value[0]));
  };

  const updateEnergy = (value: number[]) => {
    setEnergy(value);
    updateStorage("energy", JSON.stringify(value[0]));
  };

  const updateTempo = (value: number[]) => {
    setTempo(value);
    updateStorage("tempo", JSON.stringify(value[0]));
  };

  const updateStorage = async (key: string, value: string) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      console.error(e);
    }
  };

  const contextValue: ParametersProps = {
    emotion,
    mood,
    energy,
    tempo,
    updateEmotion,
    updateMood,
    updateEnergy,
    updateTempo,
  };

  return (
    <ParametersContext.Provider value={contextValue}>
      {children}
    </ParametersContext.Provider>
  );
};

// Create a custom hook to use the context
export const useParameters = (): ParametersProps => {
  const context = useContext(ParametersContext);
  if (!context) {
    throw new Error(
      "usePlaylists must be used within a FavouritePlaylistProvider",
    );
  }
  return context;
};
