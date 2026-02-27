import {
  SectionContent,
  FAQItem,
  
} from "../interfaces";
import {
  ListSectionData,
  ParagraphSectionData,
  Station,
  LanguageStation,
  CityStation
} from "./interfaces";
export const INDIAN_RADIO_DATA: SectionContent = {
  title: {
    text: "Indian Radio Online ",
    size: "6xl",
    weight: "900",
  },
  subtitle: "Listen to Live Radio Stations from India",
  paragraphs: [
    "India has always had a special and emotional relationship with radio. From devotional bhajans playing in the morning to Bollywood hits giving us company late at night, the radio has been an integral part of the country. Today, Indian radio online brings the same familiar experience to the digital world, making it even easier to stay connected through sound.",

    "With live radio stations available online, listeners can now explore a variety of music, news, talk shows, and regional programs, whether you are driving, doing household work, or relaxing at home.",

    "Whether you enjoy Hindi FM radio, regional language stations, or city-specific broadcasts, online radio allows you to experience India’s diversity. This page helps you discover and listen to live radio stations in India, organised by language, city, and genre, so you can tune in instantly and enjoy Indian radio anytime, anywhere. Here is what you are going to get from this page: ",
  ],
};

export const WHY_STILL_RADIO: SectionContent = {
  title: {
    text: "Why Radio Still Matters in India",
    size: "3xl",
    weight: "600",
  },
  paragraphs: [
    "In today's modern India, radio can be seen in daily indian life, whether it is in tea stalls, buses, homes, or even driving a car. Indians trust the radio for a variety of music, legitimate and true news, and even for companionship.",
    "In today's time, we have seen a shift from traditional FM to online radio, where you don't need any radio hardware; just visit the website or station and start listening.",
  ],
};


export const RADIO_STATIONS_IN_INDIA: SectionContent = {
  title: {
    text: "1. FM Radio Stations in India",
    weight: "500",
    size: "2xl",
  },
  paragraphs: [
    "India has numerous popular FM radio stations, including commercial networks like Radio Mirchi, Red FM, Radio City, Big FM, and Fever FM, alongside public broadcaster All India Radio (AIR) channels such as Vividh Bharati, FM Gold, and FM Rainbow, offering music, news, and regional content on a variety of frequencies, with specific popular stations often varying by city and language (Hindi, English, Kannada, Tamil, etc.) showcasing its popular FM culture in metro & tier-2 cities of India.",
  ],
};


export const faqData: FAQItem[] = [
  {
    question: "Can I listen to FM online?",
    answer:
      "Yes, you can listen to FM radio online using Tales FM. Our app streams live FM stations from around the world directly to your device without needing any special hardware.",
  },
  {
    question: "How to listen FM on mobile?",
    answer:
      "Download Tales FM from your app store, open the app, browse or search for FM stations, and tap to start streaming instantly. No setup required!",
  },
  {
    question: "Do I need an FM receiver to listen?",
    answer:
      "No FM receiver needed! Tales FM streams radio stations over the internet, so you can listen on any smartphone, tablet, or computer with an internet connection.",
  },
  {
    question: "Which Indian radio stations are popular?",
    answer:
      "Popular Indian stations on Tales FM include Radio Mirchi, Red FM, All India Radio, Radio City, and BIG FM. Search for your city or favorite station in the app.",
  },
  {
    question: "Can I listen Indian radio stations for free?",
    answer:
      "Absolutely! Tales FM lets you listen to all Indian radio stations completely free with no subscriptions, ads interrupting your listening, or hidden costs.",
  },
];

export const SIMPLE_STEPS_DATA: ListSectionData = {
  heading: "Simple steps to listen to Indian radio online",
  description:
    "To experience vast Indian radio content online, just follow these easy steps and pick your mood -",
  items: [
    "Open the Tales FM website or app",
    "Choose a station by language, city, or genre",
    "Tap play and listen instantly",
    "Works on mobile, tablet, and desktop",
  ],
};

export const BENEFITS_DATA: ListSectionData = {
  heading: "Benefits of Listening to Indian Radio Online",
  description:
    "Listening to the radio online has many benefits compared to listening to traditional radio:",
  items: [
    "Free access to Indian radio stations",
    "No FM receiver needed",
    "Listen anytime, anywhere",
    "Wide variety of languages & genres",
    "Perfect for travel, work, relaxation, and many more...",
  ],
};

export const NRI_SECTION_DATA: ParagraphSectionData = {
  heading: "Indian Radio Online for NRIs & Global Listeners",
  paragraphs: [
    "For Indians living abroad, radio is often the easiest way to feel closer to home. With Indian Radio Online for NRI listeners, familiar voices, languages, and music help bridge the distance between countries and cultures.",
    "It's popular among students, professionals, and frequent travellers who want to stay in touch with their favourite music and shows.",
    "No matter where you are in the world, you can listen to Indian radio abroad and relive memories through songs, news, and shows that reflect India's diverse culture and spirit.",
  ],
};

