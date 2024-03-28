// CounterContext.tsx

import PlayList from "@/lib/types/Playlist";
import React, { createContext, useContext, useEffect, useState } from "react";

// Define the context
interface PlaylistScreenDataProps {
  playlistData: PlayList | null;
  setPlaylistData: (playlistData: PlayList) => void;
}

const PlaylistDataContext = createContext<PlaylistScreenDataProps | undefined>(undefined);

// Create a provider component
export const PlaylistScreenDataProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [playlistData, setPlaylistData] = useState<PlayList | null>(null);

  const contextValue: PlaylistScreenDataProps = {
    playlistData,
    setPlaylistData
  };

  return (
    <PlaylistDataContext.Provider value={contextValue}>
      {children}
    </PlaylistDataContext.Provider>
  );
};

// Create a custom hook to use the context
export const usePlaylistScreenData = (): PlaylistScreenDataProps => {
  const context = useContext(PlaylistDataContext);
  if (!context) {
    throw new Error(
      "usePlaylistData must be used within a PlaylistScreenDataProvider",
    );
  }
  return context;
};
