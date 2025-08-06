import { useState, type FC } from "react";
import { TravelServiceCard } from "./TravelServiceCard";
import { travelServices } from "@/data/travelServices";

interface TravelServicesGridProps {
  filterCategory?: string;
  locale?: "en" | "vi";
}

export const TravelServicesGrid: FC<TravelServicesGridProps> = ({ filterCategory, locale = "en" }) => {
  const [localFilter, setLocalFilter] = useState<string>("");

  const activeFilter = filterCategory ?? localFilter;

  const filteredServices = activeFilter
    ? travelServices.filter((service) => {
        const category = locale === "vi" ? service.category_vi : service.category_en;
        return category === activeFilter;
      })
    : travelServices;

  const categories =
    locale === "vi"
      ? ["Tư vấn", "Lập kế hoạch", "Hỗ trợ", "Trải nghiệm"]
      : ["Consultation", "Planning", "Support", "Experience"];

  const content = {
    en: {
      showLabel: "show:",
      everything: "everything",
      myApproach: "my approach",
      approachText:
        "Every service I offer comes from real experience living in Europe and helping travelers create unforgettable journeys. I believe in authentic experiences over tourist traps.",
      howItWorks: "how it works",
      howItWorksText1:
        "Start with a free consultation to understand your travel dreams. Whether you want snowy mountains, cultural immersion, or specific destinations, I'll guide you to the perfect choice.",
      howItWorksText2:
        "From basic itineraries to personal guide services, each offering is designed to match different travel styles and budgets.",
      serviceTypes: "service types",
      serviceTypesText:
        "Free consultations, detailed planning with photography tips, visa support, and personal guide services with professional photos. All based on insider knowledge and real experience.",
      whoFor: "perfect for",
      whoForText:
        "Travelers who want authentic European experiences, solo adventurers seeking confidence, couples wanting romantic getaways, and anyone who loves capturing Instagram-worthy moments.",
      quote: "\"The best journeys are the ones designed around your dreams, not a guidebook\"",
    },
    vi: {
      showLabel: "hiển thị:",
      everything: "tất cả",
      myApproach: "cách tiếp cận của mình",
      approachText:
        "Mỗi dịch vụ mình cung cấp đều xuất phát từ kinh nghiệm thực tế sống ở châu Âu và giúp du khách tạo ra những hành trình khó quên. Mình tin vào trải nghiệm chân thực hơn là bẫy du lịch.",
      howItWorks: "cách thức hoạt động",
      howItWorksText1:
        "Bắt đầu với tư vấn miễn phí để hiểu giấc mơ du lịch của bạn. Dù bạn muốn núi tuyết, hòa nhập văn hóa, hay điểm đến cụ thể, mình sẽ hướng dẫn bạn đến lựa chọn hoàn hảo.",
      howItWorksText2:
        "Từ lịch trình cơ bản đến dịch vụ hướng dẫn cá nhân, mỗi dịch vụ được thiết kế để phù hợp với phong cách và ngân sách du lịch khác nhau.",
      serviceTypes: "loại dịch vụ",
      serviceTypesText:
        "Tư vấn miễn phí, lập kế hoạch chi tiết với mẹo chụp ảnh, hỗ trợ visa, và dịch vụ hướng dẫn cá nhân với ảnh chuyên nghiệp. Tất cả dựa trên kiến thức nội bộ và kinh nghiệm thực tế.",
      whoFor: "hoàn hảo cho",
      whoForText:
        "Du khách muốn trải nghiệm châu Âu chân thực, những người phiêu lưu một mình tìm kiếm tự tin, các cặp đôi muốn kỳ nghỉ lãng mạn, và bất cứ ai thích chụp những khoảnh khắc xứng đáng Instagram.",
      quote: "\"Những hành trình tốt nhất là những hành trình được thiết kế xung quanh giấc mơ của bạn, không phải sách hướng dẫn\"",
    },
  };

  const t = content[locale] ?? content.en;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-black mb-6">
            {locale === "en" ? "MY TRAVEL SERVICES" : "DỊCH VỤ DU LỊCH CỦA MÌNH"}
          </h2>
          <div className="max-w-3xl">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              {t.approachText}
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {t.howItWorksText1}
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {t.serviceTypesText}
            </p>
            <p className="text-gray-600 italic font-serif text-lg">
              {t.quote}
            </p>
          </div>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap items-center gap-4 mb-12 justify-center">
          <span className="text-sm text-gray-700 font-medium">{t.showLabel}</span>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setLocalFilter("")}
              className={`text-sm px-4 py-2 rounded-full transition-colors ${
                !activeFilter
                  ? "bg-emerald-700 text-white"
                  : "text-gray-700 bg-white border border-gray-200 hover:bg-gray-50"
              }`}
            >
              {t.everything}
            </button>
            {categories.map((category) => (
              <button
                type="button"
                key={category}
                onClick={() => setLocalFilter(category)}
                className={`text-sm px-4 py-2 rounded-full transition-colors ${
                  activeFilter === category
                    ? "bg-emerald-700 text-white"
                    : "text-gray-700 bg-white border border-gray-200 hover:bg-gray-50"
                }`}
              >
                {category.toLowerCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <TravelServiceCard
              key={service.id}
              title={locale === "vi" ? service.title_vi : service.title_en}
              description={locale === "vi" ? service.description_vi : service.description_en}
              image={service.image}
              duration={locale === "vi" ? service.duration_vi : service.duration}
              price={locale === "vi" ? service.price_vi : service.price}
              features={locale === "vi" ? service.features_vi : service.features_en}
              category={locale === "vi" ? service.category_vi : service.category_en}
              serviceUrl={service.serviceUrl}
              locale={locale}
            />
          ))}
        </div>
      </div>
    </section>
  );
};