export const stations: Station[] = [
  {
    name: "Radio Mirchi",
    frequency: "98.3 FM",
    genre: "Bollywood, Indian music",
    languages:
      "Hindi, Telugu, Punjabi, Malayalam, Tamil, Kannada, Bengali, Gujarati, Multilingual, International, Marathi",
    country: "India",
  },
  {
    name: "Red FM",
    frequency: "93.5 FM",
    genre: "Bollywood, talk, rock, dance",
    languages: "Hindi, Kannada, Malayalam, Telugu",
    country: "India",
  },
  {
    name: "Radio City",
    frequency: "91.1 FM",
    genre: "News, talk, pop",
    languages: "Hindi",
    country: "India",
  },
  {
    name: "Fever FM",
    frequency: "Primarily 104.0 MHz",
    genre: "Bollywood",
    languages:
      "Hindi, English, Marathi in Mumbai, Tamil in Chennai, Kannada in Bengaluru",
    country: "India",
  },
  {
    name: "All India Radio (AIR) FM Gold/Rainbow",
    frequency: "107.1 MHz",
    genre: "Bollywood, Western pop",
    languages:
      "Hindi, English, Marathi in Mumbai, Tamil in Chennai, Kannada in Bengaluru",
    country: "India",
  },
  {
    name: "Vividh Bharati (AIR)",
    frequency: "Between 93.9 MHz and 104.5 MHz",
    genre: "Bollywood, shows, comedy, etc",
    languages: "Hindi and other regional languages",
    country: "India",
  },
  {
    name: "Radio Nasha",
    frequency: "107.2 FM, 91.9 FM, 94.3 FM",
    genre: "Bollywood, Pop",
    languages: "Hindi",
    country: "India",
  },
  {
    name: "My FM",
    frequency: "94.3 FM",
    genre: "News, pop",
    languages: "Hindi",
    country: "India",
  },
  {
    name: "Radio One",
    frequency: "94.3 FM",
    genre: "Pop, rock",
    languages: "International, English",
    country: "India",
  },
];

//indian radio by language
export const languages: LanguageStation[] = [
  {
    language: "Hindi Radio Stations",
    stations: [
      "Radio Mirchi 98.3 FM",
      "Red FM 93.5 FM",
      "Vividh Bharati 100.1 FM",
      "Mirchi Love 104 FM",
      "Radio Nasha 107.2 FM",
    ],
  },
  {
    language: "English Radio Stations",
    stations: ["Radio One 94.3 FM", "Indigo 91.9 FM", "Kool 104 FM"],
  },
  {
    language: "Tamil Radio Stations",
    stations: ["Suryan FM 93.5 FM", "Hello FM 106.4 FM", "Radio Mirchi Tamil"],
  },
  {
    language: "Telugu Radio Stations",
    stations: [
      "Radio Mirchi Telugu 98.3 FM",
      "Big FM 92.7 FM",
      "Radio City 91.1 FM",
      "Red FM 93.5 FM",
    ],
  },
  {
    language: "Malayalam Radio Stations",
    stations: [
      "Radio Mango 91.9 FM",
      "Club FM 94.3 FM",
      "Red FM 93.5 FM",
      "Radio Mirchi 98.3 FM",
    ],
  },
  {
    language: "Kannada Radio Stations",
    stations: [
      "Radio City Kannada 91.1 FM",
      "Big FM 92.7 FM",
      "Radio Mirchi 98.3 FM",
    ],
  },
  {
    language: "Punjabi Radio Stations",
    stations: ["All India Radio Punjabi Channels", "Punjabi Fever 107.2 FM"],
  },
  {
    language: "Bengali Radio Stations",
    stations: ["Friends FM 91.9 FM", "Amar FM 106.2 FM"],
  },
  {
    language: "Marathi Radio Stations",
    stations: ["Friends FM 91.9 FM", "Amar FM 106.2 FM"],
  },
  {
    language: "Gujarati Radio Stations",
    stations: ["Radio City Ahmedabad", "My FM 104.3 FM"],
  },
  {
    language: "Urdu Radio Stations",
    stations: ["Radio Charminar 107.8 FM", "AIR Urdu Service"],
  },
];


export const cities: CityStation[] = [
  {
    city: "Delhi NCR Radio Stations",
    stations: [
      "Radio Mirchi 98.3 FM",
      "Red FM 93.5 FM",
      "Fever 104 FM",
      "BIG FM 92.7 FM",
    ],
  },
  {
    city: "Mumbai Radio Stations",
    stations: [
      "Radio Mirchi 98.3 FM",
      "Radio City 91.1 FM",
      "Radio Nasha 98.3 FM",
      "Fever 104 FM",
    ],
  },
  {
    city: "Bengaluru Radio Stations",
    stations: [
      "Red FM 93.5 FM",
      "Radio City 91.1 FM",
      "Fever 104 FM",
      "BIG FM 92.7 FM",
    ],
  },
  {
    city: "Chennai Radio Stations",
    stations: [
      "Radio Mirchi 98.3 FM",
      "Hello FM 106.4 FM",
      "Chennai Live 104.8 FM",
      "BIG FM 92.7 FM",
    ],
  },
  {
    city: "Hyderabad Radio Stations",
    stations: [
      "Radio Mirchi 98.3 FM",
      "Red FM 93.5 FM",
      "Fever 104 FM",
      "Radio City 91.1 FM",
    ],
  },
  {
    city: "Kolkata Radio Stations",
    stations: [
      "Radio Mirchi 98.3 FM",
      "Red FM 93.5 FM",
      "BIG FM 92.7 FM",
      "AIR FM Rainbow",
    ],
  },
  {
    city: "Pune Radio Stations",
    stations: [
      "Radio City 91.1 FM",
      "Red FM 93.5 FM",
      "Radio Mirchi 98.3 FM",
      "BIG FM 92.7 FM",
    ],
  },
  {
    city: "Ahmedabad Radio Stations",
    stations: [
      "Radio Mirchi 98.3 FM",
      "Red FM 93.5 FM",
      "BIG FM 92.7 FM",
      "Radio City 91.1 FM",
    ],
  },
];
