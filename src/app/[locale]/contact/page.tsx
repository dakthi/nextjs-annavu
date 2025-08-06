import { Container } from "@/components/Container";
import { ContactForm } from "@/components/ContactForm";
import type { Metadata } from "next";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = params.locale;
  
  const translations = {
    en: {
      title: "Contact Anna Vu - London Travel Consultant",
      description: "Contact Anna Vu for personalized European travel consulting, cultural immersion experiences, and luxury travel planning. London-based travel consultant.",
      keywords: ["contact Anna Vu", "Anna Vu London", "contact", "travel consultant", "European travel", "London travel consultant", "cultural travel specialist"],
      ogTitle: "Contact Anna Vu - London Travel Consultant",
      ogDescription: "Contact Anna Vu for personalized European travel consulting and cultural immersion experiences."
    },
    vi: {
      title: "Liên hệ Anna Vu - Tư vấn Du lịch London",
      description: "Liên hệ với Anna Vu để được tư vấn du lịch châu Âu cá nhân hóa, trải nghiệm hòa nhập văn hóa và lập kế hoạch du lịch sang trọng. Tư vấn viên du lịch tại London.",
      keywords: ["liên hệ Anna Vu", "Anna Vu London", "liên hệ", "tư vấn du lịch", "du lịch châu Âu", "tư vấn du lịch London", "chuyên gia du lịch văn hóa"],
      ogTitle: "Liên hệ Anna Vu - Tư vấn Du lịch London",
      ogDescription: "Liên hệ với Anna Vu để được tư vấn du lịch châu Âu cá nhân hóa và trải nghiệm hòa nhập văn hóa."
    }
  };

  const t = translations[locale as keyof typeof translations] || translations.en;

  return {
    title: t.title,
    description: t.description,
    keywords: t.keywords,
    alternates: {
      canonical: `https://annavu.com/${locale}/contact`,
    },
    openGraph: {
      type: "website",
      url: `https://annavu.com/${locale}/contact`,
      title: t.ogTitle,
      description: t.ogDescription,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function ContactPage({ params }: Props) {
  return <ContactForm locale={params.locale} />;
}