import type { Metadata } from "next";

type Props = {
  params: { locale: string };
  children: React.ReactNode;
};

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'vi' }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = params.locale;
  
  const translations = {
    en: {
      title: "Anna Vu - Travel Insights & Services",
      description: "Anna Vu's travel services and European insights from years of authentic exploration. From free consultations to personalized itineraries and personal guide services in Europe.",
      keywords: ["Anna Vu travel", "Anna Vu services", "European travel", "travel consultation", "travel planning", "personal guide", "visa support", "London travel consultant"],
      ogTitle: "Anna Vu - Travel Insights & Services",
      ogDescription: "Anna Vu's travel services and European insights from years of authentic exploration."
    },
    vi: {
      title: "Anna Vu - Hiểu biết Du lịch & Dịch vụ",
      description: "Dịch vụ du lịch và hiểu biết châu Âu của Anna Vu từ nhiều năm khám phá chân thực. Từ tư vấn miễn phí đến lịch trình cá nhân hóa và dịch vụ hướng dẫn cá nhân ở châu Âu.",
      keywords: ["Anna Vu du lịch", "Anna Vu dịch vụ", "du lịch châu Âu", "tư vấn du lịch", "lập kế hoạch du lịch", "hướng dẫn cá nhân", "hỗ trợ visa", "tư vấn du lịch London"],
      ogTitle: "Anna Vu - Hiểu biết Du lịch & Dịch vụ",
      ogDescription: "Dịch vụ du lịch và hiểu biết châu Âu của Anna Vu từ nhiều năm khám phá chân thực."
    }
  };

  const t = translations[locale as keyof typeof translations] || translations.en;

  return {
    title: t.title,
    description: t.description,
    keywords: t.keywords,
    alternates: {
      canonical: `https://annavu.com/${locale}/learn`,
    },
    openGraph: {
      type: "website",
      url: `https://annavu.com/${locale}/learn`,
      title: t.ogTitle,
      description: t.ogDescription,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function LearnLayout({ children }: Props) {
  return children;
}