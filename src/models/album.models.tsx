import Artist from "./artist.models";
import Song from "./song.models";

type Album = {
    id: number;
    title: string;
    year: string;
    cover: string;
    //songList: Song[];
    //artistList: Artist[];
};

export default Album;