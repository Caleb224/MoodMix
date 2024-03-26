// CounterContext.tsx

import PlayList from "@/lib/types/Playlist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useEffect, useState } from "react";

// Define the context
interface FavouritePlaylistProps {
  favouritePlaylists: PlayList[] | null;
  addFavourite: (playlist: PlayList) => void;
  removeFavourite: (playlist: PlayList) => void;
}

const FavouritePlaylistsContext = createContext<FavouritePlaylistProps | undefined>(undefined);

// Create a provider component
export const FavouritePlaylistsProvider = ({ children }: { children: React.ReactNode }) => {
  const [favouritePlaylists, setFavouritePlaylists] = useState<PlayList[] | null>(null);

  useEffect(() => {
    const getFavouritesFromDB = async () => {
      try {
        let favouritesQuery = await AsyncStorage.getItem("favourites");

        if (favouritesQuery !== null) {
          console.log(favouritesQuery);
          setFavouritePlaylists(JSON.parse(favouritesQuery));
        }
      } catch (e) {
        console.error("Couldn't fetch favourite playlists", e);
        await AsyncStorage.setItem("favourites", JSON.stringify([]));
        setFavouritePlaylists([]);
      }
    }

    getFavouritesFromDB();
  }, [])

  const addFavourite = async (playlist: PlayList) => {
    let newList = [...favouritePlaylists, playlist];
    setFavouritePlaylists(newList);

    try {
      await AsyncStorage.setItem('favourites', JSON.stringify(newList));
    } catch (e) {
      console.error(e);
    }
  };

  const removeFavourite = async (playlist: PlayList) => {
    let newList = favouritePlaylists.filter(item => playlist.uniqueKey !== item.uniqueKey);
    setFavouritePlaylists(newList);

    try {
      await AsyncStorage.setItem('favourites', JSON.stringify(newList));
    } catch (e) {
      console.error(e);
    }
  }

  const contextValue: FavouritePlaylistProps = {
    favouritePlaylists,
    addFavourite,
    removeFavourite
  };

  return (
    <FavouritePlaylistsContext.Provider value={contextValue}>
      {children}
    </FavouritePlaylistsContext.Provider>
  );
};

// Create a custom hook to use the context
export const usePlaylists = (): FavouritePlaylistProps => {
  const context = useContext(FavouritePlaylistsContext);
  if (!context) {
    throw new Error("usePlaylists must be used within a FavouritePlaylistProvider");
  }
  return context;
};
