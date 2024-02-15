export interface Musician {
  id: number;
  nickname: string;
  first_name: string;
  last_name: string;
  image_path: string | null;
  age?: number | null;
}
