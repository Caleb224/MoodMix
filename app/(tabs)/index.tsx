import CollectionDisplayer from '@/components/displayers/CollectionDisplayer';
import { FontAwesome6 } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import {  MotiView, SafeAreaView } from 'moti';
import { MotiPressable } from 'moti/interactions';
import { Pressable, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Surface } from 'react-native-paper';
import React from 'react';

export default function HomeScreen() {
  const { navigate } = useNavigation();

  return (
    <View className='flex-1 flex justify-center items-center bg-background'>
      <SafeAreaView className='flex-1 justify-start items-start w-full'>
        <Surface className='bg-transparent w-full px-3' elevation={2}>
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
        <Text className='text-text text-2xl font-bold p-3'>Welcome back</Text>
        <Surface className='bg-transparent w-full px-3 h-full'>
          <ScrollView contentContainerStyle={{ alignItems: 'center', width: '100%'}} style={{width: '100%'}}>
            <CollectionDisplayer/>
          </ScrollView>
        </Surface>
      </SafeAreaView>
      <StatusBar style='light'/>
    </View>
  );
}