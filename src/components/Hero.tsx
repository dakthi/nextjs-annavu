import Image from "next/image";

interface HeroProps {
  locale?: string;
}

export const Hero = ({ locale = "en" }: HeroProps) => {
  const content = {
    en: {
      title: "your travel companion to europe",
      paragraph1:
        "I'm Anna, living in London and passionate about exploring Europe. Every month or two, I discover new countries, cultures, and experiences. Travel isn't just about reaching destinations – it's about freedom, curiosity, and sharing those amazing discoveries with others.",
      paragraph2: {
        line1: "From the modern marvels of South Korea to the hidden gems of Europe,",
        line2: "I help others experience that same sense of freedom and wonder.",
        line3: "Let me guide your next adventure.",
      },
      cta: "start your journey",
      ctaHref: "/contact",
    },
    vi: {
      title: "người bạn đồng hành châu âu của bạn",
      paragraph1:
        "Tôi là Anna, đang sống ở London và đam mê khám phá châu Âu. Mỗi tháng hoặc hai tháng, tôi khám phá những đất nước, văn hóa và trải nghiệm mới. Du lịch không chỉ là đến đích – mà là về sự tự do, tò mò và chia sẻ những khám phá tuyệt vời với người khác.",
      paragraph2: {
        line1: "Từ những kỳ quan hiện đại của Hàn Quốc đến những viên ngọc ẩn của châu Âu,",
        line2: "tôi giúp mọi người trải nghiệm cảm giác tự do và ngạc nhiên tương tự.",
        line3: "Hãy để tôi hướng dẫn cuộc phiêu lưu tiếp theo của bạn.",
      },
      cta: "bắt đầu hành trình",
      ctaHref: "/contact",
    },
  };

  const t = content[locale as keyof typeof content] || content.en;

  return (
    <div className="bg-gradient-to-br from-white to-gray-50 dark:from-neutral-900 dark:to-neutral-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-0 flex flex-wrap xl:mt-14 xl:pb-5 mb-16 md:mb-40">
        
        {/* IMAGE */}
        <div className="order-first lg:order-last flex w-full lg:w-1/2">
          <div className="relative w-full h-64 lg:h-full flex items-stretch">
            <div className="w-full h-full rounded-xl shadow-xl shadow-black/30 dark:shadow-black/50 border border-gray-200 dark:border-gray-700 overflow-hidden">
              <Image
                src="/img/anna-3.jpg"
                alt="hero illustration"
                fill
                className="object-cover"
                quality={100}
                priority
              />
            </div>
          </div>
        </div>

        {/* TEXT */}
        <div className="order-last lg:order-first flex items-center w-full lg:w-1/2 mt-8 lg:mt-0">
          <div className="max-w-xl">
            <h1
              className="text-xl font-normal leading-snug tracking-wide text-black dark:text-white lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight lowercase"
              dangerouslySetInnerHTML={{ __html: t.title }}
            />
            <p
              className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-300 lowercase lg:text-xl"
              dangerouslySetInnerHTML={{
                __html: locale === "en" ? content.en.paragraph1 : content.vi.paragraph1,
              }}
            />
            <p
              className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-300 lowercase lg:text-xl"
              dangerouslySetInnerHTML={{
                __html:
                  locale === "en"
                    ? `${content.en.paragraph2.line1}<br/>${content.en.paragraph2.line2}<br/>${content.en.paragraph2.line3}`
                    : `${content.vi.paragraph2.line1}<br/>${content.vi.paragraph2.line2}<br/>${content.vi.paragraph2.line3}`,
              }}
            />
            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row mt-6">
              <a
                href={t.ctaHref}
                className="bg-white dark:bg-neutral-800 hover:bg-gray-100 dark:hover:bg-neutral-700 border border-gray-200 dark:border-gray-700 text-black dark:text-white px-6 py-3 rounded-sm transition-all duration-200 shadow-lg shadow-black/10 dark:shadow-black/20"
              >
                {t.cta}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
