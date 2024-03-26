import Song from "./Song";

type PlayList = {
  name: string;
  displayImageURI: string;
  genre: string;
  songs: Song[];
  emotion: string;
}

export default PlayList;
