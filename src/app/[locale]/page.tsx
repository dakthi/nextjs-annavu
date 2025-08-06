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
  const profileData = {
    name: "Anna Vu",
    followers: "5K followers • Following European adventures",
    title: "Travel Consultant & Cultural Explorer",
    location: "Lives in London, United Kingdom",
    introduction:
      "Hello! I'm Anna, a travel consultant living and working in London, UK 🇬🇧. Every month or two, I embark on new European adventures, discovering hidden gems and authentic cultural experiences.",
    description:
      "My passion for travel was sparked by my first major trip to South Korea, where I was amazed by how modern and different it was from Vietnam. That experience opened my eyes to the incredible diversity of cultures and experiences waiting to be discovered around the world.",
    journey:
      "What led me to travel consulting wasn't a coincidence—it was a deliberate choice. When I joined travel groups and communities, I saw so many people with the same passion for travel as me, but they had countless questions. Often, when they asked in groups, they'd get brief answers, or the knowledgeable members wouldn't respond at all. I saw myself in those travelers—I remembered how difficult it was to find scattered information and piece together travel plans.",
    inspiration:
      "An inspiring woman in her 30s encouraged me to start writing and sharing my experiences. I began with visa application guides from the UK, and the response was incredible! My posts reached so many people, and I received countless messages with questions. I realized I could help others avoid the struggles I went through.",
    mission:
      "I believe travel is about freedom, curiosity, and discovery. My mission is to help others experience that same sense of wonder and liberation I feel when exploring new places. I love sharing what I know to help those who don't know—it's that simple. This work brings me joy because I'm naturally someone who enjoys helping others through knowledge sharing.",
    gratitude:
      "Thank you for following along on my adventures ❤️. I'm grateful for the opportunity to connect, share, and inspire others to explore with curiosity and freedom. If you have any questions about European travel or destinations you'd like to explore, don't hesitate to reach out!",
    wishes: "Here's to a year filled with amazing adventures, cultural discoveries, and unforgettable journeys!",
    articles: [
      { title: "Why I Became a Travel Consultant: From Traveler to Guide", url: "/blog/becoming-travel-consultant" },
      { title: "Korean Culture Shock: The Trip That Changed My Perspective", url: "/blog/korean-cultural-discovery" },
      { title: "UK Visa Applications: Complete Guide for European Travel", url: "/blog/uk-visa-applications-guide" },
      { title: "From Travel Groups to Professional Consulting: My Journey", url: "/blog/travel-groups-to-consulting" },
      { title: "Why I Started Writing Travel Guides: Helping Others Navigate", url: "/blog/why-travel-writing" },
      { title: "European Train Travel: The Ultimate Guide to Eurail Passes", url: "/blog/european-train-travel-guide" },
      { title: "Cultural Immersion: How to Connect with Locals While Traveling", url: "/blog/cultural-immersion-guide" },
      { title: "Solo Female Travel in Europe: Safety Tips and Confidence Building", url: "/blog/solo-female-travel-europe" },
      { title: "Food Adventures: Must-Try Dishes in Each European Country", url: "/blog/european-food-adventures" },
      { title: "Off-Season European Travel: Why Winter Might Be the Best Time", url: "/blog/off-season-europe-travel" },
      { title: "Photography Tips for European Architecture and Landscapes", url: "/blog/europe-photography-tips" },
      { title: "Language Barriers: How to Navigate Europe Without Speaking the Language", url: "/blog/language-barriers-europe" },
      { title: "European Festivals and Events: Timing Your Visit for Maximum Cultural Experience", url: "/blog/european-festivals-guide" },
      { title: "Sustainable Travel in Europe: Eco-Friendly Transportation and Accommodation", url: "/blog/sustainable-europe-travel" },
      { title: "European City Breaks vs. Country Exploration: Finding Your Travel Style", url: "/blog/city-breaks-vs-countryside" },
      { title: "Travel Planning 101: How I Research and Plan Each European Adventure", url: "/blog/travel-planning-process" },
      { title: "Cultural Etiquette: What to Know Before Visiting Different European Countries", url: "/blog/european-cultural-etiquette" },
      { title: "From Tourist to Traveler: How to Experience Europe Like a Local", url: "/blog/tourist-to-traveler-transformation" },
      { title: "European Markets and Local Shopping: Finding Authentic Souvenirs", url: "/blog/european-markets-shopping" },
      { title: "Travel Insurance for European Adventures: What You Need to Know", url: "/blog/europe-travel-insurance-guide" },
      { title: "Creating Your European Travel Bucket List: Destinations That Changed My Perspective", url: "/blog/european-travel-bucket-list" },
      { title: "The Freedom of European Travel: Why It's More Than Just Tourism", url: "/blog/freedom-through-european-travel" },
      { title: "Working Remotely While Exploring Europe: Tips for Digital Nomads", url: "/blog/remote-work-europe-travel" },
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
                  About Anna
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
          <h2 className="text-3xl font-bold text-blue-700 mb-6">Anna's Travel Articles</h2>
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
                  {article.title}
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
