import { Container } from "@/components/Container";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import type { Metadata } from "next";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = params.locale;
  
  const translations = {
    en: {
      title: "Anna Vu - Travel Consulting Services",
      description: "Anna Vu's travel consulting services - personalized European adventures, cultural immersion experiences, and luxury travel planning. Based in London, UK.",
      keywords: ["Anna Vu services", "travel consulting", "European travel", "luxury travel planning", "cultural experiences", "personalized travel", "London travel consultant"],
      ogTitle: "Anna Vu - Travel Consulting Services",
      ogDescription: "Personalized European adventures and cultural immersion experiences from Anna Vu, your London-based travel consultant."
    },
    vi: {
      title: "Anna Vu - Dịch vụ Tư vấn Du lịch",
      description: "Dịch vụ tư vấn du lịch của Anna Vu - những cuộc phiêu lưu châu Âu được cá nhân hóa, trải nghiệm hòa nhập văn hóa và lập kế hoạch du lịch sang trọng. Có trụ sở tại London, UK.",
      keywords: ["dịch vụ Anna Vu", "tư vấn du lịch", "du lịch châu Âu", "lập kế hoạch du lịch sang trọng", "trải nghiệm văn hóa", "du lịch cá nhân hóa", "tư vấn du lịch London"],
      ogTitle: "Anna Vu - Dịch vụ Tư vấn Du lịch",
      ogDescription: "Những cuộc phiêu lưu châu Âu được cá nhân hóa và trải nghiệm hòa nhập văn hóa từ Anna Vu, tư vấn viên du lịch của bạn tại London."
    }
  };

  const t = translations[locale as keyof typeof translations] || translations.en;

  return {
    title: t.title,
    description: t.description,
    keywords: t.keywords,
    alternates: {
      canonical: `https://annavu.com/${locale}/services`,
    },
    openGraph: {
      type: "website",
      url: `https://annavu.com/${locale}/services`,
      title: t.ogTitle,
      description: t.ogDescription,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function ServicesPage({ params }: Props) {
  return (
    <>
      <ServicesHero locale={params.locale} />
      
      <Container className="mb-20">
        <ServicesGrid locale={params.locale} />
      </Container>
    </>
  );
}