import { getToken } from "./spotifyAuth";


async function getTrackInfo(accessToken: string, trackId: string) {
    const trackUrl = "https://api.spotify.com/v1/tracks/";

    const trackReq = trackUrl + trackId;
    const response = await fetch(trackReq, {
        method: 'GET',
        headers: { 'Authorization': 'Bearer ' + accessToken},
    });

    return await response.json();
}
  
getToken().then(response => {
    getTrackInfo(response.access_token, "4cOdK2wGLETKBW3PvgPWqT").then(profile => {
        console.log(profile)
    })
});