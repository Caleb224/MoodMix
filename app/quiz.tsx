import { AnimatePresence, MotiText, MotiView, ScrollView } from 'moti';
import { Pressable, Text, View } from 'react-native';

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


  return (
    <View className='flex-1 justify-start items-start bg-background px-5 py-5'>
      <ScrollView>
        <AnimatePresence>
          <View className='flex flex-row items-center'>
            <Text className='text-text font-bold text-xl'>
              What{" "}
              <MotiView from={{translateY: 0}} animate={{translateY: 3}} transition={{loop: true, duration: 1000, delay: 100, type: 'timing'}} className='inline-block'>
                <Text className='text-primary font-bold text-xl'>emotion</Text>
              </MotiView>
              {" "} 
              are you feeling right now?</Text>
            </View>
        </AnimatePresence>
        <View className='flex flex-row flex-wrap items-center justify-center gap-2 my-3'>
          {emotions.map(emotion => (
            <Pressable
            className='px-4 bg-primary py-1 rounded-xl mx-2'
              key={emotion}>
                <Text className='text-text font-bold text-lg'>{emotion}</Text>
            </Pressable>
            )
          )}
        </View>
        <Text className='text-text font-bold text-xl my-3'>Generation Parameters</Text>
        <View className='flex flex-col justify-start items-center w-full bg-secondary rounded-xl h-48'>

        </View>
      </ScrollView>
    </View>
  );
}
