interface TravelServiceCardProps {
  title: string;
  description: string;
  image: string;
  duration: string;
  price: string;
  features: string[];
  category: string;
  serviceUrl?: string;
  locale?: string;
}

export const TravelServiceCard = ({ 
  title, 
  description, 
  image, 
  duration, 
  price,
  features,
  category,
  serviceUrl,
  locale = "en"
}: TravelServiceCardProps) => {
  const content = {
    en: {
      getStarted: "get started →",
      includes: "what's included",
      bookNow: "book consultation",
      freeService: "free consultation"
    },
    vi: {
      getStarted: "bắt đầu →",
      includes: "bao gồm gì",
      bookNow: "đặt tư vấn",
      freeService: "tư vấn miễn phí"
    }
  };

  const t = content[locale as keyof typeof content] || content.en;
  
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 group">
      <div className="aspect-[4/3] relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 text-gray-700 px-3 py-1 text-xs font-medium uppercase tracking-wider rounded-full">
            {category}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full ${
            price.toLowerCase().includes('free') || price.toLowerCase().includes('miễn phí')
              ? 'bg-emerald-500 text-white'
              : 'bg-white/90 text-gray-700'
          }`}>
            {price}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-serif font-semibold text-black mb-3 group-hover:text-emerald-700 transition-colors">
            {title}
          </h3>
          <p className="text-gray-700 leading-relaxed mb-3">{description}</p>
          <p className="text-gray-500 text-sm">{duration}</p>
        </div>
        
        <div className="mb-6">
          <p className="text-gray-800 font-medium mb-3 uppercase tracking-wider text-xs">{t.includes}</p>
          <div className="space-y-2">
            {features.slice(0, 3).map((feature, index) => (
              <div
                key={index}
                className="text-gray-600 text-sm flex items-center"
              >
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3 flex-shrink-0"></span>
                {feature}
              </div>
            ))}
            {features.length > 3 && (
              <p className="text-gray-500 text-xs italic">
                +{features.length - 3} more features
              </p>
            )}
          </div>
        </div>
        
        <div className="pt-4 border-t border-gray-100">
          <a
            href={`/${locale}/contact`}
            className="bg-emerald-700 text-white px-6 py-3 font-medium hover:bg-emerald-800 transition-colors inline-block text-center w-full rounded-md"
          >
            {price.toLowerCase().includes('free') || price.toLowerCase().includes('miễn phí') 
              ? t.freeService 
              : t.getStarted}
          </a>
        </div>
      </div>
    </div>
  );
};