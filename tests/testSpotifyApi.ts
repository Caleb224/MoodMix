import { getToken } from "../services/spotifyAuth";
import * as SpotifyApi from "../services/spotifyApi";

getToken().then(response => {
    SpotifyApi.getMoodTracks(response.access_token, "happy").then((tracks) => {
        console.log(tracks);
    })
});

getToken().then((response) => {
    SpotifyApi.getRecommendedTracks(response.access_token, "awe", 0.2, 0.3, 0.9).then(
        (playlist) => {
            console.log(playlist);
        },
    );
});

getToken().then(response => {
    SpotifyApi.getTrackInfo(response.access_token, "4cOdK2wGLETKBW3PvgPWqT").then(profile => {
        console.log(profile)
    })
});