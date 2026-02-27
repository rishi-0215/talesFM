export interface ListSectionData {
  heading: string;
  description: string;
  items: string[];
}

export interface ParagraphSectionData {
  heading: string;
  paragraphs: string[];
}

export interface GenreItem {
  title: string;
  description: string;
}

export interface GenreSectionData {
  heading: string;
  intro: string;
  subIntro: string;
  genres: GenreItem[];
}
export interface Station {
  name: string;
  frequency: string;
  genre: string;
  languages: string;
  country: string;
}

export interface LanguageStation {
  language: string;
  stations: string[];
}

export interface CityStation {
  city: string;
  stations: string[];
}
