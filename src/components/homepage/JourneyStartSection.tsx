import { HomepageProps } from '@/types/homepage';
import { travellerTypes } from '@/data/homepage';

export default function JourneyStartSection({ locale }: HomepageProps) {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-12">
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-8">
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
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            {locale === "en" ? "START YOUR JOURNEY" : "BẮT ĐẦU HÀNH TRÌNH CỦA BẠN"}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {travellerTypes.map((type, index) => (
            <div key={index} className="relative h-64 sm:h-80 lg:h-96 group cursor-pointer overflow-hidden rounded-lg">
              <img 
                src={type.image} 
                alt={type.label} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-lg sm:text-xl font-bold uppercase tracking-wider drop-shadow-lg">
                  {type.label}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}