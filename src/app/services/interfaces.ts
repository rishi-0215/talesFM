export interface SectionContent {
  title: {
    text: string;
    size: "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl";
    weight:
      | "100"
      | "200"
      | "300"
      | "400"
      | "500"
      | "600"
      | "700"
      | "800"
      | "900";
  };
  subtitle?: string;
  paragraphs: string[];
}

// Radio Data

interface ContentObject {
  Country: string;
  Genre: string[];
  Frequency: string;
  Languages: string[];
}

interface RadioStationItem {
  name: string;
  content: ContentObject;
}

export interface RadioStationsData {
  title: string;
  description: string;
  subheading: string;
  content: RadioStationItem[];
}

// Public Radio Station
interface PublicRadioStation {
  name: string;
  frequency?: string;
}

export interface PublicRadioData {
  title: string;
  description: string;
  subheading: string;
  stations: PublicRadioStation[];
}

// Generalised interface

interface MusicFocusedStation {
  name: string;
  frequency?: string;
}
export interface MusicFocusedSectionData {
  title: string;
  description: string;
  stations: MusicFocusedStation[];
}

// Interface CityRadioStations
export interface CityRadioStations {
  title: string;
  description: string;
  cities: {
    name: string;
    stations: string[];
  }[];
}

export interface stepsToListen {
  title: string;
  description: string;
  stations: string[];
}


// Radiogenres

export interface RadioGenresData {
  title: string;
  genres: {
    name: string;
    description: string;
  }[];
}
// FAQData
export interface FAQItem {
  question: string;
  answer: string;
}

// review testimonials

export interface ReviewTestimonial {
  quote: string;
  name: string;
  title: string;
}

