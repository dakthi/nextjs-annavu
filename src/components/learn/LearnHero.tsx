interface LearnHeroProps {
  lang?: "en" | "vi";
}

export const LearnHero = ({ lang = "en" }: LearnHeroProps) => {
  const content = {
    en: {
      tag: "travel wisdom from the road",
      title: "Everything I've learned about travel (and wish I'd known sooner)",
      description:
        "Years of exploring Europe and beyond have taught me what guidebooks never mention. These are the insights, tips, and cultural secrets that transform good trips into unforgettable journeys.",
      what: "what you'll discover",
      whatTags: ["hidden gems", "cultural insights", "practical tips"],
      subjects: "topics covered",
      subjectsTags: ["european culture", "travel planning", "local connections"],
      quote:
        '"Real travel isn\'t about seeing places, it\'s about understanding them. Let me show you the difference."',
      bottomNote: "authentic experiences, honest advice",
    },
    vi: {
      tag: "trí tuệ du lịch từ chuyến đi",
      title: "Tất cả những gì mình đã học về du lịch (và ước mình biết sớm hơn)",
      description:
        "Nhiều năm khám phá châu Âu và xa hơn đã dạy mình những điều mà sách hướng dẫn không bao giờ đề cập. Đây là những hiểu biết, mẹo vặt và bí mật văn hóa biến những chuyến đi tốt thành những hành trình khó quên.",
      what: "bạn sẽ khám phá",
      whatTags: ["viên ngọc ẩn", "hiểu biết văn hóa", "mẹo thực tế"],
      subjects: "chủ đề",
      subjectsTags: ["văn hóa châu Âu", "lập kế hoạch du lịch", "kết nối địa phương"],
      quote:
        '"Du lịch thực sự không phải là nhìn thấy những nơi chốn, mà là hiểu về chúng. Để mình chỉ cho bạn sự khác biệt."',
      bottomNote: "trải nghiệm chân thực, lời khuyên thật lòng",
    },
  };

  const t = content[lang];

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
            {lang === "en" ? "EXPLORE INSIGHTS" : "KHÁM PHÁ HIỂU BIẾT"}
          </button>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-16">
          <div className="text-center">
            <p className="text-gray-800 font-medium mb-4 uppercase tracking-wider text-sm">{t.what}</p>
            <div className="flex flex-wrap justify-center gap-3">
              {t.whatTags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-white text-gray-700 text-sm px-4 py-2 rounded-full shadow-sm border"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="hidden lg:block w-px h-16 bg-gray-300"></div>

          <div className="text-center">
            <p className="text-gray-800 font-medium mb-4 uppercase tracking-wider text-sm">{t.subjects}</p>
            <div className="flex flex-wrap justify-center gap-3">
              {t.subjectsTags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-white text-gray-700 text-sm px-4 py-2 rounded-full shadow-sm border"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 text-lg italic mb-4 font-serif">
            {t.quote}
          </p>
          <p className="text-gray-500 text-sm uppercase tracking-wider">{t.bottomNote}</p>
        </div>
      </div>
    </section>
  );
};