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
    mission:
      "I believe travel is about freedom, curiosity, and discovery. My mission is to help others experience that same sense of wonder and liberation I feel when exploring new places. Whether you're seeking cultural immersion, hidden local gems, or simply the joy of discovering something new, I'm here to guide your journey.",
    gratitude:
      "Thank you for following along on my adventures ❤️. I'm grateful for the opportunity to connect, share, and inspire others to explore with curiosity and freedom. If you have any questions about European travel or destinations you'd like to explore, don't hesitate to reach out!",
    wishes: "Here's to a year filled with amazing adventures, cultural discoveries, and unforgettable journeys!",
    articles: [
      { title: "My First European Adventure: From London to Paris by Train", url: "/blog/first-european-adventure" },
      { title: "Hidden Gems in Eastern Europe: 5 Countries You Haven't Considered", url: "/blog/hidden-gems-eastern-europe" },
      { title: "Korean Culture Shock: What South Korea Taught Me About Travel", url: "/blog/korean-cultural-discovery" },
      { title: "Budget European Travel: How to Explore 3 Countries for Under £500", url: "/blog/budget-european-travel" },
      { title: "The Art of Slow Travel: Why I Spend 2-3 Days Minimum in Each City", url: "/blog/slow-travel-philosophy" },
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
                src="/img/anna-profile.jpg"
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
                  src={`/img/anna-travel-${num}.jpg`}
                  alt={`Anna Vu travel photo ${num}`}
                  className="w-full h-20 object-cover rounded-lg shadow-md transform hover:rotate-3 hover:scale-105 transition-transform duration-300"
                />
              ))}
            </div>
          </div>

          {/* Intro Section */}
          <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-xl p-6 transform -rotate-1 hover:rotate-0 transition-transform">
            <div className="flex flex-col gap-6">
              <img
                src="/img/anna-travel-main.jpg"
                alt="Anna Vu exploring Europe"
                className="rounded-xl object-cover shadow-lg border border-blue-200"
              />
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <h2 className="text-3xl font-bold text-blue-700 underline decoration-wavy">
                  About Anna
                </h2>
                <p>{profileData.introduction}</p>
                <p>{profileData.description}</p>
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
            src="/img/anna-europe-1.jpg"
            alt="Anna Vu in European city"
            className="rounded-2xl shadow-xl transform rotate-2 hover:rotate-0 transition-transform"
          />
          <img
            src="/img/anna-europe-2.jpg"
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
