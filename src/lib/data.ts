import { PlaceHolderImages } from "./placeholder-images";
import { Timestamp } from "firebase/firestore";

export type Dream = {
  id: string;
  title: string;
  entry: string;
  summary: string;
  artUrl: string;
  isHot: boolean;
  author: string;
  ownerId: string;
  mintDate: Timestamp;
};

const getImageUrl = (id: string) => {
    return PlaceHolderImages.find(img => img.id === id)?.imageUrl || 'https://picsum.photos/seed/error/600/800';
}

export const dreams: Omit<Dream, 'ownerId' | 'mintDate'>[] = [
  {
    id: "1",
    title: "The Melting Clock",
    entry: "I was on a floating island, and the clock on the old tower was melting like ice cream under two suns. Strange birds were singing backwards.",
    summary: "A surreal landscape with a melting clock on a floating island under two suns, accompanied by birds singing in reverse.",
    artUrl: getImageUrl("dream-1"),
    isHot: true,
    author: "lucid_dreamer",
  },
  {
    id: "2",
    title: "Coral City Depths",
    entry: "I swam through a city made of coral. The skyscrapers were giant, colorful reefs, and glowing jellyfish were the streetlights. Fish in business suits swam past me.",
    summary: "An underwater metropolis built from coral, illuminated by jellyfish, and inhabited by anthropomorphic fish.",
    artUrl: getImageUrl("dream-2"),
    isHot: false,
    author: "deep_diver",
  },
  {
    id: "3",
    title: "The Crystal Forest",
    entry: "The forest was made of glass trees that chimed when the wind blew. A river of pure light flowed through it, and I could see my own reflection in every leaf.",
    summary: "A forest of crystalline trees that create music with the wind, bisected by a luminous river.",
    artUrl: getImageUrl("dream-3"),
    isHot: false,
    author: "visionary",
  },
  {
    id: "4",
    title: "Martian Gold",
    entry: "As an astronaut on a red desert planet, I stumbled upon a lost temple. Inside, a floating golden artifact was pulsing with a soft, warm light.",
    summary: "An astronaut discovers a pulsating golden artifact within a temple on a desert planet.",
    artUrl: getImageUrl("dream-4"),
    isHot: true,
    author: "star_voyager",
  },
];

export const userProfile = {
  name: "Joshi",
  dreamStreak: 128,
  energy: 75, // percentage
};
