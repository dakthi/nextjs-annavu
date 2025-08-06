import { HomepageProps } from '@/types/homepage';
import { getTrips } from '@/data/homepage';

export default function ExploreTripsSection({ locale }: HomepageProps) {
  const trips = getTrips(locale);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        <div className="mb-16">
          <h2 className="text-5xl font-serif font-bold text-black mb-4">
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
                  <button className="bg-emerald-700 text-white px-6 py-2 font-medium hover:bg-emerald-800 transition-colors">
                    {locale === "en" ? "EXPLORE TRIP" : "KHÁM PHÁ CHUYẾN ĐI"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}