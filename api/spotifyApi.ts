import AsyncStorage from "@react-native-async-storage/async-storage";
import ClientTokens from "@/constants/ClientTokens";

const accessTokenKey = "accessToken";
const clientId = '050511b9bd93483c98c78bfed9f322dc';
const clientSecret = '63d0098b3c1a4476893cbdf756abdf8f';

// stretch goal: method for authorization flow token
async function storeAccessToken(accessToken: string): Promise<void> {
    try {
        await AsyncStorage.setItem(accessTokenKey, accessToken);
    } catch (error) {
        console.error('Error storing access token:', error);
    }
}

// stretch goal: method for authorization flow token
async function getAccessToken(): Promise<string | null> {
    try {
        const token = await AsyncStorage.getItem(accessTokenKey);
        return token;
    } catch (error) {
        console.error('Error retrieving access token:', error);
        return null;
    }
}

async function getToken() {
    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        body: new URLSearchParams({
        'grant_type': 'client_credentials',
        }),
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + (Buffer.from(clientId + ':' + clientSecret).toString('base64')),
        },
    });

    return await response.json();
}
  
async function getTrackInfo(accessToken: string) {
    const response = await fetch("https://api.spotify.com/v1/tracks/4cOdK2wGLETKBW3PvgPWqT", {
        method: 'GET',
        headers: { 'Authorization': 'Bearer ' + accessToken},
    });

    return await response.json();
}
  
// getToken().then(response => {
//     getTrackInfo(response.access_token).then(profile => {
//         console.log(profile)
//         console.log(profile.album.images)
//     })
// });