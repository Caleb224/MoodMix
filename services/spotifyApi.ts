import { getToken } from "./spotifyAuth";
import Song from "../lib/types/Song"
import PlayList from "../lib/types/Playlist";


const moodGenreMap: { [key: string]: string[] } = {
    "euphoria": ["dance", "happy", "pop", "progressive-house", "trance"],
    "melancholy": ["blues", "chill", "emo", "indie", "sad"],
    "serenity": ["acoustic", "ambient", "chill", "classical", "study"],
    "awe": ["ambient", "classical", "folk", "new-age", "world-music"],
    "anticipation": ["dance", "electronic", "house", "pop", "trance"],
    "contentment": ["acoustic", "chill", "folk", "indie", "singer-songwriter"],
    "envy": ["blues", "country", "folk", "soul"],
    "gratitude": ["blues", "folk", "gospel", "soul"],
    "nostalgia": ["blues", "classic", "country", "jazz", "soul"],
    "amusement": ["comedy", "party", "pop"],
    "dread": ["ambient", "dark", "dubstep", "grunge", "metal"],
    "empathy": ["ambient", "blues", "classical", "folk", "sad"],
    "ambivalence": ["ambient", "chill", "indie", "singer-songwriter"],
    "zeal": ["dance", "happy", "pop", "progressive-house", "trance"],
    "resentment": ["blues", "grunge", "hard-rock", "metal"],
    "confusion": ["ambient", "experimental", "noise"],
    "bliss": ["acoustic", "chill", "folk", "happy", "singer-songwriter"],
    "disgust": ["heavy-metal", "punk", "rock"],
    "fascination": ["ambient", "experimental", "jazz", "world-music"],
    "regret": ["blues", "country", "folk", "jazz", "soul"],
    "triumph": ["classical", "opera", "power-pop", "soul"],
    "longing": ["blues", "folk", "jazz", "soul"],
    "shame": ["blues", "country", "folk", "soul"],
    "adoration": ["blues", "folk", "gospel", "soul"]
};


export async function getMoodTracks(accessToken: string, mood: string): Promise<string[]> {
    const categoriesUrl = 'https://api.spotify.com/v1/browse/categories/';
  
    const response = await fetch(categoriesUrl, {
        method: 'GET',
        headers: { 'Authorization': 'Bearer ' + accessToken },
    });
    
  
    return await response.json();
  }

  export async function getRecommendedTracks(accessToken: string, emotion: string, mood: number, tempo: number, energy: number): Promise<PlayList> {
    const genres = moodGenreMap[emotion];

    const recommendationsUrl = 'https://api.spotify.com/v1/recommendations?' + new URLSearchParams({
        'seed_genres': genres.join(','),
        'limit': "15",
        'target_energy:': energy.toString(),
        'target_valence': mood.toString()
    });

    const response = await fetch(recommendationsUrl, {
        method: 'GET',
        headers: { 'Authorization': 'Bearer ' + accessToken },
    });

    const trackInfo = await response.json();

    const songs: Song[] = [];


    // Iterate over each track and extract relevant info
    trackInfo.tracks.forEach((track: any) => {
        const artists: string[] = track.artists.map((artist: any) => artist.name);

        const song: Song = {
            name: track.name,
            artist: artists,
            album: track.album && track.album.name ? track.album.name : null,
            imageURI: track.album.images[1].url
        };

        songs.push(song);
    });

   // Generates the uniquekey that has a negligable chance to repeat keys
   const uniqueKey = Math.random().toString(36).substr(2, 9) + Date.now().toString(36);

   // Get the first track's imageURI for displayImageURI
   const displayImageURI = songs.length > 0 ? songs[0].imageURI : '';

   //gets the genres 
   const playListGenres = genres; 

   // Construct the PlayList object
   const playlist: PlayList = {
       uniqueKey: uniqueKey,
       name: emotion + " "+ playListGenres[0], 
       displayImageURI: displayImageURI,
       genre: playListGenres,
       songs: songs,
       emotion: emotion
   };

   return playlist;
}



export async function getTrackInfo(accessToken: string, trackId: string) {
    const trackUrl = "https://api.spotify.com/v1/tracks/" + trackId;
    
    const response = await fetch(trackUrl, {
        method: 'GET',
        headers: { 'Authorization': 'Bearer ' + accessToken },
    });

    return await response.json();
}


// example usage
// getToken().then(response => {
//     getRecommendedTracks(response.access_token, "awe",0.2,0.3,0.9, ).then((tracks) => {
//     })
// });



