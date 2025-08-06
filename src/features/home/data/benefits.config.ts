import {
  GlobeAltIcon,
  MapPinIcon,
  HeartIcon,
  CameraIcon,
  BeakerIcon,
  SparklesIcon,
} from "@heroicons/react/24/solid";
import { ComponentType } from "react";

export interface BenefitItem {
  title: string;
  desc: string;
  icon: ComponentType<any>;
}

export interface BenefitSection {
  title: string;
  desc: string;
  image: string;
  bullets: BenefitItem[];
}

export const benefitOne: BenefitSection = {
  title: "European Adventure Specialist",
  desc: "Living in London and exploring Europe regularly, Anna has developed a deep understanding of European culture, hidden gems, and travel logistics. Her passion for discovery and cultural exploration makes her the perfect guide for your next adventure.",
  image: "/img/anna-10.jpg",
  bullets: [
    {
      title: "Regular European Explorer",
      desc: "Every 1-2 months, Anna embarks on new European adventures, continuously discovering hidden gems, local cultures, and unique experiences that she loves sharing with fellow travelers.",
      icon: GlobeAltIcon,
    },
    {
      title: "Cultural Immersion Expert",
      desc: "From the modern marvels of South Korea that sparked her wanderlust to the diverse cultures across Europe, Anna understands how to truly immerse in local experiences and help others do the same.",
      icon: HeartIcon,
    },
    {
      title: "Freedom Through Travel",
      desc: "Anna believes travel is about freedom, curiosity, and discovery. She helps others experience that liberating feeling of exploring new places without constraints or limitations.",
      icon: BeakerIcon,
    },
  ],
};

export const benefitTwo: BenefitSection = {
  title: "Personalized Travel Consulting Services",
  desc: "Anna doesn't just suggest destinations - she crafts personalized travel experiences that match your interests, budget, and travel style. Her curious nature and love for sharing discoveries make her the ideal travel companion.",
  image: "/img/anna-11.jpg",
  bullets: [
    {
      title: "Curious Explorer Mindset",
      desc: "Anna's natural curiosity drives her to discover the most interesting and unique aspects of each destination. She loves learning about local cultures and sharing these fascinating discoveries with others.",
      icon: CameraIcon,
    },
    {
      title: "Tailored Travel Experiences",
      desc: "Understanding that every traveler is different, Anna creates customized itineraries that match your interests, whether you seek adventure, cultural immersion, or relaxation.",
      icon: MapPinIcon,
    },
    {
      title: "Sharing the Joy of Discovery",
      desc: "Anna finds immense joy in helping others experience the same sense of wonder and freedom she feels when traveling. She believes in making travel accessible and enjoyable for everyone.",
      icon: SparklesIcon,
    },
  ],
};

export const benefits = [benefitOne, benefitTwo];