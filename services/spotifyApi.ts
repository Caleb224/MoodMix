import { getToken } from "./spotifyAuth";

export async function getMoodTracks(accessToken: string, mood: string): Promise<string[]> {
    const categoriesUrl = 'https://api.spotify.com/v1/browse/categories/';
  
    const response = await fetch(categoriesUrl, {
        method: 'GET',
        headers: { 'Authorization': 'Bearer ' + accessToken },
    });
  
    return await response.json();
  }

export async function getRecommendedTracks(accessToken: string, genres: string[]) {
    const recommendationsUrl = 'https://api.spotify.com/v1/recommendations?' + new URLSearchParams({
        'seed_genres': genres.join(','),
    });

    const response = await fetch(recommendationsUrl, {
        method: 'GET',
        headers: { 'Authorization': 'Bearer ' + accessToken },
    });

    return await response.json();
}

export async function getTrackInfo(accessToken: string, trackId: string) {
    const trackUrl = "https://api.spotify.com/v1/tracks/" + trackId;
    
    const response = await fetch(trackUrl, {
        method: 'GET',
        headers: { 'Authorization': 'Bearer ' + accessToken },
    });

    return await response.json();
}