import { ServiceCard } from "./ServiceCard";

interface ServicesGridProps {
  locale?: string;
}

export const ServicesGrid = ({ locale = 'en' }: ServicesGridProps) => {
  const services = [
    {
      id: 1,
      title_en: "Custom European Itineraries",
      title_vi: "Hành trình Châu Âu Tùy chỉnh",
      description_en: "Handcrafted travel plans based on your interests, timeline, and travel style. From romantic city breaks to cultural deep-dives.",
      description_vi: "Kế hoạch du lịch được chế tác thủ công dựa trên sở thích, thời gian và phong cách du lịch của bạn. Từ kỳ nghỉ lãng mạn đến khám phá văn hóa sâu sắc.",
      features: ["Personal consultation", "Detailed itinerary", "Local recommendations", "24/7 support"],
      features_vi: ["Tư vấn cá nhân", "Hành trình chi tiết", "Gợi ý địa phương", "Hỗ trợ 24/7"],
      duration: "2-3 weeks planning",
      duration_vi: "2-3 tuần lập kế hoạch",
      price_from: "From $500",
      price_from_vi: "Từ $500"
    },
    {
      id: 2,
      title_en: "Cultural Immersion Experiences",
      title_vi: "Trải nghiệm Hòa nhập Văn hóa",
      description_en: "Go beyond tourist attractions with authentic local experiences, hidden gems, and cultural connections that locals know about.",
      description_vi: "Vượt xa các điểm du lịch với những trải nghiệm địa phương chân thực, những viên ngọc ẩn và kết nối văn hóa mà người dân địa phương biết.",
      features: ["Local connections", "Hidden gems", "Cultural activities", "Language tips"],
      features_vi: ["Kết nối địa phương", "Viên ngọc ẩn", "Hoạt động văn hóa", "Mẹo ngôn ngữ"],
      duration: "1-2 weeks planning",
      duration_vi: "1-2 tuần lập kế hoạch",
      price_from: "From $300",
      price_from_vi: "Từ $300"
    },
    {
      id: 3,
      title_en: "Solo Travel Consulting",
      title_vi: "Tư vấn Du lịch Một mình",
      description_en: "Specialized guidance for solo travelers, including safety tips, social opportunities, and confidence-building recommendations.",
      description_vi: "Hướng dẫn chuyên biệt cho du khách một mình, bao gồm mẹo an toàn, cơ hội giao lưu và gợi ý xây dựng tự tin.",
      features: ["Safety guidance", "Social meetups", "Confidence building", "Emergency support"],
      features_vi: ["Hướng dẫn an toàn", "Gặp gỡ xã hội", "Xây dựng tự tin", "Hỗ trợ khẩn cấp"],
      duration: "1 week planning",
      duration_vi: "1 tuần lập kế hoạch",
      price_from: "From $200",
      price_from_vi: "Từ $200"
    },
    {
      id: 4,
      title_en: "Luxury Travel Planning",
      title_vi: "Lập kế hoạch Du lịch Sang trọng",
      description_en: "Premium travel experiences with luxury accommodations, exclusive access, and white-glove service throughout your journey.",
      description_vi: "Trải nghiệm du lịch cao cấp với chỗ ở sang trọng, quyền truy cập độc quyền và dịch vụ hoàn hảo suốt hành trình.",
      features: ["Luxury accommodations", "Exclusive access", "Concierge service", "VIP experiences"],
      features_vi: ["Chỗ ở sang trọng", "Truy cập độc quyền", "Dịch vụ thư ký", "Trải nghiệm VIP"],
      duration: "3-4 weeks planning",
      duration_vi: "3-4 tuần lập kế hoạch",
      price_from: "From $1,000",
      price_from_vi: "Từ $1,000"
    }
  ];

  const content = {
    en: {
      approach: "my approach",
      approachText: "Every journey starts with a conversation. I listen to your dreams, understand your travel style, and create experiences that feel uniquely yours. No two itineraries are ever the same.",
      philosophy: "philosophy",
      philosophyText: "Authentic experiences over tourist traps. I believe travel should transform you, not just entertain you. Every recommendation comes from personal experience or trusted local connections.",
      quote: "\"The best trips are the ones where you come home feeling like a different person\""
    },
    vi: {
      approach: "cách tiếp cận của mình",
      approachText: "Mỗi hành trình bắt đầu bằng một cuộc trò chuyện. Mình lắng nghe ước mơ của bạn, hiểu phong cách du lịch và tạo ra những trải nghiệm cảm thấy độc nhất của riêng bạn.",
      philosophy: "triết lý",
      philosophyText: "Trải nghiệm chân thực thay vì bẫy du lịch. Mình tin rằng du lịch nên biến đổi bạn, không chỉ giải trí. Mỗi gợi ý đều xuất phát từ kinh nghiệm cá nhân hoặc kết nối địa phương đáng tin cậy.",
      quote: "\"Những chuyến đi tốt nhất là những chuyến mà bạn về nhà cảm thấy như một người khác\""
    }
  };

  const t = content[locale as keyof typeof content] || content.en;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-black mb-6">
            {locale === "en" ? "HOW I WORK" : "CÁCH MÌNH LÀM VIỆC"}
          </h2>
          <div className="max-w-3xl">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              {t.approachText}
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {t.philosophyText}
            </p>
            <p className="text-gray-600 italic font-serif text-lg">
              {t.quote}
            </p>
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-serif font-semibold text-black mb-12 text-center">
            {locale === "en" ? "MY SERVICES" : "DỊCH VỤ CỦA MÌNH"}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                title={locale === "vi" ? service.title_vi : service.title_en}
                description={locale === "vi" ? service.description_vi : service.description_en}
                features={locale === "vi" ? service.features_vi : service.features}
                duration={locale === "vi" ? service.duration_vi : service.duration}
                priceFrom={locale === "vi" ? service.price_from_vi : service.price_from}
                locale={locale}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};