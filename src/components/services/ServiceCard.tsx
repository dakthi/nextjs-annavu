interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  duration: string;
  priceFrom: string;
  locale?: string;
}

export const ServiceCard = ({ 
  title, 
  description, 
  features, 
  duration,
  priceFrom,
  locale = "en"
}: ServiceCardProps) => {
  const content = {
    en: {
      getStarted: "get started →",
      includes: "what's included"
    },
    vi: {
      getStarted: "bắt đầu →",
      includes: "bao gồm gì"
    }
  };

  const t = content[locale as keyof typeof content] || content.en;
  
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-all duration-300 group">
      <div className="mb-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-serif font-semibold text-black leading-tight group-hover:text-gray-700 transition-colors">
            {title}
          </h3>
          <span className="text-sm text-gray-500 font-medium ml-4 flex-shrink-0">
            {priceFrom}
          </span>
        </div>
        <p className="text-gray-700 leading-relaxed mb-3">{description}</p>
        <p className="text-gray-500 text-sm">{duration}</p>
      </div>
      
      <div className="mb-8">
        <p className="text-gray-800 font-medium mb-3 uppercase tracking-wider text-xs">{t.includes}</p>
        <div className="space-y-2">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-gray-600 text-sm flex items-center"
            >
              <span className="w-1.5 h-1.5 bg-black rounded-full mr-3 flex-shrink-0"></span>
              {feature}
            </div>
          ))}
        </div>
      </div>
      
      <div className="pt-4 border-t border-gray-100">
        <a
          href={`/${locale}/contact`}
          className="bg-emerald-700 text-white px-6 py-3 font-medium hover:bg-emerald-800 transition-colors inline-block text-center w-full"
        >
          {t.getStarted}
        </a>
      </div>
    </div>
  );
};