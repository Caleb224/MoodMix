import { FontAwesome6 } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { MotiText, MotiView, SafeAreaView } from 'moti';
import { MotiPressable } from 'moti/interactions';
import { Pressable, Text, View } from 'react-native';
import { Surface } from 'react-native-paper';

export default function HomeScreen() {
  const { navigate } = useNavigation();

  return (
    <View className='flex-1 justify-center items-center bg-background'>
      <SafeAreaView className='flex-1 justify-start items-start w-11/12'>
        <Surface className='bg-transparent' elevation={2}>
          <MotiView className='flex flex-row justify-between items-center w-full bg-secondary rounded-xl h-16 px-3'>
            <Pressable className='h-12 w-12 rounded-full flex justify-center items-center' onPress={() => navigate('profile')}>
              <FontAwesome6 name='user-circle' size={48} color='#C6DE41'/>
            </Pressable>

            <MotiPressable from={{scale: 0.9}} animate={{scale: 1}} transition={{duration: 100, type: 'timing'}} onPress={() => navigate('quiz')}>
              <View className='bg-primary rounded-xl flex items-center justify-center px-4 h-12'>
                <Text className="text-secondary font-semibold">Update Mood</Text>
              </View>
            </MotiPressable>
          </MotiView>
        </Surface>
        <Text className='text-text text-2xl font-bold'>Welcome back</Text>
        <MotiText from={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 2000, type: 'timing'}}className='text-text text-xl font-extrabold'>Test</MotiText>
      </SafeAreaView>
      <StatusBar style='light'/>
    </View>
  );
}