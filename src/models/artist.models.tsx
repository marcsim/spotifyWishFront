import Album from "./album.models";
import Song from "./song.models";

type Artist = {
    id: number;
    name: string;
    isBand: boolean;
    albumList: Album[];
    songList: Song[];
}; 

export default Artist;