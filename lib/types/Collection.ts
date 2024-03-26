import PlayList from "./Playlist";
import GenerationParameters from "./GenerationParameters";

type Collection = {
  emotion: string;
  genres: string[];
  genParams: GenerationParameters;
  playlists: PlayList[];
}

export default Collection;