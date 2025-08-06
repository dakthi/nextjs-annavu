interface ServicesHeroProps {
  locale?: string;
}

export const ServicesHero = ({ locale = 'en' }: ServicesHeroProps) => {
  const content = {
    en: {
      tag: "what i offer",
      title: "Travel consulting services designed around you",
      description: "From quick cultural insights to fully planned European adventures, I craft experiences that match your style, interests, and dreams. No cookie-cutter itineraries—just authentic journeys.",
      specializing: "specializing in",
      services: "my services"
    },
    vi: {
      tag: "những gì mình cung cấp",
      title: "Dịch vụ tư vấn du lịch được thiết kế dành riêng cho bạn",
      description: "Từ những hiểu biết văn hóa nhanh chóng đến những cuộc phiêu lưu châu Âu được lập kế hoạch đầy đủ, mình tạo ra những trải nghiệm phù hợp với phong cách, sở thích và ước mơ của bạn. Không có hành trình sao chép—chỉ có những chuyến đi chân thực.",
      specializing: "chuyên về",
      services: "dịch vụ của mình"
    }
  };

  const t = content[locale as keyof typeof content] || content.en;
  
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block bg-white text-gray-600 text-sm px-4 py-2 rounded-full mb-6 shadow-sm">
            {t.tag}
          </div>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-black mb-6 leading-tight">
            {t.title}
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
            {t.description}
          </p>
          <button className="bg-emerald-700 text-white px-8 py-3 font-medium hover:bg-emerald-800 transition-colors">
            {locale === "en" ? "START PLANNING" : "BẮT ĐẦU LẬP KẾ HOẠCH"}
          </button>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-16">
          <div className="text-center">
            <p className="text-gray-800 font-medium mb-4 uppercase tracking-wider text-sm">{t.specializing}</p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="bg-white text-gray-700 text-sm px-4 py-2 rounded-full shadow-sm border">European Culture</span>
              <span className="bg-white text-gray-700 text-sm px-4 py-2 rounded-full shadow-sm border">Luxury Travel</span>
              <span className="bg-white text-gray-700 text-sm px-4 py-2 rounded-full shadow-sm border">Solo Adventures</span>
              <span className="bg-white text-gray-700 text-sm px-4 py-2 rounded-full shadow-sm border">Cultural Immersion</span>
            </div>
          </div>
          
          <div className="hidden lg:block w-px h-16 bg-gray-300"></div>
          
          <div className="text-center">
            <p className="text-gray-800 font-medium mb-4 uppercase tracking-wider text-sm">{t.services}</p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="bg-white text-gray-700 text-sm px-4 py-2 rounded-full shadow-sm border">custom itineraries</span>
              <span className="bg-white text-gray-700 text-sm px-4 py-2 rounded-full shadow-sm border">local connections</span>
              <span className="bg-white text-gray-700 text-sm px-4 py-2 rounded-full shadow-sm border">cultural guidance</span>
              <span className="bg-white text-gray-700 text-sm px-4 py-2 rounded-full shadow-sm border">24/7 support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};