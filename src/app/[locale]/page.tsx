import { type Metadata } from "next";

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
  const profileData = {
    name: "Anna Vu",
    followers: locale === "en" ? "5K followers • Following European adventures" : "5K người theo dõi • Theo dõi những cuộc phiêu lưu châu Âu",
    title: locale === "en" ? "Travel Consultant & Cultural Explorer" : "Tư vấn Du lịch & Nhà khám phá Văn hóa",
    location: locale === "en" ? "Lives in London, United Kingdom" : "Sống tại London, Vương quốc Anh",
    introduction: locale === "en" 
      ? "Hello! I'm Anna, a travel consultant living and working in London, UK 🇬🇧. Every month or two, I embark on new European adventures, discovering hidden gems and authentic cultural experiences."
      : "Xin chào! Tôi là Anna, một tư vấn viên du lịch đang sống và làm việc tại London, UK 🇬🇧. Mỗi một hoặc hai tháng, tôi bắt đầu những cuộc phiêu lưu mới ở châu Âu, khám phá những viên ngọc ẩn và trải nghiệm văn hóa chân thực.",
    description: locale === "en"
      ? "My passion for travel was sparked by my first major trip to South Korea, where I was amazed by how modern and different it was from Vietnam. That experience opened my eyes to the incredible diversity of cultures and experiences waiting to be discovered around the world."
      : "Niềm đam mê du lịch của tôi được khơi nguồn từ chuyến đi lớn đầu tiên đến Hàn Quốc, nơi tôi ngạc nhiên trước sự hiện đại và khác biệt so với Việt Nam. Trải nghiệm đó mở mắt tôi về sự đa dạng đáng kinh ngạc của các nền văn hóa và trải nghiệm đang chờ được khám phá trên khắp thế giới.",
    journey: locale === "en"
      ? "What led me to travel consulting wasn't a coincidence—it was a deliberate choice. When I joined travel groups and communities, I saw so many people with the same passion for travel as me, but they had countless questions. Often, when they asked in groups, they'd get brief answers, or the knowledgeable members wouldn't respond at all. I saw myself in those travelers—I remembered how difficult it was to find scattered information and piece together travel plans."
      : "Điều dẫn tôi đến công việc tư vấn du lịch không phải là một sự trùng hợp—mà là một quyết định có chủ đích. Khi tôi tham gia các nhóm và cộng đồng du lịch, tôi thấy rất nhiều người có cùng niềm đam mê du lịch như tôi, nhưng họ có vô số câu hỏi. Thường thì khi họ hỏi trong nhóm, họ chỉ nhận được câu trả lời ngắn gọn, hoặc những thành viên có kiến thức lại không trả lời. Tôi thấy chính mình trong những du khách đó—tôi nhớ việc tìm kiếm thông tin rải rác và ghép nối kế hoạch du lịch khó khăn như thế nào.",
    inspiration: locale === "en"
      ? "An inspiring woman in her 30s encouraged me to start writing and sharing my experiences. I began with visa application guides from the UK, and the response was incredible! My posts reached so many people, and I received countless messages with questions. I realized I could help others avoid the struggles I went through."
      : "Một người phụ nữ truyền cảm hứng ở độ tuổi 30 đã khuyến khích tôi bắt đầu viết và chia sẻ trải nghiệm của mình. Tôi bắt đầu với những hướng dẫn xin visa từ UK, và phản hồi thật không thể tin được! Bài viết của tôi tiếp cận được rất nhiều người, và tôi nhận được vô số tin nhắn với những câu hỏi. Tôi nhận ra rằng tôi có thể giúp những người khác tránh được những khó khăn mà tôi đã trải qua.",
    mission: locale === "en"
      ? "I believe travel is about freedom, curiosity, and discovery. My mission is to help others experience that same sense of wonder and liberation I feel when exploring new places. I love sharing what I know to help those who don't know—it's that simple. This work brings me joy because I'm naturally someone who enjoys helping others through knowledge sharing."
      : "Tôi tin rằng du lịch là về sự tự do, tò mò và khám phá. Sứ mệnh của tôi là giúp những người khác trải nghiệm cảm giác ngạc nhiên và giải phóng tương tự mà tôi cảm thấy khi khám phá những nơi mới. Tôi yêu thích việc chia sẻ những gì tôi biết để giúp những người không biết—đơn giản như vậy thôi. Công việc này mang lại niềm vui cho tôi vì tôi là người tự nhiên thích giúp đỡ người khác thông qua việc chia sẻ kiến thức.",
    gratitude: locale === "en"
      ? "Thank you for following along on my adventures ❤️. I'm grateful for the opportunity to connect, share, and inspire others to explore with curiosity and freedom. If you have any questions about European travel or destinations you'd like to explore, don't hesitate to reach out!"
      : "Cảm ơn các bạn đã theo dõi những cuộc phiêu lưu của tôi ❤️. Tôi biết ơn vì có cơ hội kết nối, chia sẻ và truyền cảm hứng cho những người khác khám phá với sự tò mò và tự do. Nếu bạn có bất kỳ câu hỏi nào về du lịch châu Âu hoặc những điểm đến bạn muốn khám phá, đừng ngần ngại liên hệ!",
    wishes: locale === "en" ? "Here's to a year filled with amazing adventures, cultural discoveries, and unforgettable journeys!" : "Chúc một năm đầy những cuộc phiêu lưu tuyệt vời, khám phá văn hóa và những hành trình khó quên!",
    articles: [
      { 
        title_en: "Why I Became a Travel Consultant: From Traveler to Guide", 
        title_vi: "Tại sao tôi trở thành Tư vấn Du lịch: Từ Du khách đến Người hướng dẫn",
        url: "/blog/becoming-travel-consultant" 
      },
      { 
        title_en: "Korean Culture Shock: The Trip That Changed My Perspective", 
        title_vi: "Sốc Văn hóa Hàn Quốc: Chuyến đi Thay đổi Góc nhìn của tôi",
        url: "/blog/korean-cultural-discovery" 
      },
      { 
        title_en: "From Travel Groups to Professional Consulting: My Journey", 
        title_vi: "Từ Nhóm Du lịch đến Tư vấn Chuyên nghiệp: Hành trình của tôi",
        url: "/blog/travel-groups-to-consulting" 
      },
      { 
        title_en: "UK Visa Applications: Complete Guide for European Travel", 
        title_vi: "Xin Visa UK: Hướng dẫn Hoàn chỉnh cho Du lịch Châu Âu",
        url: "/blog/uk-visa-applications-guide" 
      },
      { 
        title_en: "European Train Travel: The Ultimate Guide to Eurail Passes", 
        title_vi: "Du lịch Tàu hỏa Châu Âu: Hướng dẫn Tối ưu về Eurail Pass",
        url: "/blog/european-train-travel-guide" 
      },
      { 
        title_en: "Cultural Immersion: How to Connect with Locals While Traveling", 
        title_vi: "Hòa nhập Văn hóa: Cách Kết nối với Người địa phương khi Du lịch",
        url: "/blog/cultural-immersion-guide" 
      },
      { 
        title_en: "Solo Female Travel in Europe: Safety Tips and Confidence Building", 
        title_vi: "Du lịch Một mình dành cho Phụ nữ ở Châu Âu: Mẹo An toàn và Xây dựng Tự tin",
        url: "/blog/solo-female-travel-europe" 
      },
      { 
        title_en: "Food Adventures: Must-Try Dishes in Each European Country", 
        title_vi: "Cuộc phiêu lưu Ẩm thực: Món ăn Không thể bỏ lỡ ở mỗi Quốc gia Châu Âu",
        url: "/blog/european-food-adventures" 
      },
      { 
        title_en: "Off-Season European Travel: Why Winter Might Be the Best Time", 
        title_vi: "Du lịch Châu Âu Ngoài mùa: Tại sao Mùa đông có thể là Thời điểm Tốt nhất",
        url: "/blog/off-season-europe-travel" 
      },
      { 
        title_en: "Photography Tips for European Architecture and Landscapes", 
        title_vi: "Mẹo Chụp ảnh Kiến trúc và Phong cảnh Châu Âu",
        url: "/blog/europe-photography-tips" 
      },
    ],
  };

  return (
    <main className="min-h-screen bg-blue-50 dark:bg-neutral-900 font-sans tracking-wide">
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
        {/* Side by Side Layout on XL */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {/* Profile Card */}
          <div className="relative bg-white dark:bg-neutral-800 rounded-2xl shadow-2xl p-8 transform rotate-1 hover:rotate-0 transition-transform">
            <div className="flex flex-col items-center space-y-4">
              <img
                src="/img/anna-1.jpg"
                alt="Anna Vu"
                className="w-36 h-36 rounded-full object-cover shadow-lg border-4 border-blue-200"
              />
              <div className="text-center space-y-1">
                <h1 className="text-4xl font-bold text-blue-700">{profileData.name}</h1>
                <p className="text-gray-500 italic">{profileData.followers}</p>
                <p className="text-xl text-blue-500">{profileData.title}</p>
                <p className="text-gray-400">{profileData.location}</p>
              </div>
            </div>
            {/* Floating Gallery */}
            <div className="grid grid-cols-5 gap-2 mt-8">
              {[2, 3, 4, 5, 6].map((num, i) => (
                <img
                  key={i}
                  src={`/img/anna-${num}.jpg`}
                  alt={`Anna Vu photo ${num}`}
                  className="w-full h-20 object-cover rounded-lg shadow-md transform hover:rotate-3 hover:scale-105 transition-transform duration-300"
                />
              ))}
            </div>
          </div>

          {/* Intro Section */}
          <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-xl p-6 transform -rotate-1 hover:rotate-0 transition-transform">
            <div className="flex flex-col gap-6">
              <img
                src="/img/anna-7.jpg"
                alt="Anna Vu exploring Europe"
                className="rounded-xl object-cover shadow-lg border border-blue-200"
              />
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <h2 className="text-3xl font-bold text-blue-700 underline decoration-wavy">
                  {locale === "en" ? "About Anna" : "Về Anna"}
                </h2>
                <p>{profileData.introduction}</p>
                <p>{profileData.description}</p>
                <p>{profileData.journey}</p>
                <p>{profileData.inspiration}</p>
                <p>{profileData.mission}</p>
                <p>{profileData.gratitude}</p>
                <p className="font-semibold text-blue-600">{profileData.wishes}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Polaroid Style Feature */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <img
            src="/img/anna-8.jpg"
            alt="Anna Vu in European city"
            className="rounded-2xl shadow-xl transform rotate-2 hover:rotate-0 transition-transform"
          />
          <img
            src="/img/anna-9.jpg"
            alt="Anna Vu cultural exploration"
            className="rounded-2xl shadow-xl transform -rotate-2 hover:rotate-0 transition-transform"
          />
        </div>

        {/* Articles */}
        <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-blue-700 mb-6">{locale === "en" ? "Anna's Travel Articles" : "Bài viết Du lịch của Anna"}</h2>
          <div className="space-y-4">
            {profileData.articles.map((article, i) => (
              <div
                key={i}
                className="pl-4 border-l-4 border-blue-300 hover:bg-blue-50 dark:hover:bg-neutral-700 transition rounded"
              >
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {locale === "en" ? article.title_en : article.title_vi}
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center py-4 text-gray-500 italic">
          © 2025 Anna Vu. All rights reserved.
        </div>
      </div>
    </main>
  );
}
