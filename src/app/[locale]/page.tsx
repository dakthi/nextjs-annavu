import { type Metadata } from "next";
import HeroSection from "@/components/homepage/HeroSection";
import BrandStatementSection from "@/components/homepage/BrandStatementSection";
import JourneyStartSection from "@/components/homepage/JourneyStartSection";
import ExploreTripsSection from "@/components/homepage/ExploreTripsSection";
import MediaFeaturesSection from "@/components/homepage/MediaFeaturesSection";
import FeelingsEngineSection from "@/components/homepage/FeelingsEngineSection";
import FoundersSection from "@/components/homepage/FoundersSection";

type Props = {
  params: { locale: string };
};

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "vi" }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = params.locale;

  const translations = {
    en: {
      title: "Anna Vu - Travel Consultant & Cultural Explorer",
      description:
        "Anna Vu, travel consultant living in London, UK. Specializing in European adventures and cultural exploration experiences.",
      keywords: [
        "Anna Vu",
        "travel consultant",
        "European travel",
        "London",
        "cultural explorer",
        "travel planning",
        "Europe adventures",
        "travel guide",
      ],
    },
    vi: {
      title: "Anna Vu - Tư vấn du lịch & Khám phá văn hóa",
      description:
        "Anna Vu, tư vấn du lịch đang sinh sống tại London, UK. Chuyên về các cuộc phiêu lưu châu Âu và trải nghiệm khám phá văn hóa.",
      keywords: [
        "Anna Vu",
        "tư vấn du lịch",
        "du lịch châu Âu",
        "London",
        "khám phá văn hóa",
        "lập kế hoạch du lịch",
        "phiêu lưu châu Âu",
        "hướng dẫn du lịch",
      ],
    },
  };

  const t = translations[locale as keyof typeof translations] || translations.en;

  return {
    title: t.title,
    description: t.description,
    keywords: t.keywords,
    alternates: {
      canonical: `https://annavu.com/${locale}`,
    },
    openGraph: {
      type: "website",
      url: `https://annavu.com/${locale}`,
      title: t.title,
      description: t.description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function HomePage({ params }: Props) {
  const locale = params.locale;

  return (
    <div className="font-sans">
      <HeroSection locale={locale} />
      <BrandStatementSection locale={locale} />
      <JourneyStartSection locale={locale} />
      <ExploreTripsSection locale={locale} />
      <MediaFeaturesSection />
      <FeelingsEngineSection locale={locale} />
      <FoundersSection locale={locale} />
    </div>
  );
}
