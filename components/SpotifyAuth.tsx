import { useAuthRequest } from "expo-auth-session";
import React from "react";
import { Button } from 'react-native';
import ClientTokens from "@/constants/ClientTokens";
import AsyncStorage from "@react-native-async-storage/async-storage";

const discovery = {
    authorizationEndpoint: 'https://accounts.spotify.com/authorize',
    tokenEndpoint: 'https://accounts.spotify.com/api/token',
  };
  
export default function SpotifyAuth() {
  console.log(ClientTokens.redirectUri);
  
  const [request, response, promptAsync] = useAuthRequest({
      clientId: ClientTokens.clientId,
      scopes: ['user-read-email', 'playlist-modify-public'],
      // To follow the "Authorization Code Flow" to fetch token after authorizationEndpoint
      // this must be set to false
      usePKCE: false,
      redirectUri: ClientTokens.redirectUri
    },
    discovery
  );

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { code } = response.params;
      console.log(code);
    }
  }, [response]);

  return (
    <Button
      disabled={!request}
      title="Login"
      onPress={() => {
        promptAsync();
      }}
    />
  );
}