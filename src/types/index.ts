
export interface Comic {
  id: number;
  title: string;
  image: string;
  thumbnailImage: string;
  genres: string[];
  description: string;
  pages: string[];
  popular: boolean;
  new: boolean;
}

export type ComicGenre = 'Романтика' | 'Экшен' | 'Комедия' | 'Школа' | 'Приключения';

export const genreColors: Record<ComicGenre, string> = {
  'Романтика': 'bg-manga-romance',
  'Экшен': 'bg-manga-action',
  'Комедия': 'bg-manga-comedy',
  'Школа': 'bg-manga-school',
  'Приключения': 'bg-manga-adventure',
};
