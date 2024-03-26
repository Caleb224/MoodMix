import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React from 'react';


export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {

  return (
    <GestureHandlerRootView className='flex-1'>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="quiz" options={{ 
          headerTitle:'Update Mood', 
          presentation: 'modal',
          headerStyle: {
            backgroundColor: '#153B44',
          },
          headerTintColor: '#fff',
          }} />
        <Stack.Screen name='stackscreens/PlaylistScreen' 
          options={({route}: any) => ({
            title: route?.params?.playlist?.name,
            headerTintColor: "#C6DE41",
            headerStyle: {
              backgroundColor: "#071C21"
            },
            headerBackTitle: "Back",
            headerTitleStyle: {
              color: '#fff'
            }
          })}/>
      </Stack>
    </GestureHandlerRootView>
  );
}
