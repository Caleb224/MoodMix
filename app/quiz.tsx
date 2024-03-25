import { Slider } from '@miblanchard/react-native-slider';
import { AnimatePresence, MotiText, MotiView, ScrollView } from 'moti';
import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { Surface } from 'react-native-paper';

let emotions = [
  "Euphoria",
  "Melancholy",
  "Serenity",
  "Awe",
  "Anticipation",
  "Contentment",
  "Envy",
  "Gratitude",
  "Nostalgia",
  "Amusement",
  "Dread",
  "Empathy",
  "Ambivalence",
  "Zeal",
  "Resentment",
  "Confusion",
  "Bliss",
  "Disgust",
  "Fascination",
  "Regret",
  "Triumph",
  "Longing",
  "Shame",
  "Adoration"
];

export default function ModalScreen() {
  const [selectedEmotion, setSelectedEmotion] = useState("");
  const [moodValue, setMoodValue] = useState<number[]>([0.5]);
  const [energyValue, setEnergyValue] = useState<number[]>([0.5]);
  const [tempoValue, setTempoValue] = useState<number[]>([0.5]);

  return (
      <ScrollView className='flex-1 bg-background overflow-hidden p-5' contentContainerStyle={{alignItems: 'flex-start', justifyContent: 'center'}}>
        <AnimatePresence>
          <View className='flex flex-row items-center'>
            <Text className='text-text font-bold text-2xl'>
              What{" "}
              <MotiView from={{translateY: 0}} animate={{translateY: 3}} transition={{loop: true, duration: 1000, delay: 100, type: 'timing'}} className='inline-block'>
                <Text className='text-primary font-bold text-2xl'>emotion</Text>
              </MotiView>
              {" "} 
              are you feeling right now?</Text>
            </View>
        </AnimatePresence>
        <Surface className='flex flex-row flex-wrap items-center justify-center gap-2 my-3 bg-transparent' elevation={2}>
          {emotions.map(emotion => (
            <Pressable
            className='px-4 bg-primary py-1 rounded-xl mx-2'
              key={emotion}>
                <Text className='text-tertiary font-semibold text-md'>{emotion}</Text>
            </Pressable>
            )
          )}
        </Surface>
        <Surface className="w-full bg-transparent" elevation={2}>
          <Text className='text-text font-bold text-2xl my-3'>Generation Parameters</Text>
          <View className='flex flex-col justify-start items-center bg-secondary rounded-xl h-min w-full mb-28'>
            <View className='w-full p-5'>
              <Text className='text-text font-semibold text-lg'>Mood: <Text className='text-primary font-light text-lg'>{moodValue[0].toPrecision(1)}</Text></Text>
              <View className='flex flex-row items-center justify-center'>
                <Text className='text-text font-semibold text-lg'>0</Text>
                <Slider value={moodValue} 
                  onValueChange={(value) => setMoodValue(value)}
                  step={0.1} 
                  containerStyle={{width: '80%', marginHorizontal: 20}}
                  trackStyle={{backgroundColor: '#153B44'}}
                  minimumTrackTintColor='#C6DE41'
                  thumbTintColor='#C6DE41' 
                  />
                <Text className='text-text font-semibold text-lg'>1</Text>
              </View>
            </View>
            <View className='w-full p-5'>
              <Text className='text-text font-semibold text-lg'>Energy: <Text className='text-primary font-light text-lg'>{energyValue[0].toPrecision(1)}</Text></Text>
              <View className='flex flex-row items-center justify-center'>
                <Text className='text-text font-semibold text-lg'>0</Text>
                <Slider value={energyValue} 
                  onValueChange={(value) => setEnergyValue(value)}
                  step={0.1} 
                  containerStyle={{width: '80%', marginHorizontal: 20}}
                  trackStyle={{backgroundColor: '#153B44'}}
                  minimumTrackTintColor='#C6DE41'
                  thumbTintColor='#C6DE41' 
                  />
                <Text className='text-text font-semibold text-lg'>1</Text>
              </View>
            </View>
            <View className='w-full p-5'>
              <Text className='text-text font-semibold text-lg'>Tempo: <Text className='text-primary font-light text-lg'>{tempoValue[0].toPrecision(1)}</Text></Text>
              <View className='flex flex-row items-center justify-center'>
                <Text className='text-text font-semibold text-lg'>0</Text>
                <Slider value={tempoValue} 
                  onValueChange={(value) => setTempoValue(value)}
                  step={0.1} 
                  containerStyle={{width: '80%', marginHorizontal: 20}}
                  trackStyle={{backgroundColor: '#153B44'}}
                  minimumTrackTintColor='#C6DE41'
                  thumbTintColor='#C6DE41' 
                  />
                <Text className='text-text font-semibold text-lg'>1</Text>
              </View>
            </View>
          </View>
        </Surface>
      </ScrollView>
  );
}
