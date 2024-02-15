export interface Track {
  id: number;
  title: string;
  artist: string;
  lyrics: string | null;
  musicianId: number;
  genreId: number;
  views: number;
}
