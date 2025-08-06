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
  
  const testimonials = [
    {
      text: locale === "en" ? "Anna helped us plan the most incredible European adventure. Every detail was perfect!" : "Anna đã giúp chúng tôi lập kế hoạch cho cuộc phiêu lưu châu Âu tuyệt vời nhất. Mọi chi tiết đều hoàn hảo!",
      author: "Micah, Egypt"
    },
    {
      text: locale === "en" ? "The cultural insights Anna provided made our trip truly authentic and meaningful." : "Những hiểu biết văn hóa mà Anna cung cấp đã làm cho chuyến đi của chúng tôi thực sự chân thực và ý nghĩa.",
      author: "Sarah, London"
    },
    {
      text: locale === "en" ? "Professional service with a personal touch. Anna's expertise is unmatched." : "Dịch vụ chuyên nghiệp với sự chăm sóc cá nhân. Chuyên môn của Anna không ai sánh được.",
      author: "James, Australia"
    },
    {
      text: locale === "en" ? "Thanks to Anna, we discovered hidden gems we never would have found ourselves." : "Nhờ Anna, chúng tôi đã khám phá những viên ngọc ẩn mà chúng tôi không bao giờ có thể tự tìm thấy.",
      author: "Maria, Spain"
    }
  ];

  const travellerTypes = [
    { label: "FAMILY", image: "/img/chelsea-in-bloom.jpg" },
    { label: "COUPLES", image: "/img/in-venice-carnival.jpg" },
    { label: "SOLO", image: "/img/in-budapest.jpg" },
    { label: "FRIENDS", image: "/img/Kandersteg.jpg" },
    { label: "LUXURY", image: "/img/Doumo-Milan.jpg" }
  ];

  const trips = [
    {
      title: locale === "en" ? "Mediterranean Dreams" : "Giấc mơ Địa Trung Hải",
      nights: "8 NIGHTS",
      image: "/img/in-venice-carnival.jpg"
    },
    {
      title: locale === "en" ? "Northern Lights Adventure" : "Cuộc phiêu lưu Cực quang",
      nights: "12 NIGHTS",
      image: "/img/Kandersteg.jpg"
    },
    {
      title: locale === "en" ? "Cultural Heritage Tour" : "Tour Di sản Văn hóa",
      nights: "10 NIGHTS",
      image: "/img/Doumo-Milan.jpg"
    }
  ];

  const mediaLogos = [
    "BBC Travel", "Lonely Planet", "National Geographic", "Travel + Leisure", "Condé Nast"
  ];

  return (
    <div className="font-sans">

      {/* Slide 1 - Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <video 
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay 
          muted 
          loop
          playsInline
        >
          <source src="/img/swiss-hero.mov" type="video/mp4" />
        </video>
        <div className="relative z-20 text-center text-white">
          <h1 className="text-6xl md:text-6xl font-bold uppercase tracking-[0.3em] leading-tight">
            {locale === "en" ? "Beyond destinations. Designed experiences.\nIN YOUR HANDS" : "Khám phá thế giới \n cùng Yến Vũ"}
          </h1>
        </div>
      </section>

      {/* Slide 2 - Brand Statement + Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-8 text-center mb-16">
          <p className="text-2xl leading-relaxed text-gray-700 font-serif mb-8">
            {locale === "en" 
              ? "We believe travel is about creating connections that last a lifetime. Every journey we craft is designed to open your heart to new cultures, landscapes, and experiences that transform how you see the world."
              : "Chúng tôi tin rằng du lịch là tạo ra những kết nối kéo dài suốt đời. Mọi hành trình chúng tôi tạo ra đều được thiết kế để mở lòng bạn với những nền văn hóa, cảnh quan và trải nghiệm mới làm thay đổi cách bạn nhìn thế giới."}
          </p>
          <button className="bg-black text-white px-8 py-3 font-medium hover:bg-gray-800 transition-colors">
            {locale === "en" ? "GET IN TOUCH" : "LIÊN HỆ"}
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="text-center p-6">
              <p className="text-gray-600 italic mb-4 leading-relaxed">"{testimonial.text}"</p>
              <p className="text-sm text-gray-500 italic">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Slide 3 - Start Your Journey */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center space-x-8 mb-8">
              <button className="uppercase text-sm font-medium border-b-2 border-black pb-2">
                {locale === "en" ? "BY TRAVELLER" : "THEO DU KHÁCH"}
              </button>
              <button className="uppercase text-sm font-medium text-gray-400 pb-2 hover:text-black transition-colors">
                {locale === "en" ? "MOST POPULAR" : "PHỔ BIẾN NHẤT"}
              </button>
              <button className="uppercase text-sm font-medium text-gray-400 pb-2 hover:text-black transition-colors">
                {locale === "en" ? "BY REGION" : "THEO KHU VỰC"}
              </button>
            </div>
            <h2 className="text-4xl font-bold mb-4">
              {locale === "en" ? "START YOUR JOURNEY" : "BẮT ĐẦU HÀNH TRÌNH CỦA BẠN"}
            </h2>
          </div>
          
          <div className="grid grid-cols-5 gap-4">
            {travellerTypes.map((type, index) => (
              <div key={index} className="relative h-96 group cursor-pointer overflow-hidden rounded-lg">
                <img 
                  src={type.image} 
                  alt={type.label} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-xl font-bold uppercase tracking-wider drop-shadow-lg">
                    {type.label}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Slide 4 - Explore Our Trips */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="mb-16">
            <h2 className="text-5xl font-serif font-bold mb-4">
              {locale === "en" ? "EXPLORE OUR TRIPS" : "KHÁM PHÁ CÁC CHUYẾN ĐI"}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              {locale === "en" 
                ? "Discover handcrafted journeys that blend luxury with authentic cultural experiences."
                : "Khám phá những hành trình được chế tác thủ công kết hợp giữa sự sang trọng và trải nghiệm văn hóa chân thực."}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trips.map((trip, index) => (
              <div key={index} className="relative group cursor-pointer overflow-hidden rounded-lg">
                <div className="aspect-[4/5] relative">
                  <img 
                    src={trip.image} 
                    alt={trip.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 text-black px-3 py-1 text-xs font-bold uppercase tracking-wider">
                      {trip.nights}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-2xl font-serif font-semibold mb-4">
                      {trip.title}
                    </h3>
                    <button className="bg-white text-black px-6 py-2 font-medium hover:bg-gray-100 transition-colors">
                      {locale === "en" ? "EXPLORE TRIP" : "KHÁM PHÁ CHUYẾN ĐI"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Slide 5 - Trust + Media Features */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex justify-center items-center space-x-12">
            {mediaLogos.map((logo, index) => (
              <div key={index} className="text-gray-400 font-medium text-lg opacity-60 hover:opacity-100 transition-opacity">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Slide 6 - The Feelings Engine */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-8">
          <h2 className="text-6xl md:text-8xl font-serif font-bold text-white mb-6">
            {locale === "en" ? "FEELINGS ENGINE" : "ĐỘNG CƠ CẢM XÚC"}
          </h2>
          <p className="text-xl text-white/80 uppercase tracking-wider mb-12 font-medium">
            {locale === "en" 
              ? "DISCOVER YOUR PERFECT JOURNEY THROUGH EMOTION"
              : "KHÁM PHÁ HÀNH TRÌNH HOÀN HẢO QUA CẢM XÚC"}
          </p>
          <button className="border-2 border-white text-white px-12 py-4 uppercase tracking-wider font-medium hover:bg-white hover:text-black transition-colors">
            {locale === "en" ? "TRY THE FEELINGS ENGINE" : "THỬ ĐỘNG CƠ CẢM XÚC"}
          </button>
        </div>
      </section>

      {/* Slide 7 - Founders' Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl font-bold uppercase tracking-wider">
                {locale === "en" ? "THE STORY BEHIND\nOUR PASSION" : "CÂU CHUYỆN ĐẰNG SAU\nNIỀM ĐAM MÊ"}
              </h2>
              <div className="space-y-6 text-lg text-gray-700 font-serif leading-relaxed">
                <p>
                  {locale === "en" 
                    ? "What began as personal curiosity about different cultures has evolved into a mission to create transformative travel experiences. We believe every journey should be a story worth telling."
                    : "Điều bắt đầu từ sự tò mò cá nhân về các nền văn hóa khác nhau đã phát triển thành sứ mệnh tạo ra những trải nghiệm du lịch mang tính chuyển đổi. Chúng tôi tin rằng mọi hành trình đều phải là một câu chuyện đáng kể."}
                </p>
                <p>
                  {locale === "en" 
                    ? "Our approach combines deep local knowledge with luxury service, ensuring that every detail of your adventure reflects both authenticity and excellence."
                    : "Cách tiếp cận của chúng tôi kết hợp kiến thức địa phương sâu sắc với dịch vụ sang trọng, đảm bảo rằng mọi chi tiết trong cuộc phiêu lưu của bạn đều phản ánh sự chân thực và xuất sắc."}
                </p>
              </div>
              <button className="bg-black text-white px-8 py-3 font-medium hover:bg-gray-800 transition-colors">
                {locale === "en" ? "WATCH THE FILM" : "XEM PHIM"}
              </button>
            </div>
            <div className="relative">
              <img 
                src="/img/in-budapest.jpg" 
                alt="Founder" 
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
