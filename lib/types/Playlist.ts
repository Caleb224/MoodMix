import Song from "./Song";

type PlayList = {
  uniqueKey: string;
  name: string;
  displayImageURI: string;
  genre: string;
  songs: Song[];
  emotion: string;
}

export default PlayList;
