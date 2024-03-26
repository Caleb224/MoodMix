import { Pressable, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'moti';
import { FontAwesome6 } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { Surface } from 'react-native-paper';

export default function ProfileScreen() {
  return (
    <View className='flex-1 justify-center items-center bg-background'>
      <SafeAreaView className='flex-1 justify-start items-center w-full'>
        <ScrollView className='w-full flex-1 px-5'>
          <Surface className='w-full flex-1 bg-transparent' elevation={2}>
            <View className='flex flex-col items-center justify-center bg-secondary rounded-xl w-full py-3'>
              <Text className='text-text font-semibold text-xl'>Profile</Text>
              <Pressable className='rounded-full flex justify-center items-center py-3'>
                <FontAwesome6 name='user-circle' size={82} color='#C6DE41'/>
              </Pressable>
              <Text className='text-text font-semibold text-xl'>Username</Text>
            </View>
          </Surface>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}