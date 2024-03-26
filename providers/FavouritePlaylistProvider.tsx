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
        if (!favouritesQuery) {
          throw Error("Couldn't retrieve favourites")
        } 
        setFavouritePlaylists(JSON.parse(favouritesQuery));
      } catch (e) {
        let emptyFavourites: PlayList[] = [];
        console.log(JSON.stringify(emptyFavourites));
        await AsyncStorage.setItem("favourites", JSON.stringify(emptyFavourites));
      }
    }

    getFavouritesFromDB();
  }, [])

  const addFavourite = (playlist: PlayList) => {
    let newList = [...favouritePlaylists, playlist];
    setFavouritePlaylists(newList);
  };

  const removeFavourite = (playlist: PlayList) => {
    let newList = favouritePlaylists.filter(item => playlist !== item);
    setFavouritePlaylists(newList);
  }

  // const updateStorage = async () => {
  //   try {
  //     await AsyncStorage.setItem('', JSON.stringify());
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

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
