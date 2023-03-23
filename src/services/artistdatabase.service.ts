import { Artist } from "@/interfaces/artists.interface";

interface ArtistDatabase {
    list(): Promise<Artist[]>;
    create(artists: Artist[]): Promise<void>;
    drop(): Promise<any>;
}

export default ArtistDatabase;